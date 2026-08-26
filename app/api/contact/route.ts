import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  project?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!apiKey || !contactEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL.");
      return NextResponse.json(
        {
          success: false,
          message: "The contact form is not configured yet. Please email me directly.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = clean(body.name, 100);
    const email = clean(body.email, 200).toLowerCase();
    const project = clean(body.project, 100);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);

    // Honeypot: return success without sending anything to discourage bots.
    if (website) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    if (!name || !email || !project || message.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please complete every required field." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${project}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now. Please email me directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message right now. Please email me directly.",
      },
      { status: 500 },
    );
  }
}