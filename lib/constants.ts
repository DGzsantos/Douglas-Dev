// Número do WhatsApp no formato internacional (sem + ou espaços)
export const WHATSAPP_NUMBER = "5571991833417";

// Mensagem pré-preenchida ao abrir o WhatsApp
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Vi seu site e gostaria de conversar sobre um sistema para minha empresa."
);

// URL completa do WhatsApp
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Número formatado para exibição
export const WHATSAPP_NUMBER_DISPLAY = "(71) 99183-3417";

// E-mail de contato
export const EMAIL = "dgsantos006@gmail.com";