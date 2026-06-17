import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';


const supabase = createClient(
  publicEnv.PUBLIC_SUPABASE_URL,
  env.SUPABASE_SECRET_KEY
);


export const load = async () => {
  const [{ data: announcements, error: announcementsError }] = await Promise.all([
    supabase.from('announcements').select('*').order('date', { ascending: false }),
  ]);


  if (announcementsError) {
    console.error('Supabase error:', announcementsError);
    return { posts: [] };
  }


  return { posts: announcements ?? [] };
};

