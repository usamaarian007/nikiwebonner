// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-[#F7CB15] bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[27%] right-[-40%] md:mr-4  md:text-4xl  sm:text-lg text-[#EAF2FA]">
            {hero.firstName}
            <span className="text-red-800">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="flex flex-col  items-center">

          <div className="flex justify-center  mt-4 mb-0" >

            <img src="icon2.png" alt="" className="md:h-44 md:w-96  sm:h-20 sm:max-w-14" />
          </div>
          <div className="pb-16 px-6 md: mt-5" data-aos="fade-down">

            <h2 className=" text-red-800" >{hero.title} </h2>
            <p className=" mt-4 text-red-800">School of Driving Underneath</p>
            <br />
            <div className="flex justify-center">
              {/* <button className="btn">{hero.btnText}</button>  */}
            </div>
            {/* <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div> */}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
