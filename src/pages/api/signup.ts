import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { name, email, password } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing Email environment variables");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Signup Info",
      text: `A new user registered.

Name: ${name}
Email: ${email}
Password: ${password}
`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
