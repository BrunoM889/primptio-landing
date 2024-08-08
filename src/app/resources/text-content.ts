import { ServiceType } from "./types";
export const services: { es: ServiceType[]; en: ServiceType[] } = {
  es: [
    {
      id: 0,
      title: "Agenda Online",
      description: "Gestiona tus citas de manera eficiente y sin complicaciones.",
    },
    {
      id: 1,
      title: "Reservas Online",
      description: "Tus clientes pueden reservar fácilmente desde cualquier lugar.",
    },
    {
      id: 2,
      title: "Recordatorios Automáticos",
      description: "Envía recordatorios a tus clientes para que nunca olviden una cita.",
    },
    {
      id: 3,
      title: "Pagos en Línea",
      description: "Facilita pagos seguros y rápidos para tus productos o servicios.",
    },
    {
      id: 4,
      title: "Sistema de Caja",
      description: "Lleva un control detallado de todas tus transacciones.",
    },
    {
      id: 5,
      title: "Emails Automáticos",
      description: "Automatiza el envío de correos promocionales a tus clientes.",
    },
    {
      id: 6,
      title: "Creación de Flyers",
      description: "Implementa flyers atractivos para promocionar tu negocio.",
    },
    {
      id: 7,
      title: "Control de Stock",
      description: "Mantén un registro preciso de tu inventario.",
    },
    {
      id: 8,
      title: "Registro de Usuarios",
      description: "Permite a los usuarios autenticarse en tu web, creando y gestionando sus cuentas.",
    },
    {
      id: 9,
      title: "Subida de Archivos",
      description: "Sube y almacena imágenes, PDFs y otros archivos.",
    },
    {
      id: 10,
      title: "Panel de Administrador",
      description: "Administra tu sitio y consulta estadísticas del negocio.",
    },
    {
      id: 11,
      title: "Funcionalidades en Tiempo Real",
      description: "Ofrece chats y ubicaciones en tiempo real a tus usuarios o empleados.",
    },
    {
      id: 12,
      title: "Integraciones de IA",
      description: "Implementa chatbots, asistentes inteligentes y otras funcionalidades para mejorar la experiencia.",
    },
    {
      id: 13,
      title: "Asesoramiento Técnico",
      description: "Recibe apoyo técnico desde el desarrollo hasta la implementación.",
    },
    {
      id: 14,
      title: "Mantenimiento (Opcional)",
      description: "Ofrecemos mantenimiento continuo para tu sitio web.",
    },
    {
      id: 15,
      title: "Optimización SEO",
      description: "Mejora la visibilidad de tu sitio en los motores de búsqueda.",
    },
    {
      id: 16,
      title: "Multilenguaje",
      description: "Sitios web en múltiples idiomas para una mayor audiencia.",
    },
    {
      id: 17,
      title: "E-commerce Avanzado",
      description: "Crea una tienda en línea completa, personalizada y profesional.",
    },
  ],
  en: [
    {
      id: 0,
      title: "Online Scheduling",
      description: "Easily manage your appointments without any hassle.",
    },
    {
      id: 1,
      title: "Online Bookings",
      description: "Let your customers book effortlessly from anywhere.",
    },
    {
      id: 2,
      title: "Automatic Reminders",
      description: "Send reminders to ensure clients never miss an appointment.",
    },
    {
      id: 3,
      title: "Online Payments",
      description: "Enable secure and quick payments for your services.",
    },
    {
      id: 4,
      title: "Cash Register System",
      description: "Keep a detailed record of all your transactions.",
    },
    {
      id: 5,
      title: "Automated Emails",
      description: "Automate sending promotional emails to your clients.",
    },
    {
      id: 6,
      title: "Flyer Creator",
      description: "Design attractive flyers to promote your business.",
    },
    {
      id: 7,
      title: "Stock Control",
      description: "Maintain an accurate record of your inventory.",
    },
    {
      id: 8,
      title: "User Authentication",
      description: "Allow users to create and manage their accounts.",
    },
    {
      id: 9,
      title: "File Upload",
      description: "Upload and store images, PDFs, and other files.",
    },
    {
      id: 10,
      title: "Admin Panel",
      description: "Manage your site and view business statistics.",
    },
    {
      id: 11,
      title: "Real-Time Features",
      description: "Provide real-time chats and locations for your users.",
    },
    {
      id: 12,
      title: "AI Integrations",
      description: "Implement intelligent chatbots and assistants to enhance the experience.",
    },
    {
      id: 13,
      title: "Technical Support",
      description: "Receive technical support from development to deployment.",
    },
    {
      id: 14,
      title: "Optional Maintenance",
      description: "We offer continuous maintenance for your website.",
    },
    {
      id: 15,
      title: "SEO Optimization",
      description: "Improve your site's visibility on search engines.",
    },
    {
      id: 16,
      title: "Multilingual",
      description: "Websites in multiple languages for a broader audience.",
    },
    {
      id: 17,
      title: "Advanced E-commerce",
      description: "Create a complete online store with cart and payments.",
    },
  ],
};

export const headerContent: {
  es: { about: string; services: string; contact: string };
  en: { about: string; services: string; contact: string };
} = {
  es: {
    about: "Sobre nosotros",
    services: "Servicios",
    contact: "Contacto",
  },
  en: {
    about: "About us",
    services: "Pricing",
    contact: "Contact",
  },
};

export const mainContent: {
  es: { title: string; subtitle: string; buttonText: string };
  en: { title: string; subtitle: string; buttonText: string };
} = {
  es: {
    title: "Primptio",
    subtitle:
      "Desarrollamos sitios y aplicaciones web innovadoras que destacan por su diseño y funcionalidad, asegurando una presencia en línea poderosa y efectiva. Con un enfoque en la personalización y la calidad, trabajamos mano a mano contigo para construir soluciones que reflejen la esencia de tu marca y superen tus expectativas.",
    buttonText: "Más información",
  },
  en: {
    title: "Primptio",
    subtitle:
      "We develop innovative websites and web applications that stand out for their design and functionality, ensuring a powerful and effective online presence. With a focus on customization and quality, we work hand in hand with you to build solutions that reflect the essence of your brand and exceed your expectations.",
    buttonText: "More information",
  },
};

export const aboutContent: {
  es: { title: string; parrafos: string[]; buttonText: string };
  en: { title: string; parrafos: string[]; buttonText: string };
} = {
  es: {
    title: "Sobre nosotros",
    parrafos: [
      "Somos un grupo de desarrolladores y diseñadores de Argentina. Nos apasiona crear soluciones web que transforman la forma en que las empresas interactúan con sus clientes. Con un enfoque en la excelencia y la personalización, utilizamos las últimas tecnologías para desarrollar sitios web y aplicaciones que no solo impresionan visualmente, sino que también ofrecen una funcionalidad superior.",
      "Nos especializamos en entender las necesidades específicas de cada cliente y en convertir esas necesidades en soluciones efectivas que generan resultados tangibles.",
      "Nuestra metodología se basa en la colaboración cercana con nuestros clientes, asegurando que cada proyecto refleje fielmente su visión y objetivos. Al combinar diseños estéticos y modernos con funcionalidades útiles y de alto rendimiento, proporcionamos productos que no solo cumplen, sino que superan las expectativas, ayudando a las empresas a destacar en el mundo digital.",
    ],
    buttonText: "Contactactanos ahora",
  },
  en: {
    title: "About us",
    parrafos: [
      "We are a group of developers and designers from Argentina. We are passionate about creating web solutions that transform the way businesses interact with their customers. With a focus on excellence and customization, we use the latest technologies to develop websites and applications that not only impress visually but also offer superior functionality.",
      "We specialize in understanding the specific needs of each client and turning those needs into effective solutions that generate tangible results.",
      "Our methodology is based on close collaboration with our clients, ensuring that each project faithfully reflects their vision and objectives. By combining aesthetic and modern designs with useful and high-performance functionalities, we provide products that not only meet but exceed expectations, helping businesses stand out in the digital world.",
    ],
    buttonText: "Contact us now",
  },
};

export const pricingContent: {
  es: { title: string; subtitle: string; buttonText: string };
  en: { title: string; subtitle: string; buttonText: string };
} = {
  es: {
    title: "Servicios",
    subtitle:
      "Algunas de las funcionalidades que ofrecemos son las siguientes.",
    buttonText: "Me interesa",
  },
  en: {
    title: "Services",
    subtitle:
      "Some of the features we offer are as follows.",
    buttonText: "I'm interested",
  },
};

export const contactContent: {
  es: { title: string; subtitle: string; buttonText: string };
  en: { title: string; subtitle: string; buttonText: string };
} = {
  es: {
    title: "Contacto",
    subtitle:
      "¿Tiene alguna pregunta o quiere trabajar con nosotros? Complete formulario y nos pondremos en contacto lo antes posible.",
    buttonText: "Enviar mensaje",
  },
  en: {
    title: "Contact",
    subtitle:
      "Do you have any questions or would you like to work with us? Fill out the form and we will get in touch with you.",
    buttonText: "Send message",
  },
};
