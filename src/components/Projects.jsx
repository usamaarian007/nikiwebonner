import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col   gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <div  className="flex flex-col" >

          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-[300px] drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <div className="flex flex-col gap-1 mt-2">
                  <h5  className="font-bold text-xl mb-4" >{content.h}</h5>
                  <p className=" font-Poppins">{content.pp1}</p>
                  <p className=" font-Poppins">{content.pp1}</p>
                  <p className=" font-Poppins">{content.pp1}</p>

                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-[300px] drop-shadow-primary self-start"
          >
            {Projects.project_content1.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <div className="flex flex-col gap-1 mt-2">
                <h5  className="font-bold text-xl mb-4" >{content.h}</h5>
                  <p className=" font-Poppins">{content.pp1}</p>
                  <p className=" font-Poppins">{content.pp1}</p>
                  <p className=" font-Poppins">{content.pp1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
</div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
