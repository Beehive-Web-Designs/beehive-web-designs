import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand, SendEmailCommandOutput } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Send email notification
    const params = {
      Source: "support@beehivewebdesigns.com", // must be verified in SES
      Destination: {
        ToAddresses: ["spencer.s.hodson@gmail.com"], // Update with your actual recipient email
      },
      Message: {
        Subject: { Data: "New Waitlist Signup" },
        Body: {
          Text: { Data: `A new user has joined the waiting list:\n\nEmail: ${email}` },
          Html: {
            Data: `<h2>New Waitlist Signup</h2><p>A new user has joined the waiting list:</p><p><strong>Email:</strong> ${email}</p>`
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    const response = await ses.send(command);

    if (response.$metadata.httpStatusCode !== 200) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: response.$metadata.httpStatusCode }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined the waiting list" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
