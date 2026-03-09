export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // TODO: Add your email service here
  // Examples: SendGrid, Resend, Nodemailer, or a webhook
  //
  // await sendEmail({
  //   to: 'you@yourdomain.com',
  //   from: email,
  //   subject: `Contact form: ${name}`,
  //   text: message,
  // });

  console.log('Contact form submission:', { name, email, message });

  return res.status(200).json({ success: true, message: 'Message received' });
}
