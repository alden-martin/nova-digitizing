// EmailJS utility function
const sendEmail = async (templateParams) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return { error: "Missing EmailJS configuration" };
  }

  try {
    // Dynamically import EmailJS to avoid SSR issues
    const emailjs = await import("emailjs-com");

    // Initialize EmailJS with public key
    emailjs.default.init(publicKey);

    const response = await emailjs.default.send(
      serviceId,
      templateId,
      templateParams,
    );

    return {
      success: true,
      status: response.status,
      text: response.text,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Failed to send email",
    };
  }
};

export default sendEmail;
