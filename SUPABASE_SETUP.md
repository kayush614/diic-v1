# Supabase Setup: Announcements Table

## Overview

This guide walks you through creating the `announcements` table in Supabase and configuring Row Level Security (RLS) for public read-only access.

---

## Option 1: SQL Setup (Recommended for Reproducibility)

### Step 1: Copy the SQL below

Go to your Supabase dashboard → **SQL Editor** → **New Query** and paste this:

```sql
-- Create announcements table
CREATE TABLE public.announcements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up RLS (Row Level Security)
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- Anon (public) users can SELECT only
CREATE POLICY "Allow public read-only access"
ON public.announcements
FOR SELECT
TO anon
USING (true);

-- Set up auto-updated timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.announcements
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
```

### Step 2: Run the Query

Click **Run** (or Cmd+Enter). You should see green checkmarks for all queries.

---

## Option 2: Manual Setup via Dashboard

### Create the Table

1. Go to Supabase Dashboard → **SQL Editor** or **Table Editor**
2. Click **Create a new table**
3. Name it: `announcements`
4. Add columns:

| Column Name  | Type                    | Default             | Nullable | Notes                               |
| ------------ | ----------------------- | ------------------- | -------- | ----------------------------------- |
| `id`         | UUID                    | `gen_random_uuid()` | No       | Primary Key                         |
| `title`      | Text                    | —                   | No       | **Required**                        |
| `content`    | Text                    | —                   | Yes      | Optional (for future extensibility) |
| `created_at` | Timestamp with timezone | `NOW()`             | No       | Auto-generated                      |
| `updated_at` | Timestamp with timezone | `NOW()`             | No       | Auto-generated                      |

5. Click **Create**

### Enable RLS

1. Go to **Table Editor** → select `announcements` table
2. Click **Auth** (top right)
3. Enable RLS:
   - Toggle **RLS is ON**
   - Click **Create policy**
   - Select: **For SELECT** → **As anon** → **Using (true)**
   - Name it: `Allow public read-only`
   - Click **Save**

---

## Test Your Setup

### Add Sample Data

In **SQL Editor**, paste and run:

```sql
INSERT INTO announcements (title, content) VALUES
('Applications Now Open: DIIC Cohort 9', 'Join us for our next cohort. Deadline: May 31, 2025'),
('Partnership with NITI Aayog Announced', 'Exciting new collaboration for innovation initiatives'),
('₹50 Lakh Seed Fund Available', 'Supporting early-stage startups in the Delhi NCR region'),
('DIIC Ranked #1 Incubator in North India', 'Recognition from StartupIndia Program');
```

### Verify in Your App

1. Start your dev server: `npm run dev`
2. Navigate to the **"News & Announcements"** section
3. You should see the 4 sample announcements displayed in reverse chronological order
4. Check browser console for any errors

---

## Troubleshooting

### Q: Component shows "Failed to load announcements"

**A:** Check these:

1. **Environment variables set?**
   - Verify `.env` has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   - Restart dev server after changing `.env`

2. **RLS policy correct?**
   - Go to **Auth** tab on `announcements` table
   - Verify **SELECT policy exists for anon role**

3. **Table exists?**
   - Go to **SQL Editor** → run: `SELECT * FROM announcements LIMIT 1;`
   - If error, table doesn't exist—rerun the SQL setup

4. **No CORS issues?**
   - Open browser DevTools → **Network** tab
   - Look for failed requests to `https://your-project.supabase.co`
   - If CORS error, check Supabase **Authentication** → **URL Configuration**

### Q: Announcements show but date format looks wrong

**A:** The hook uses `date-fns` to format dates as `"MMM dd, yyyy"`. If format doesn't match your preference:

- Edit `src/hooks/useAnnouncements.ts`
- Change `format(new Date(item.created_at), "MMM dd, yyyy")` to your desired format
- Common formats: `"MMM d, yyyy"`, `"dd/MM/yyyy"`, `"MMMM dd, yyyy"`

---

## Next Steps: Admin Panel (Future)

When you're ready to build an admin panel to add/edit announcements:

1. **Create new authenticated route** (e.g., `/admin/announcements`)
2. **Add Supabase auth check** — only allow logged-in admin users
3. **Create form with fields**: title, content (optional)
4. **Update RLS policy** to allow INSERT/UPDATE/DELETE for admin role
5. **Use Supabase session check** to verify user is authenticated

Example future admin insert function:

```typescript
// Future: add this to useAnnouncements.ts or new file

export async function createAnnouncement(title: string, content?: string) {
  const { error } = await supabase
    .from("announcements")
    .insert([{ title, content }]);

  if (error) throw error;
  // Re-fetch announcements after insert
}
```

---

## RLS Policy Explained

The policy we created (`Allow public read-only`) means:

- ✅ **Anon (unauthenticated) users** can read announcements
- ❌ **No one** can insert/update/delete (until we add admin policies later)

This is safe for production and provides flexibility for future admin features.

---

## File Reference

- **Hook**: `src/hooks/useAnnouncements.ts`
- **Component**: `src/components/diic/EventsAnnouncements.tsx`
- **Supabase Client**: `src/lib/supabaseClient.ts`
