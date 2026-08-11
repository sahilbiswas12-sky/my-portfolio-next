import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let body: {
      name?: string;
      email?: string;
      project?: string;
      message?: string;
    };

    // =========================
    // READ REQUEST BODY
    // =========================

    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const formData = await request.formData();

      body = {
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
        project: formData.get("project")?.toString(),
        message: formData.get("message")?.toString(),
      };
    }

    const {
      name,
      email,
      project,
      message,
    } = body;

    // =========================
    // VALIDATION
    // =========================

    if (!name || !email || !project || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // =========================
    // SEND EMAIL
    // =========================

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      // Resend testing mode allows sending to
      // the verified/testing recipient.
      to: ["sahilbiswas151@gmail.com"],

      replyTo: email,

      subject: `New Portfolio Enquiry — ${project}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #111;
            max-width: 700px;
            margin: 0 auto;
          "
        >

          <h2 style="margin-bottom: 24px;">
            New Portfolio Enquiry
          </h2>

          <div style="margin-bottom: 16px;">
            <strong>Name:</strong>
            <p>${name}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong>Email:</strong>
            <p>${email}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong>Project Type:</strong>
            <p>${project}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">
              ${message}
            </p>
          </div>

          <hr style="margin: 30px 0;" />

          <p style="font-size: 13px; color: #666;">
            Sent from the Sahil Biswas portfolio contact form.
          </p>

        </div>
      `,
    });

    // =========================
    // RESEND ERROR
    // =========================

    if (error) {
      console.error("Resend API Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now.",
        },
        { status: 500 }
      );
    }

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        id: data?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or email me directly.",
      },
      { status: 500 }
    );
  }
}