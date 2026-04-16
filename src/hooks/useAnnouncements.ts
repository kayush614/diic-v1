import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export interface Announcement {
  id: string;
  title: string;
  content?: string | null;
  created_at: string;
}

interface UseAnnouncementsState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

export function useAnnouncements() {
  const [state, setState] = useState<UseAnnouncementsState>({
    announcements: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const { data, error } = await supabase
          .from("announcements")
          .select("id, title, content, created_at")
          .order("created_at", { ascending: false })
          .limit(4);

        if (error) throw error;

        setState({
          announcements: data || [],
          loading: false,
          error: null,
        });
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to fetch announcements";
        setState({
          announcements: [],
          loading: false,
          error: message,
        });
      }
    };

    fetchAnnouncements();
  }, []);

  return state;
}
