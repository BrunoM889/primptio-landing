import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

function Toast({ theme, message }: { theme: boolean; message: string }) {
  const feedBackClass = `fixed left-4 flex justify-center items-center bottom-4 px-4 min-h-11 fastCharge text-sm max-[600px]:text-xs rounded-md gap-2 z-20 py-3 mr-4 ${
    theme
      ? `bg-[#ffffff] text-[#000]`
      : `bg-[#000000] text-[#fff] shadow-lg shadow-[#0000002a]`
  }`;

  return (
    <div className={feedBackClass}>
      {(message === "Enviado correctamente" ||
        message === "Sent successfully") && (
        <IoCheckmarkCircleOutline className="h-5 w-5" />
      )}
      {(message === "Ha ocurrido un error en el envio" ||
        message === "Error sending" ||
        message === "Formato de los datos no válido" ||
        message === "Invalid data format" ||
        message === "Por favor, complete todos los campos" ||
        message === "Please fill all fields") && (
        <IoAlertCircleOutline className="h-5 w-5" />
      )}
      {message}
    </div>
  );
}

export default Toast;
