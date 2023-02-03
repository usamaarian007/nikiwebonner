import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
       

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className=" duration-300 cursor-pointer flex items-center flex-col border-2 border-slate-200 rounded-xl text-start bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <div>
         
              
              <p className="leading-7">{content.p1}</p>
              <p className="leading-7">{content.p2}</p>
              <p className="leading-7">{content.p3}</p>

                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
