import { ServiceType } from "./types";
export const services: { es: ServiceType[]; en: ServiceType[] } = {
  es: [
    {
      id: 0,
      title: "Básico",
      description: `Ideal para pequeñas empresas o profesionales independientes.`,
      price: 150,
      listOfPros: [
        "0 costos de mantenimiento.",
        "Tiempo de desarrollo rápido.",
        "Diseño limpio y adaptable a dispositivos móviles.",
        "Funcionalidades básicas de navegación y formularios.",
        "Alojamiento y dominio.",
        "Funcionalidades adicionales. (opcional)",
      ],
      completeDescription: [
        `Está enfocado en la creación de sitios web estilo landing page, diseñados para pequeñas empresas, profesionales independientes o proyectos que requieren una presencia en línea sencilla y efectiva. Además, al no requerir servidores, el sitio no tendrá costos de mantenimiento, lo que lo hace una opción económica a largo plazo.`,
        `Es ideal para mostrar información de contacto, detalles de servicios o productos, y otra información relevante en una plataforma que sea visualmente impresionante y fácil de navegar. Con hasta 5 páginas estáticas y funcionalidades básicas, es una solución perfecta para aquellos que están empezando.`,
      ],
    },
    {
      id: 1,
      title: "Intermedio",
      description: `Enfocado a empresas que necesitan mayor personalización.`,
      price: 400,
      listOfPros: [
        "Tiempo de desarrollo Moderado.",
        "Diseño personalizado y adaptable a móviles.",
        "Hasta 10 páginas.",
        "Funcionalidades avanzadas.",
        "Base de Datos y Servidor.",
        "Alojamiento y dominio.",
        "Soporte técnico básico por 3 meses.",
        "Funcionalidades adicionales. (opcional)",
      ],
      completeDescription: [
        "Perfecto para empresas que buscan un sitio web más robusto y personalizado. Con un diseño responsivo y hasta 10 páginas, este plan permite una mayor personalización ideal para sistemas de reservas, agendas de turnos, e-commerce, software empresarial y más.",
        "Además de las características básicas, este plan incluye una base de datos y la integración de un servidor, lo que facilita la conexión con otras herramientas y servicios que utilice. También incluye un año de alojamiento y dominio, y soporte técnico básico por tres meses, asegurando que tu sitio web funcione perfectamente desde el inicio.",
      ],
    },
    {
      id: 2,
      title: "Personalizado",
      description: `Pensado para construir una idea totalmente a medida.`,
      price: 0,
      listOfPros: [
        "Diseño web completamente personalizado y responsivo.",
        "Páginas ilimitadas.",
        "Funcionalidades avanzadas a eleccion.",
        "Panel de administración para autogestión de contenido.",
        "Alojamiento y dominio.",
        "Soporte técnico completo por 6 meses.",
      ],
      completeDescription: [
        "Ideal para empresas que necesitan un sitio web completamente a medida. Este plan ofrece un diseño web totalmente personalizado que se adapta perfectamente a tus necesidades y visión. Con páginas ilimitadas y funcionalidades avanzadas a tu elección, puedes crear una plataforma que haga exactamente lo que necesitas.",
        "Además, incluye un panel de administración para autogestionar el contenido, un año de alojamiento y dominio, y soporte técnico completo por seis meses. Dado que cada proyecto es único, los costos y el tiempo de desarrollo se determinarán en función de los requisitos específicos de cada proyecto.",
      ],
    },
  ],
  en: [
    {
      id: 0,
      title: "Basic",
      description: "Ideal for small businesses or freelancers.",
      price: 150,
      listOfPros: [
        "0 maintenance costs",
        "Fast development time",
        "Clean and mobile-responsive web design.",
        "Basic navigation and form functionalities.",
        "Hosting and domain for one year.",
        "Additional functionalities. (optional)",
      ],
      completeDescription: [
        "It is focused on creating landing page style websites, designed for small businesses, independent professionals or projects that require a simple and effective online presence. Additionally, by not requiring servers, the site will have no maintenance costs, making it an economical option in the long term.",
        "It is ideal for displaying contact information, service or product details, and other relevant information in a platform that is visually impressive and easy to navigate. With up to 5 static pages and basic functionality, it is a perfect solution for those just starting out.",
      ],
    },
    {
      id: 1,
      title: "Intermediate",
      description: "Focused on businesses that need greater customization.",
      price: 400,
      listOfPros: [
        "Moderate development time",
        "Responsive and personalized web design.",
        "Up to 10 pages.",
        "Advanced functionalities.",
        "Database and Server.",
        "Hosting and domain for one year.",
        "Basic technical support for 3 months.",
        "Additional functionalities. (optional)",
      ],
      completeDescription: [
        "Perfect for companies looking for a more robust and personalized website. With a responsive design and up to 10 pages, this plan allows for greater customization ideal for reservation systems, appointment schedules, e-commerce, business software and more.",
        "In addition to the basic features, this plan includes a database and server integration, making it easy to connect with other tools and services you use. It also includes one year of hosting and domain, and three months of basic technical support, ensuring your website works perfectly from the start.",
      ],
    },
    {
      id: 2,
      title: "Custom",
      description: "Designed to build a completely tailor-made idea.",
      price: 0,
      listOfPros: [
        "Fully customized and responsive web design.",
        "Unlimited pages.",
        "Advanced functionalities of your choice.",
        "Admin panel for self-managing content.",
        "Hosting and domain for one year.",
        "Comprehensive technical support for 6 months.",
      ],
      completeDescription: [
        "Ideal for businesses that need a completely tailor-made website. This plan offers a fully customized web design that perfectly fits your needs and vision. With unlimited pages and advanced functionalities of your choice, you can create a platform that does exactly what you need.",
        "Additionally, it includes an administration panel to self-manage content, one year of hosting and domain, and full technical support for six months. Since each project is unique, costs and development time will be determined based on the specific requirements of each project.",
      ],
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
      "Seleccione el plan que mejor se adapte a sus necesidades y presupuesto. Al finalizar el proceso nos pondremos en contacto vía email para brindarle todos los detalles y los pasos a seguir.",
    buttonText: "Me interesa",
  },
  en: {
    title: "Pricing",
    subtitle:
      "Choose the plan that best suits your needs and budget. At the end of the process, we will contact you via email to provide all the details and next steps.",
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
