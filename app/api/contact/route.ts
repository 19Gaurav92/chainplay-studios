import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, projectType, budget, details } = await request.json();

    // Vercel will look for these variables in your deployment settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, 
      subject: `🚀 New ChainPlay Lead: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nType: ${projectType}\nBudget: ${budget}\n\n${details}`,
      html: `
        <div style="font-family: Arial; color: #333;">
          <h2>New Agency Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <hr />
          <p>${details}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}