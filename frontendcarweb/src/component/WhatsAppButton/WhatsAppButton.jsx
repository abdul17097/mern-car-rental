// WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import "./WhatsAppButton.css";
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the actual phone number
    const phoneNumber = "03495155816";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed z-[9999] bottom-5 lg:bottom-10  right-5 lg:right-10 ">
      <button
        className=" rounded-[50%] wave text-white lg:p-4 p-2 bg-[#25D366]"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="text-[50px]" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
