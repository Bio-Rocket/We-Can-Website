import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const supabase = createClient(
    publicEnv.PUBLIC_SUPABASE_URL,
    env.SUPABASE_SECRET_KEY
);

export const load = async () => {
    const [{ data: teamMembers, error: teamError }, { data: teamPhoto, error: teamPhotoError }] = await Promise.all([
        supabase.from('team_members').select('*').order('order', { ascending: true }),
        supabase.from('miscellaneous_images').select('url').eq('image', 'team_photo').single()
    ]);

    if (teamError) console.error(teamError);
    if (teamPhoto) console.error(teamPhotoError);

    return {
        teamMembers: teamMembers ?? [],
        teamPhoto: teamPhoto?.url ?? null
    };
};