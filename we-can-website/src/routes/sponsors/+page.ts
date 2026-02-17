import type { PageLoad } from './$types';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
  const supabase = createClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      global: { fetch }
    }
  );

  const { data, error } = await supabase
    .from('sponsors')
    .select('*');

  if (error) {
    console.error('Supabase error:', error);
    return { sponsors: [] };
  }

  return {
    sponsors: data ?? []
  };
};

