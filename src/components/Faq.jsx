import { content } from "../Content";

const Faq = () => {
    const { services } = content;
    return (
        <section id="services">
            <div className="md:container px-5 py-14">
                <h2 className="title" data-aos="fade-down">
                    FAQ
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    NEED HELP?
                </h4>


                <div className=" mt-8 ">


                    <div className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit " data-aos="fade-down">

                        <h6 className="leading-7">◉ How Many Hours Will I Need?</h6>

                        <p className="leading-7"> The DVSA recommends an average of 46 hours of instructor lessons plus an extra 22 hours with family to get test ready..</p>

                        <h6 className="leading-7 mt-4">◉ Can I do an hours lesson instead of two hours?</h6>

                        <p className="leading-7">  Considering it takes an average of 46 hours of instructor lead lessons to get test ready, doing an hours lesson is not beneficial as you don't get much out of an hour.</p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;