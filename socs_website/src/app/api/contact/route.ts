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
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
      <p><strong>Category:</strong> ${formData.category}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
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
