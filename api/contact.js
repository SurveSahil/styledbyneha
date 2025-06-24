import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, contact, service, date, time, message, otherService } = req.body;

  // Validate required fields
  if (!name || !email || !contact || !service || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Format the service field
  const serviceDisplay = service === 'other' && otherService ? `Other: ${otherService}` : serviceOptions.find(opt => opt.value === service)?.label || service;

  // Create the email content
  const mailText = `
    New Booking/Enquiry from Styled by Neha Portfolio Website

    Name: ${name}
    Email: ${email}
    Contact Number: ${contact}
    Service: ${serviceDisplay}
    Preferred Date: ${date}
    Preferred Time: ${time}
    Message: ${message || '-'}
  `;

  const mailHtml = `
    <h2>New Booking/Enquiry from Styled by Neha Portfolio Website</h2>
    <ul>
      <li><b>Name:</b> ${name}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Contact Number:</b> ${contact}</li>
      <li><b>Service:</b> ${serviceDisplay}</li>
      <li><b>Preferred Date:</b> ${date}</li>
      <li><b>Preferred Time:</b> ${time}</li>
      <li><b>Message:</b> ${message || '-'}</li>
    </ul>
  `;

  // Set up Nodemailer transport (using Gmail SMTP as example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // your Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: `Styled by Neha <${process.env.EMAIL_USER}>`,
      to: 'nehamakeup01@gmail.com',
      subject: 'New Booking/Enquiry from Portfolio Website',
      text: mailText,
      html: mailHtml,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
}

// Service options for display
const serviceOptions = [
  { value: 'bridal', label: 'Bridal Makeup' },
  { value: 'party', label: 'Party Glam' },
  { value: 'hair', label: 'Hair Styling' },
  { value: '3d', label: '3D Makeup' },
  { value: 'photoshoot', label: 'Photoshoot' },
  { value: 'makeover', label: 'Complete Makeover' },
  { value: 'other', label: 'Other' },
]; 