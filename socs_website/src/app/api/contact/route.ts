import nodemailer from "nodemailer";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    category: string;
    subject: string;
    message: string;
}

export async function POST(req: Request) {
    const formData: ContactFormData = await req.json();

    const transporter = nodemailer.createTransport({
        service: "Gmail", // Use your email provider
        auth: {
            user: process.env.SMTP_USER, // Your email address
            pass: process.env.SMTP_PASS, // Your email password or app-specific password
        },
    });

    const mailOptions = {
        from: formData.email,
        to: process.env.RECIPIENT_EMAIL, // Where the form submissions will be sent
        subject: `Contact Form Submission: ${formData.subject}`,
        html: `
        <html lang="en">
            <head>
                <style>
                    body {
                        background-color: #121212;
                        color: #ffffff;
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #1e1e1e;
                        border-radius: 10px;
                    }
                    h3 {
                        font-size: 24px;
                        color: #ffffff;
                        border-bottom: 2px solid #444444;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                    }
                    .section {
                        margin-bottom: 20px;
                    }
                    .section p {
                        margin: 5px 0;
                        font-size: 16px;
                    }
                    .label {
                        font-weight: bold;
                        color: #bbbbbb;
                    }
                    .category {
                        background-color: #444444;
                        color: #ffffff;
                        padding: 6px 12px;
                        border-radius: 5px;
                        display: inline-block;
                    }
                    .message {
                        background-color: #333333;
                        color: #dddddd;
                        padding: 15px;
                        border-radius: 8px;
                        margin-top: 10px;
                    }
                    .footer {
                        margin-top: 30px;
                        text-align: center;
                        font-size: 14px;
                        color: #777777;
                    }
                    .footer a {
                        color: #0099ff;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h3>New Contact Form Submission</h3>

                    <div class="section">
                        <p><span class="label">Name:</span> ${formData.firstName} ${formData.lastName}</p>
                        <p><span class="label">Email:</span> ${formData.email}</p>
                        <p><span class="label">Contact Number:</span> ${formData.contactNumber}</p>
                    </div>

                    <div class="section">
                        <p><span class="label">Category:</span> <span class="category">${formData.category}</span></p>
                    </div>

                    <div class="section">
                        <p><span class="label">Subject:</span> ${formData.subject}</p>
                    </div>

                    <div class="section">
                        <p><span class="label">Message:</span></p>
                        <div class="message">${formData.message}</div>
                    </div>

                    <div class="footer">
                        <p>Sent with ❤️ from <a href="mailto:${formData.email}">${formData.email}</a></p>
                    </div>
                </div>
            </body>
        </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
    }
}
