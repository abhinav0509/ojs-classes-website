# EmailJS Template Configuration Guide

## Overview
This guide will help you configure the EmailJS template to send professional, branded emails to `ojsacademy@gmail.com` when users submit the enquiry form.

## Step 1: Access EmailJS Dashboard
1. Go to [https://dashboard.emailjs.com](https://dashboard.emailjs.com)
2. Log in to your account
3. Navigate to **Email Templates** section

## Step 2: Update Template (template_0dy4j5t)

### Template Settings
- **Template Name**: OJS Classes Admission Inquiry
- **Subject**: New Admission Inquiry - {{studentName}}
- **To Email**: ojsacademy@gmail.com (or use {{to_email}} variable)

### Template Content (HTML)

Copy and paste the following HTML into your EmailJS template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header with Branding -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #46397C 0%, #6B5B95 100%); padding: 30px 20px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">OJS Classes</h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">Premier Coaching Institute in Vasant Kunj</p>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 30px 20px;">
                            <h2 style="margin: 0 0 20px 0; color: #46397C; font-size: 24px; font-weight: 600;">New Admission Inquiry</h2>
                            
                            <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                You have received a new admission inquiry from your website. Please find the details below:
                            </p>
                            
                            <!-- Student Information Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa; border-left: 4px solid #46397C; border-radius: 4px; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #46397C; font-size: 18px; font-weight: 600;">Student Information</h3>
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px; width: 40%;"><strong>Student Name:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px;">{{studentName}}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong>Parent/Guardian:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px;">{{parentName}}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong>Current Class:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px;">{{class}}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong>Course Interested:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px; font-weight: 600; color: #46397C;">{{course}}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Contact Information Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa; border-left: 4px solid #6B5B95; border-radius: 4px; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #46397C; font-size: 18px; font-weight: 600;">Contact Information</h3>
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px; width: 40%;"><strong>Phone Number:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px;"><a href="tel:{{phone}}" style="color: #46397C; text-decoration: none;">{{phone}}</a></td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong>Email Address:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px;"><a href="mailto:{{email}}" style="color: #46397C; text-decoration: none;">{{email}}</a></td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong>Submitted On:</strong></td>
                                                <td style="padding: 8px 0; color: #333333; font-size: 14px;">{{submissionDate}}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Call to Action -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 30px;">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="mailto:{{email}}?subject=Re: Admission Inquiry for {{studentName}}" style="display: inline-block; padding: 12px 30px; background-color: #46397C; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 16px;">Reply to Inquiry</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 12px;">
                                <strong>OJS Classes</strong><br>
                                Gate no-3, Haryana Fresh, B-9, 8 &, Main Road, opposite to Sector B,<br>
                                near Hanuman Mandir, Sector 2b, Harijan Basti, Sector B,<br>
                                Vasant Kunj, New Delhi, Delhi 110070
                            </p>
                            <p style="margin: 10px 0 0 0; color: #999999; font-size: 11px;">
                                Phone: +91 123-456-7890 | Email: ojsacademy@gmail.com
                            </p>
                            <p style="margin: 15px 0 0 0; color: #999999; font-size: 11px;">
                                This is an automated email from your website contact form.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

### Template Variables
Make sure these variables are available in your template:
- `{{studentName}}` - Student's name
- `{{parentName}}` - Parent/Guardian name
- `{{phone}}` - Phone number
- `{{email}}` - Email address
- `{{class}}` - Current class (formatted as "Class X")
- `{{course}}` - Course interested in (formatted name)
- `{{submissionDate}}` - Date and time of submission
- `{{to_email}}` - Recipient email (ojsacademy@gmail.com)

## Step 3: Configure Email Service
1. Go to **Email Services** in EmailJS dashboard
2. Select your service (service_1vvtba3)
3. Ensure the service is connected to your email account
4. Verify that emails will be sent to: **ojsacademy@gmail.com**

## Step 4: Test the Configuration

### Option 1: Use the Test Page
1. Open `test-email.html` in your browser
2. Fill in the test form
3. Click "Send Test Email"
4. Check the inbox of ojsacademy@gmail.com

### Option 2: Test from Homepage
1. Open your website homepage
2. Fill in the admission inquiry form
3. Submit the form
4. Check the inbox of ojsacademy@gmail.com

## Step 5: Verify Email Delivery
- Check the inbox of **ojsacademy@gmail.com**
- Check spam/junk folder if email is not received
- Verify all form fields are displayed correctly in the email
- Test the "Reply to Inquiry" button functionality

## Troubleshooting

### Email not received?
1. Check spam/junk folder
2. Verify EmailJS service is active
3. Check EmailJS dashboard for error logs
4. Verify template ID and service ID are correct
5. Ensure all required variables are provided

### Template variables not showing?
1. Make sure variable names match exactly (case-sensitive)
2. Use double curly braces: `{{variableName}}`
3. Check that variables are being sent from the form

### Email formatting issues?
1. Use the provided HTML template exactly as shown
2. Test in different email clients (Gmail, Outlook, etc.)
3. Ensure inline CSS is used (email clients don't support external stylesheets)

## Current Configuration
- **Service ID**: service_1vvtba3
- **Template ID**: template_0dy4j5t
- **Public Key**: HUZfiCDhHBjXM1un8
- **Recipient Email**: ojsacademy@gmail.com

## Support
If you encounter any issues, check:
1. EmailJS dashboard logs
2. Browser console for JavaScript errors
3. Network tab for API call status

