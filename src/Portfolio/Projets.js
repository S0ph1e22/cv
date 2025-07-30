import booki from '../assets/booki.png'
import architecte from '../assets/architecte.png'
import monVieuxGrimoir from '../assets/monvieuxgrimoire.png'
import img4 from '../assets/4.png'
import Kasa from '../assets/kasa.png'
import { FaHtml5, FaCss3Alt, FaJsSquare,FaNodeJs,FaReact,FaSass,FaPhp } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";


const projets = [
  {
    id: 1,
    image: booki,
    lien: "🔗 Booki",
    description : "Création de la page d'accueil du site de l'agence Booki (HTML/CSS)",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt],
    githubUrl:'https://github.com/S0ph1e22/agenceVoyage_Booki.git'
  },
  {
    id: 2,
    image: architecte,
    lien: "🔗Sophie Bluel",
    description : "Portfolio d'une architecte d'intérieur (Javascript)",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaJsSquare],
    githubUrl:'https://github.com/S0ph1e22/Portfolio-architecte.git'
  },
  {
    id: 3,
    image: monVieuxGrimoir,
    lien: "🔗Mon vieux grimoire",
    description : " Développement du back-end du site mon vieux grimoire (Javascript, Express, MongoDB)",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaJsSquare,FaNodeJs,BiLogoMongodb,SiExpress],
    githubUrl:'https://github.com/S0ph1e22/monVieuxGrimoir.git'
  },
    {
    id: 4,
    image: img4,
    lien: "🔗Burger",
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    url:'https://www.google.com/',
    technos: [FaCss3Alt,FaPhp],
    githubUrl:'https://github.com/S0ph1e22/Burger.git'
  },
    {
    id: 5,
    image: Kasa,
    lien: "🔗Kasa",
    description : " Implémenter le front-end du site Kasa (Javascript, NodeJs, React)",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaNodeJs,FaReact,FaSass],
    githubUrl:'https://github.com/S0ph1e22/Kasa.git'
  },
];

export default projets;
