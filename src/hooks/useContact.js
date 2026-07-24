export const useContact = () => {
  // ⚠️ Cambia por tu número de WhatsApp real (con código de país sin + ni espacios)
  const PHONE_NUMBER = "+51973158539"; 

  // Función para abrir WhatsApp con mensaje personalizado o por defecto
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