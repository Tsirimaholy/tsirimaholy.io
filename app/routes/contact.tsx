import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { data, redirect } from "react-router";
import { sendEmail } from "~/lib/email";

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

export async function loader(_args: LoaderFunctionArgs) {
	// /contact only handles POST submissions; direct visits go to the contact section
	return redirect("/#contact");
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const nameValue = formData.get("name");
	const emailValue = formData.get("email");
	const messageValue = formData.get("message");

	const name = typeof nameValue === "string" ? nameValue.trim() : "";
	const email = typeof emailValue === "string" ? emailValue.trim() : "";
	const message = typeof messageValue === "string" ? messageValue.trim() : "";

	if (!name || !email || !message) {
		return data({ success: false, message: "Invalid form data." }, { status: 400 });
	}

	const receivedAt = new Date().toLocaleString("en-GB", {
		dateStyle: "medium",
		timeStyle: "short",
	});

	const emailHtml = `
		<div style="font-family:Arial,Helvetica,sans-serif;color:#111827;line-height:1.6;">
			<h2 style="margin:0 0 16px;">New contact message</h2>
			<table role="presentation" cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:15px;">
				<tr>
					<td style="font-weight:bold;color:#64748b;padding:6px 16px 6px 0;">Name</td>
					<td style="padding:6px 0;">${escapeHtml(name)}</td>
				</tr>
				<tr>
					<td style="font-weight:bold;color:#64748b;padding:6px 16px 6px 0;">Email</td>
					<td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;">${escapeHtml(email)}</a></td>
				</tr>
				<tr>
					<td style="font-weight:bold;color:#64748b;padding:6px 16px 6px 0;">Received</td>
					<td style="padding:6px 0;">${receivedAt}</td>
				</tr>
			</table>
			<p style="font-weight:bold;color:#64748b;margin:16px 0 4px;">Message</p>
			<p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
		</div>
	`;

	try {
		await sendEmail(
			"hei.tsirimaholy@gmail.com",
			`New contact from ${name} - ${email}`,
			emailHtml,
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
