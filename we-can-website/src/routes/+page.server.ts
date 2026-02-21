import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const supabase = createClient(
    publicEnv.PUBLIC_SUPABASE_URL,
    env.SUPABASE_SECRET_KEY
);

export const load = async () => {
    const [{ data: gallery, error: galleryError }, { data: homePage, error: miscError }] = await Promise.all([
        supabase.from('gallery_images').select('url').order('order', { ascending: true }),
        supabase.from('miscellaneous_images').select('url').eq('image', 'home_page').single()
    ]);

    if (galleryError) console.error(galleryError);
    if (miscError) console.error(miscError);

    return {
        galleryImages: gallery?.map((row) => row.url) ?? [],
        homePageImage: homePage?.url ?? null
    };
};