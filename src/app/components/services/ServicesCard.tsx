import {  ServiceType } from "@/app/resources/types";

interface Props {
  service: ServiceType;
  theme: boolean;
}

function ServicesCard({ service, theme}: Props) {

  return (
    <div
    
      className={`w-[100%] min-[451px]:max-w-[450px] max-[450px]:max-w-[70vw] min-w-[150px] mx-auto max-[800px]:min-w-[100px] h-full p-[1px] rounded bg-gradient-to-b shadow-lg ${
        theme
          ? "from-[#303030] to-[#0c0c0c]"
          : "from-[#e0e0e0] to-[#e7e7e7]"
      }`}
    >
      <div
        className={`w-full flex flex-col  max-[800px]:min-w-[100px] gap-2 text-sm p-4 max-[800px]:p-2  max-[800px]:py-2 h-full py-4 bg-gradient-radial ${
          theme
            ? "to-[#000000] from-[#0f0f0f]"
            : "to-[#ececec] from-[#ffffff9a]"
        } rounded max-[755px]:text-[12px]`}
      >
        <h3 className="text-xl max-[800px]:text-base">{service.title}</h3>
        <p className="mb-2 opacity-70 max-[800px]:text-xs">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default ServicesCard;
