import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendEmail(to: string, subject: string, html: string, from: string) {
	if (!resend) {
		throw new Error("RESEND_API_KEY is not configured");
	}

	try {
		const data = await resend.emails.send({
			from,
			to: [to],
			subject,
			html,
		});

		return data;
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
}
