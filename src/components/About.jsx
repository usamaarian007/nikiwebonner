import { content } from "../Content";

const About = () => {
  const { services } = content;
  return (
    <section id="about">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
        About Me
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          Who Am I
        </h4>
  

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 h-auto gap-8 mt-8 ">
          
              <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit  "data-aos="fade-up" >
              <img src="/girl.png" alt="" />
              
              </div>
              <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit "data-aos="fade-down">

              <p className="leading-7">◉ I have been told that I am a passionate people person and I use this positive attitude with my pupils to enhance their learning experience.</p>
              <p className="leading-7">◉ I use my energy and enthusiasm to great effect and strive to teach to very high standards which are key to my success.</p>
              <p className="leading-7">◉ My goal is to not only help the pupils pass their driving test but to be Mindful and become safe drivers for life!</p>
              <p className="leading-7">◉ My name is Nikkie Bonner, I am a fully qualified Approved Driving Instructor (ADI).</p>
              <p className="leading-7">◉ I am a naturally pro-active person who goes the extra mile to understand the challenges a pupil might face when learning to drive.</p>
              <p className="leading-7">◉ As a Driving and Test Nerves Specialist, I teach nervous and anxious pupils tried and tested real-world techniques that can not only help with the stress and anxiety of learning to drive but also how to manage and stay in control in everyday life.</p>
              
              </div>
        </div>
      </div>
    </section>
  );
};

export default About;
