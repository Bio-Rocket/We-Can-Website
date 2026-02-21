import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const supabase = createClient(
    publicEnv.PUBLIC_SUPABASE_URL,
    env.SUPABASE_SECRET_KEY
);

export const load = async () => {
    const [{ data: proteusPhoto, error: proteusError }, { data: proteusSmallPhoto, error: proteusSmallError }] = await Promise.all([
        supabase.from('proteus').select('url').eq('name', 'Cross-section').single(),
        supabase.from('proteus').select('url').eq('name', 'small-image').single()
    ]);

    if (proteusError) console.error(proteusError);
    if (proteusSmallError) console.error(proteusSmallError);

    return {
        proteusPhoto: proteusPhoto?.url ?? null,
        proteusSmallPhoto: proteusSmallPhoto?.url ?? null
    };
};