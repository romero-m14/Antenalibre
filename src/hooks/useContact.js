export const useContact = () => {
  const PHONE_NUMBER = "+51973158539"; 
  const openWhatsApp = (customMessage) => {
    const defaultMessage = "¡Hola Antena Libre! Quisiera enviar una propuesta para que la evalúen y publiquen en el blog.";
    const messageToSend = customMessage || defaultMessage;

    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(messageToSend)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return { 
    openWhatsApp, 
    phoneNumber: PHONE_NUMBER 
  };
};