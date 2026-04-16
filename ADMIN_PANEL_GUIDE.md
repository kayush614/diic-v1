# Admin Panel Extension Guide

This guide explains how to extend the announcements system with an admin panel for creating, editing, and deleting announcements.

---

## Architecture Overview

```
Public Site (Read-only)
├── EventsAnnouncements.tsx → useAnnouncements() → [Supabase SELECT]
│
Admin Panel (Write access)
├── /admin/announcements → useAnnouncementsAdmin()
│   ├── Create form → insertAnnouncement()
│   ├── Edit form → updateAnnouncement()
│   └── Delete button → deleteAnnouncement()
└── [Supabase INSERT/UPDATE/DELETE with auth check]
```

---

## Step 1: Set Up Supabase Authentication

### Create Admin User(s)

1. Go to Supabase Dashboard → **Authentication** → **Users**
2. Click **Invite user** (top right)
3. Enter admin email (e.g., `admin@diic.com`)
4. Copy the invite link, open in incognito, set password
5. Note the user ID (you'll need it for RLS policies)

### Update RLS Policy

Add write access for authenticated admin users. In **SQL Editor**, run:

```sql
-- Allow authenticated users (we'll restrict to admins later) to insert
CREATE POLICY "Allow authenticated users to insert announcements"
ON public.announcements
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update own records
CREATE POLICY "Allow authenticated users to update announcements"
ON public.announcements
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to delete announcements
CREATE POLICY "Allow authenticated users to delete announcements"
ON public.announcements
FOR DELETE
TO authenticated
USING (true);

-- Create admin_users table for role management (optional but recommended)
CREATE TABLE public.admin_users (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Restrict write access to admins only (alternative, more secure RLS)
-- (Implementation shown in Step 3)
```

---

## Step 2: Create Admin Management Hook

Create `src/hooks/useAnnouncementsAdmin.ts`:

```typescript
import { useCallback } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Announcement } from "./useAnnouncements";

export function useAnnouncementsAdmin() {
  // Check if user is authenticated
  const checkAuth = useCallback(async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) throw new Error("Not authenticated");
    return session;
  }, []);

  // Create announcement
  const createAnnouncement = useCallback(
    async (title: string, content?: string) => {
      await checkAuth();

      const { data, error } = await supabase.from("announcements").insert([
        {
          title,
          content: content || null,
        },
      ]);

      if (error) throw error;
      return data;
    },
    [checkAuth],
  );

  // Update announcement
  const updateAnnouncement = useCallback(
    async (id: string, title: string, content?: string) => {
      await checkAuth();

      const { data, error } = await supabase
        .from("announcements")
        .update({ title, content: content || null })
        .eq("id", id);

      if (error) throw error;
      return data;
    },
    [checkAuth],
  );

  // Delete announcement
  const deleteAnnouncement = useCallback(
    async (id: string) => {
      await checkAuth();

      const { error } = await supabase
        .from("announcements")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    [checkAuth],
  );

  return {
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  };
}
```

---

## Step 3: Enhance Security with Admin Roles

For production, restrict database writes to admin users only. Update your RLS policies:

```sql
-- Update policies to check admin_users table
DROP POLICY IF EXISTS "Allow authenticated users to insert announcements" ON public.announcements;
DROP POLICY IF EXISTS "Allow authenticated users to update announcements" ON public.announcements;
DROP POLICY IF EXISTS "Allow authenticated users to delete announcements" ON public.announcements;

-- Insert only for admins
CREATE POLICY "Allow admin to insert announcements"
ON public.announcements
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.id = auth.uid()
  )
);

-- Update only for admins
CREATE POLICY "Allow admin to update announcements"
ON public.announcements
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.id = auth.uid()
  )
);

-- Delete only for admins
CREATE POLICY "Allow admin to delete announcements"
ON public.announcements
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.id = auth.uid()
  )
);
```

Then add admin user ID to `admin_users` table:

```sql
INSERT INTO public.admin_users (id, email)
VALUES ('<USER_ID_HERE>', 'admin@diic.com');
```

---

## Step 4: Create Admin Pages

### Option A: Standalone Admin Route (Simple)

Create `src/pages/AdminAnnouncements.tsx`:

```typescript
import { useState } from "react"
import { useAnnouncementsAdmin } from "@/hooks/useAnnouncementsAdmin"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AdminAnnouncements() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const { createAnnouncement } = useAnnouncementsAdmin()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createAnnouncement(title, content)
      setTitle("")
      setContent("")
      alert("Announcement created!")
    } catch (err) {
      alert("Error: " + (err instanceof Error ? err.message : "Unknown error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Content (optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating..." : "Create Announcement"}
        </Button>
      </form>
    </div>
  )
}
```

### Option B: Embedded Modal (Advanced)

Add a modal dialog in your existing dashboard that opens an announcement form. Use `@radix-ui/react-dialog` (already installed).

---

## Step 5: Add Admin Route Protection

Create `src/hooks/useAdminAuth.ts`:

```typescript
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

export function useAdminAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/login");
        return;
      }

      // Check if user is in admin_users table
      const { data } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", session.user.id)
        .single();

      if (data) {
        setIsAdmin(true);
      } else {
        navigate("/"); // Redirect if not admin
      }

      setLoading(false);
    };

    checkAdmin();
  }, [navigate]);

  return { isAdmin, loading };
}
```

Then protect your admin route:

```typescript
// In your router setup
import { useAdminAuth } from "@/hooks/useAdminAuth"

function AdminRoute() {
  const { isAdmin, loading } = useAdminAuth()

  if (loading) return <div>Loading...</div>
  if (!isAdmin) return null

  return <AdminAnnouncements />
}
```

---

## Step 6: Testing the Admin Panel

1. **Create announcement via form** → verify it appears in public site
2. **Edit announcement** → check updated content shows in public site
3. **Delete announcement** → verify it disappears (refresh public site)
4. **Test auth** → try accessing `/admin/announcements` without logging in → should redirect

---

## Database Diagram (Full System)

```
┌─────────────────────────────────────────────┐
│        announcements (public read)          │
├─────────────────────────────────────────────┤
│ id (UUID)                                   │
│ title (text, required)                      │
│ content (text, optional)                    │
│ created_at (timestamp, auto)                │
│ updated_at (timestamp, auto)                │
└─────────────────────────────────────────────┘
           ↓ (SELECT for all users)
           ↓ (INSERT/UPDATE/DELETE for admins)

┌─────────────────────────────────────────────┐
│    admin_users (for role management)        │
├─────────────────────────────────────────────┤
│ id (UUID, FK: auth.users)                   │
│ email (text, unique)                        │
│ created_at (timestamp, auto)                │
└─────────────────────────────────────────────┘
```

---

## Minimal Version (MVP)

If you want to keep it super simple without role table:

1. Skip `admin_users` table
2. Use generic authenticated policies (any logged-in user can write)
3. Only invite team members you trust to Supabase auth
4. Use `checkAuth()` in hook (already checks session)

---

## Next Steps

- [ ] Set up Supabase Auth with email/password or OAuth (GitHub, Google)
- [ ] Create admin page component
- [ ] Add navigation link to admin panel (protected route)
- [ ] Create admin_users table and populate with team members
- [ ] Update RLS policies for admin-only writes
- [ ] Deploy and test in production
- [ ] Optional: Add editor (react-quill, tiptap) for rich text content

---

## Reference Files

- Hook: `src/hooks/useAnnouncementsAdmin.ts`
- Page: `src/pages/AdminAnnouncements.tsx` (create this)
- Auth guard: `src/hooks/useAdminAuth.ts` (create this)
- RLS policies: Check in Supabase **Authentication** → **Policies** tab
