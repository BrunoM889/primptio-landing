"use client";
import { useState } from "react";
import { MessageType } from "../resources/types";
function useForm(language: string) {
  const [feedBack, setFeedBack] = useState<string>("");
  const [messageData, setMessageData] = useState<MessageType>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    // Check if the form is valid
    if (feedBack !== "") return;
    if (
      messageData.name === "" ||
      messageData.email === "" ||
      messageData.message === ""
    ) {
      setFeedBack(
        language === "Eng"
          ? "Por favor, complete todos los campos"
          : "Please fill all fields"
      );
      setTimeout(() => {
        setFeedBack("");
      }, 3000);
      return;
    } else if (
      messageData.name.length < 3 ||
      messageData.email.length < 5 
    ) {
      setFeedBack(
        language === "Eng"
          ? "Formato de los datos no válido"
          : "Invalid data format"
      );
      setTimeout(() => {
        setFeedBack("");
      }, 3000);
      return;
    }

    setFeedBack(language === "Eng" ? "Enviando..." : "Sending...");

    const data = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_USER_ID,
      template_params: {
        username: messageData.name,
        email: messageData.email,
        message: messageData.message,
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };

    setMessageData({
      name: "",
      email: "",
      message: "",
    });

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const status = await res.text();

      if (status === "OK") {
        setFeedBack(
          language === "Eng" ? "Enviado correctamente" : "Sent successfully"
        );
        setTimeout(() => {
          setFeedBack("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setFeedBack(
        language === "Eng"
          ? "Ha ocurrido un error en el envio"
          : "Error sending"
      );
      setTimeout(() => {
        setFeedBack("");
      }, 3000);
    }
  };

  return {
    feedBack,
    setMessageData,
    handleSubmit,
    messageData,
  };
}

export default useForm;
