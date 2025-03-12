// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      );
    }

    // Set up nodemailer transporter with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format the service name for better readability
    const serviceMap: Record<string, string> = {
      general: 'General Inquiry',
      software: 'Software & SaaS Solutions',
      hardware: 'Hardware & IT Infrastructure',
      web: 'Web & Digital Services',
      home: 'Home Automation',
    };
    
    const serviceName = serviceMap[data.service] || 'General Inquiry';

    // Send the email
    await transporter.sendMail({
      from: `"mySmart Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form: ${serviceName} inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${data.phone || 'Not provided'}
        Service: ${serviceName}
        Message: 
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0891b2; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">This email was sent from the contact form on mysmart.mu website</p>
        </div>
      `,
    });

    // Send an auto-reply to the person who submitted the form
    await transporter.sendMail({
      from: `"mySmart" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Thank you for contacting mySmart',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #0891b2;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message regarding ${serviceName.toLowerCase()} and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message for your records:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0891b2; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p>If you have any urgent concerns, please don't hesitate to call us.</p>
          <p>Best regards,</p>
          <p><strong>The mySmart Team</strong></p>
        </div>
      `,
    });

    // Log the submission
    console.log('Contact form submission sent via email:', {
      name,
      email,
      service: serviceName,
    });
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Message received. We will contact you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process the request' }, 
      { status: 500 }
    );
  }
}