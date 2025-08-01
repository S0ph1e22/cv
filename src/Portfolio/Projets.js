import booki from '../assets/booki.png'
import architecte from '../assets/architecte.png'
import monVieuxGrimoir from '../assets/monvieuxgrimoire.png'
import burger from '../assets/burger.png'
import Kasa from '../assets/kasa.png'
import { FaHtml5, FaCss3Alt,FaFigma, FaJsSquare,FaNodeJs,FaReact,FaSass,FaPhp } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const projets = [
  {
    id: 1,
    image: booki,
    lien: "🔗 Booki",
    description : "Réalisation de l’interface responsive du site Booki à partir de maquettes fournies en versions desktop, tablette et mobile. L’objectif était de permettre aux utilisateurs de rechercher des hébergements et activités par ville. \n\n Adapter fidèlement les maquettes sur les trois formats (desktop, tablette, mobile) m’a demandé une bonne gestion des media queries. \nJ’ai structuré mon CSS de façon modulaire pour assurer un bon rendu sur tous les supports. J’ai utilisé des outils comme les règles de Figma ou l’inspecteur de navigateur pour m’assurer que les espacements, tailles de polices et couleurs correspondaient exactement aux maquettes.\n\n Ce projet m’a permis de renforcer mes compétences en intégration responsive, en gestion des media queries, en respect de maquettes via Figma, ainsi qu’en structuration claire et modulaire du code HTML/CSS.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaFigma],
    githubUrl:'https://github.com/S0ph1e22/agenceVoyage_Booki.git'
  },
  {
    id: 2,
    image: architecte,
    lien: "🔗Sophie Bluel",
    description : "Participation en tant que développeuse front-end à la création d’un site portfolio dynamique pour une architecte d’intérieur, en collaboration avec une équipe projet. J’ai été en charge de l’intégration des pages dynamiques à partir de maquettes Figma, ainsi que du développement complet de fonctionnalités interactives. \n\n Parmi les principaux défis, j’ai dû intégrer une galerie dynamique avec filtrage par catégorie via une API. \nPour y répondre, j’ai structuré mon code de façon modulaire et utilisé fetch pour afficher les données en temps réel. \nJ’ai également conçu une interface de connexion sécurisée pour l’administrateur, avec une gestion fine des erreurs, et développé une modale permettant l’ajout de nouveaux projets avec prévisualisation et envoi via FormData. \n\nCe projet m’a permis de renforcer mes compétences en JavaScript natif, en manipulation du DOM, en appels API REST, et en création d’interfaces réactives et accessibles.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaJsSquare, FaFigma],
    githubUrl:'https://github.com/S0ph1e22/Portfolio-architecte.git'
  },
  {
    id: 3,
    image: monVieuxGrimoir,
    lien: "🔗Mon vieux grimoire",
    description : " Développement de l’API back-end du site Mon Vieux Grimoire, un projet de référencement et de notation de livres pour une chaîne de librairies indépendante. En binôme avec un développeur front-end, j’ai pris en charge la conception complète de l’API selon un cahier des charges précis. Le back-end a été développé avec Node.js et Express, avec une attention particulière portée à la validation des données, la gestion des utilisateurs (authentification, autorisation), la persistance des données en base MongoDB, ainsi que la sécurisation des routes.\n\n L’une des problématiques majeures rencontrées concernait l’optimisation des images envoyées par les utilisateurs. J’ai donc mis en place un traitement automatique à l’upload, permettant de réduire la taille des images tout en conservant leur qualité pour la pratiques du Green Code.\n\nCe projet m’a permis de consolider mes compétences en conception d’API REST, en sécurisation des endpoints, en gestion de fichiers avec Multer, et en mise en place d’une logique métier complète côté serveur.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaJsSquare,FaFigma,FaNodeJs,BiLogoMongodb,SiExpress],
    githubUrl:'https://github.com/S0ph1e22/monVieuxGrimoir.git'
  },
    {
    id: 4,
    image: Kasa,
    lien: "🔗Kasa",
    description : " Développement en freelance du nouveau site de location d’appartements de Kasa, dans le cadre d’une refonte complète de leur ancien site en ASP.NET vers une stack JavaScript moderne. En autonomie, j’ai conçu l’application front-end en React à partir de maquettes Figma responsives, en mettant en place les routes avec React Router et en intégrant les données d’un fichier JSON en l’absence de back-end. \n\n J’ai dû relever plusieurs défis techniques, notamment la création d’une galerie d’images avec navigation circulaire, la gestion de composants Collapse dynamiques, et l’intégration des contraintes de design précises (tailles fixes, centrage, animations CSS).\n\nCe projet m’a permis de renforcer mes compétences en React, en gestion des états, en structuration de composants modulaires, ainsi qu’en animation CSS et en utilisation de Sass pour une gestion efficace des styles.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaNodeJs,FaReact,FaSass,FaFigma],
    githubUrl:'https://github.com/S0ph1e22/Kasa.git'
  },
    {
    id: 5,
    image: burger,
    lien: "🔗Burger",
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    url:'https://www.google.com/',
    technos: [FaCss3Alt,FaPhp,DiMysql ],
    githubUrl:'https://github.com/S0ph1e22/Burger.git'
   
  },
];

export default projets;
