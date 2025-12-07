# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Durvalis contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update ContactForm.jsx
Open `src/components/ContactForm.jsx` and replace these values around line 30:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check contact@durvalis.com for the email

## Email Template Variables
The form sends these variables to EmailJS:
- `from_name` - User's name
- `from_email` - User's email address
- `subject` - Message subject
- `message` - Message content
- `to_email` - Your email (contact@durvalis.com)

## Troubleshooting
- **Emails not sending?** Check your EmailJS dashboard for error logs
- **Wrong email address?** Verify your email service is properly connected
- **Rate limit?** Free plan allows 200 emails/month
- **Spam folder?** Check spam/junk folders for test emails

## Security Note
The public key is safe to expose in client-side code. EmailJS handles the actual email sending securely on their servers.

## Alternative: Environment Variables (Optional)
For better security, you can use environment variables:

1. Create `.env` file in project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update ContactForm.jsx:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to `.gitignore` to keep keys private
