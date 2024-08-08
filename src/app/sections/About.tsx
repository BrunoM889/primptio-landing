import { FillLogo } from "../components/Icons";
import { AppContextType } from "../resources/types";
import { DivLine, Button } from "../components";
import { aboutContent } from "../resources/text-content";

function About({ appState }: { appState: AppContextType }) {
  const content =
    appState.language === "Eng" ? aboutContent.es : aboutContent.en;

  const strongClass = `${
    appState.mode ? `bg-[#ffffff] text-[#000]` : `bg-[#000000] text-[#fff]`
  } font-normal px-1 `;

  const pClass = "opacity-70 mb-2 max-[600px]:text-xs mb-2 max-[600px]:text-xs";

  return (
    <section
      className="w-full relative flex flex-col h-fit min-h-[93vh] pt-24 pb-22"
      id="about"
    >
      <DivLine appState={appState} />
      <div className="h-fit z-10">
        <h2
          style={{
            textShadow: `0 0 15px ${appState.mode ? `#ffffff80` : `#00000080`}`,
          }}
          className="text-6xl font-light mb-6 max-[500px]:text-4xl"
        >
          {content.title}
        </h2>
        {appState.language === "Eng" ? (
          <div>
            <p className={pClass}>
              Somos un grupo de desarrolladores y diseñadores de Argentina. Nos
              apasiona crear soluciones web que transforman la forma en que las
              empresas interactúan con sus clientes. Con un enfoque en la
              excelencia y la personalización, utilizamos las{" "}
              <strong className={strongClass}>últimas tecnologías</strong> para
              crear aplicaciones que no solo impresionan visualmente, sino que
              también ofrecen una funcionalidad superior.
            </p>
            <p className={pClass}>
              Nos especializamos en entender las necesidades específicas de cada
              cliente y en convertir esas necesidades en{" "}
              <strong className={strongClass}>soluciones efectivas</strong> que
              generan{" "}
              <strong className={strongClass}>resultados tangibles.</strong>
            </p>
            <p className={pClass}>
              Nuestra metodología se basa en la colaboración cercana con
              nuestros clientes, asegurando que cada proyecto refleje fielmente
              su visión y objetivos. Al combinar diseños estéticos y modernos con 
              funcionalidades útiles y de alto rendimiento, proporcionamos{" "}
              <strong className={strongClass}>
                productos que no solo cumplen, sino que superan las expectativas
              </strong>
              , ayudando a las empresas a destacar en el mundo digital.
            </p>
          </div>
        ) : (
          <div>
            <p className={pClass}>
              We are a group of developers and designers from Argentina. We are
              passionate about creating web solutions that transform the way
              businesses interact with their customers. With a focus on
              excellence and customization, we use the{" "}
              <strong className={strongClass}>latest technologies</strong> to
              develop websites and applications that not only impress visually
              but also offer superior functionality.
            </p>
            <p className={pClass}>
              We specialize in understanding the specific needs of each client
              and turning those needs into{" "}
              <strong className={strongClass}>effective solutions</strong> that
              generate{" "}
              <strong className={strongClass}>tangible results.</strong>
            </p>
            <p className={pClass}>
              Our methodology is based on close collaboration with our clients,
              ensuring that each project faithfully reflects their vision and
              objectives. By combining aesthetic and modern designs with useful
              and high-performance functionalities, we provide{" "}
              <strong className={strongClass}>
                products that not only meet but exceed expectations
              </strong>
              , helping businesses stand out in the digital world.
            </p>
          </div>
        )}
      </div>
      <div className="opacity-10 absolute top-[80px] left-[20vw]">
        <FillLogo
          width={`200%`}
          height={`200%`}
          color={appState.mode ? `#ffffffab` : `#000`}
        />
      </div>
      <a href="#contact" className="self-end mt-8">
        <Button appState={appState} content={content.buttonText} />
      </a>
    </section>
  );
}

export default About;
