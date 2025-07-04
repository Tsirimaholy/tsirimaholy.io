import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(
	to: string,
	subject: string,
	html: string,
	from: string,
) {
	try {
		const data = await resend.emails.send({
			from: from,
			to: [to],
			subject: subject,
			html: html,
		});

		return data;
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
}

export { sendEmail };
