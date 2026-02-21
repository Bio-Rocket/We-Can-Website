import type { PageServerLoad } from './$types.js';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch }) => {
	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch },
	});

	const { data, error } = await supabase
		.from('sponsors')
		.select('id,name,logo_color_path,logo_black_path,website_url,tier,order_index')
		.order('order_index', { ascending: true });

	if (error) {
		console.error('Supabase error:', error);
		return { sponsors: [] };
	}

	return { sponsors: data ?? [] };
};
