import type { ActionFunctionArgs } from "react-router";
import { data } from "react-router";
import { sendEmail } from "~/lib/email";

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const name = formData.get("name");
	const message = formData.get("message");
	const email = formData.get("email");

	if (
		typeof name !== "string" ||
		typeof message !== "string" ||
		typeof email !== "string" ||
		!name.trim() ||
		!message.trim() ||
		!email.trim()
	) {
		return data({ success: false, message: "Invalid form data." }, { status: 400 });
	}

	try {
		await sendEmail(
			"hei.tsirimaholy@gmail.com",
			`From portfolio Contact - [${name}]`,
			message,
			"Acme <onboarding@resend.dev>",
		);

		return data({ success: true, message: "Message sent successfully." });
	} catch {
		return data(
			{
				success: false,
				message: "Unable to send your message right now. Please try again.",
			},
			{ status: 500 },
		);
	}
}
