// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

//import project1 from "./assets/images/projects/img1.png";
//import project2 from "./assets/images/projects/img2.png";
//import project3 from "./assets/images/projects/img3.png";
import personnew from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import {FaFacebook} from "react-icons/fa"
import {AiOutlineTwitter} from 'react-icons/ai'
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "MindfuL",
    firstName: "Breath | Relax | ",
    LastName: "Drive",
    btnText: "Hire Me",
    image: "/girl.png",
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        p3: "○ *Mindful School of Driving*",
        p2: "○ Breath ○ Relax ○ Drive",
        p1: "○ Female Driving Instructor? ✅",
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        p3: "○ Automatic or Manual ✅️",
        p2: "○ Professional and Friendly ✅",
        p1: "○ Calm and Patient ✅",
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        p3: "○ Driving Anxiety and Test Nerves Specialist ✅",
        p2: "○ What Else Can You Wish For ?",
        p1: "○ * Book Your Drivng Lesson Today.....",
        // title: "PhotoShop Editing",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        // logo: services_logo3,
      },
    ],
  },

  Projects: {
    title: "PRICES",
    subtitle: "ABOUT PACKAGES",
    image: personnew,
    project_content: [
      {
        h: "MANUAL",
        pp1: "◉ 2 hours leason - £35 per hour - *£70*",
        pp2: "◉ 10 hours block booking - *£330*",
        pp3: "◉ 20 Hours block booking - *£620*",
      },
    ],
    project_content1: [
      {
        h: "AUTOMATIC",
        pp1: "◉ 2 hours leason - £37.50 per hour *£75*",
        pp2: "◉ 10 hours block booking - *£350*",
        pp3: "◉ 20 Hours block booking - *£620*",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "Very great instructor Very great instructor, passed my test due to best practice from them. Great instructor, I would suggest to my friends.",
        img: "/girl.jpg",
        data: "Date of experience: 28 December 2022",
        name: "Monica",
      },
      {
        review:
          "Fantastic Experience, passed on first try Nikki was a fantastic instructor whose expert guidance allowed me to pass my test on the first try! I'm American and had driven for 15 years in the US, but had a lot to learn and unlearn in order to drive safely here in the UK. Very happy to have found Nikki and definitely recommend her services to any and all novice drivers!",
        img: avatar2,
        name: "Alexander",
        data: "Date of experience: 28 December 2022",
        img: "/child.jpg",
      },
      {
        review:
          "Nikkie, highly recommend! Nikkie is 100% the most perfect instructor.",
        img: "/men.jpg",
        name: "David",
        data: "Date of experience: 10 December 2022",
      },
      {
        review:
          "My experience with drive johnson's I started my driving journey with Nikkie, from the very beginning she was so patient and caring, only 5 months in and i was able to pass as Nikkie taught me to such a high standard. She helped immensely with my anxiety's behind the wheel too and helped me get over my anxiety's and nerves about my test. couldn't fault her one bit, going to miss my weekly lessons very ",
        img: "/men1.jpg",
        name: "Walter",
        data: "Date of experience: 14 November 2022",
      },
    ],
  },
  Hireme: {
    title: "Terms and conditions",
    subtitle: "IMPORTANT!",
    image1: Hireme_person,
    image2: Hireme_person2,

    para1:
      "◉ 48 hours cancellation notice period is required. If you cancel your booking with less than 48 hours notice period, you will forfeit the payment for that lesson. This is non negotiable.",

    para2:
      "◉ All efforts are made to ensure that you are not just ready for the test, but also learn skills to be able to drive safely for life.",

    para3:
      "◉ You (pupil) will be trained to a high standard and you will be prepared both mentally and physically. However if for some reason you are not ready for the test, I reserve the right to refuse to let you use my car for the test. If you insist on having a go, you would have to make alternative arrangements to attend your test. Any further lessons will be at the normal price.",

    para4:
      "◉ To be test ready, you must be able to drive independently without my help whether verbally or physically.",

    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "FaceBook",
        icon: FaFacebook,
        link: "https://www.facebook.com",
      },
      {
        text: "Twitter",
        icon: AiOutlineTwitter,
        link: "https://www.twitter.com",
      },
      {
        text: "07460 062 279  ",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
