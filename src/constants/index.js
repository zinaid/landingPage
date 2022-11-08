import {service1, service2, service3, laravel,mysql, reactIcon, tailwindLogo, linkedin} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact me",
  },
];

export const contact = [
  {
    title: "Full Name",
    desc: "Zinaid Kapić",
    link: "https://www.researchgate.net/profile/Zinaid-Kapic",
    icon: linkedin,
  },
  {
    title: "Email Address",
    desc: "zinaid_kapic@hotmail.com",
    link: "https://www.linkedin.com/in/zinaid-kapi%C4%87-736aaa1b2/",
    icon: linkedin,
  },
  {
    title: "Linkedin",
    desc: "zinaid",
    link: "https://www.linkedin.com/in/zinaid-kapi%C4%87-736aaa1b2/",
    icon: linkedin,
  },
  {
    title: "GitHub",
    desc: "zinaid",
    link: "https://github.com/zinaid",
    img: linkedin,
  },
];

export const skills = [
  {
    title: laravel,
    desc: "Laravel",
  },
  {
    title: mysql,
    desc: "MySQL",
  },
  {
    title: reactIcon,
    desc: "React",
  },
  {
    title: tailwindLogo,
    desc: "Tailwind",
  },
];

export const services = [
  {
    icon: service1,
    title: "Software Development",
  },
  {
    icon: service2,
    title: "Web App Development",
  },
  {
    icon: service3,
    title: "Data Analysis and Data Science",
  },
];