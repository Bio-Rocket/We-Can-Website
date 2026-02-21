import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { Resend } from 'resend';

const supabase = createClient(
	publicEnv.PUBLIC_SUPABASE_URL,
	env.SUPABASE_SECRET_KEY
);

const resend = new Resend(env.RESEND_API_KEY);

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		const form = await request.formData();

		const name = String(form.get('name') ?? '').trim();
		const email = String(form.get('email') ?? '').trim();
		const phone = String(form.get('phone') ?? '').trim();
		const message = String(form.get('message') ?? '').trim();
		const website = String(form.get('website') ?? '');

		if (website) return fail(400, { error: 'Spam detected.' });
		if (!name || !email || !message) {
			return fail(400, { error: 'Missing required fields.' });
		}

		const { error: dbError } = await supabase
			.from('get_involved_submissions')
			.insert([{ name, email, phone, message }]);

		if (dbError) {
            console.error('Supabase insert error:', dbError);
            return fail(500, { error: `Could not save submission: ${dbError.message}` });
        }

		const { error: mailError } = await resend.emails.send({
			from: 'WCAN <info@wcan-aero.ca>',
			to: [env.CONTACT_TO_EMAIL],
			subject: `New Get Involved form: ${name}`,
			replyTo: email,
			text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nIP: ${getClientAddress()}\n\n${message}`
		});

		if (mailError) return fail(502, { error: 'Saved, but email failed to send.' });

		return { success: true };
	}
};