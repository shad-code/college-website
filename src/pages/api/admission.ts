import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      fullName,
      email,
      phone,
      gender,
      dob,
      address,
      course,
    } = req.body as {
      fullName: string;
      email: string;
      phone: string;
      gender: string;
      dob: string;
      address: string;
      course: string;
    };

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        dns: { family: 4 }, // prevents IPv6 errors
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Admission Form from ${fullName}`,
        text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Gender: ${gender}
Date of Birth: ${dob}
Address: ${address}
Course: ${course}
        `,
      };

      await transporter.sendMail(mailOptions);

      return res
        .status(200)
        .json({ success: true, message: "Admission form sent successfully!" });
    } catch (error) {
      console.error("Email error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send admission form." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
