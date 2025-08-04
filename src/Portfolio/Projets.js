import booki from '../assets/booki.png'
import architecte from '../assets/architecte.png'
import monVieuxGrimoir from '../assets/monvieuxgrimoire.png'
import burger from '../assets/burger.png'
import Kasa from '../assets/kasa.png'
import top5 from '../assets/top5.png'
import { FaHtml5, FaCss3Alt,FaFigma, FaJsSquare,FaNodeJs,FaReact,FaSass,FaPhp,FaBootstrap } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiMysql, DiJqueryLogo } from "react-icons/di";

const projets = [
  {
    id: 1,
    image: booki,
    lien: "🔗 Booki",
    description : "Réalisation de l’interface responsive du site Booki à partir de maquettes fournies en versions desktop, tablette et mobile. L’objectif était de permettre aux utilisateurs de rechercher des hébergements et activités par ville. \n\n Adapter fidèlement les maquettes sur les trois formats (desktop, tablette, mobile) m’a demandé une bonne gestion des media queries. \nJ’ai structuré mon CSS de façon modulaire pour assurer un bon rendu sur tous les supports. J’ai utilisé des outils comme les règles de Figma pour m’assurer que les espacements, tailles de polices et couleurs correspondaient exactement aux maquettes.\n\n Ce projet m’a permis de renforcer mes compétences en intégration responsive, en gestion des media queries, en respect de maquettes via Figma, ainsi qu’en structuration claire et modulaire du code HTML/CSS.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaFigma],
    githubUrl:'https://github.com/S0ph1e22/agenceVoyage_Booki.git'
  },
  {
    id: 2,
    image: architecte,
    lien: "🔗Sophie Bluel",
    description : "Participation en tant que développeuse front-end à la création d’un site portfolio dynamique pour une architecte d’intérieur, en collaboration avec une équipe projet. J’ai été en charge de l’intégration des pages dynamiques à partir de maquettes Figma, ainsi que du développement complet de fonctionnalités interactives. \n\n Parmi les principaux défis, j’ai dû intégrer une galerie dynamique avec filtrage par catégorie via une API. Pour y répondre, j’ai structuré mon code de façon modulaire et utilisé fetch pour afficher les données en temps réel. \nJ’ai également conçu une interface de connexion sécurisée pour l’administrateur, avec une gestion des erreurs, et développé une modale permettant l’ajout de nouveaux projets avec prévisualisation et envoi via FormData. \n\nCe projet m’a permis de renforcer mes compétences en JavaScript natif, en manipulation du DOM, en appels API REST, et en création d’interfaces réactives et accessibles.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaJsSquare, FaFigma],
    githubUrl:'https://github.com/S0ph1e22/Portfolio-architecte.git'
  },
  {
    id: 3,
    image: monVieuxGrimoir,
    lien: "🔗Mon vieux grimoire",
    description : " Développement de l’API back-end du site Mon Vieux Grimoire, un projet de référencement et de notation de livres pour une chaîne de librairies. En binôme avec un développeur front-end, j’ai pris en charge la conception complète de l’API selon un cahier des charges précis. Le back-end a été développé avec Node.js et Express, avec une attention particulière portée à la validation des données, la gestion des utilisateurs (authentification, autorisation), la persistance des données en base MongoDB, ainsi que la sécurisation des routes.\n\n L’une des problématiques rencontrées concernait l’optimisation des images envoyées par les utilisateurs. J’ai mis en place un traitement automatique à l’upload, permettant de réduire la taille des images tout en conservant leur qualité.\n\nCe projet m’a permis de consolider mes compétences en conception d’API REST, en sécurisation des endpoints, en gestion de fichiers avec Multer, et en mise en place d’une logique métier complète côté serveur.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaJsSquare,FaFigma,FaNodeJs,BiLogoMongodb,SiExpress],
    githubUrl:'https://github.com/S0ph1e22/monVieuxGrimoir.git'
  },
    {
    id: 4,
    image: Kasa,
    lien: "🔗Kasa",
    description : " Développement en freelance du nouveau site de location d’appartements de Kasa, dans le cadre d’une refonte complète de leur ancien site en ASP.NET vers une stack JavaScript moderne. J’ai conçu l’application front-end en React à partir de maquettes Figma responsives, en mettant en place les routes avec React Router et en intégrant les données d’un fichier JSON en l’absence de back-end. \n\n J’ai dû relever plusieurs défis techniques, notamment la création d’une galerie d’images avec navigation circulaire, la gestion de composants Collapse dynamiques, et l’intégration des contraintes de design précises (tailles fixes, centrage, animations CSS).\n\nCe projet m’a permis de renforcer mes compétences en React, en gestion des états, en structuration de composants modulaires, ainsi qu’en animation CSS et en utilisation de Sass pour une gestion efficace des styles.",
    url:'https://www.google.com/',
    technos: [FaHtml5,FaCss3Alt,FaNodeJs,FaReact,FaSass,FaFigma],
    githubUrl:'https://github.com/S0ph1e22/Kasa.git'
  },
    {
    id: 5,
    image: burger,
    lien: "🔗Burger",
    description : " Développement d'un site web dynamique 'Burger Code' représentant le menu d'un restaurant, avec un système d'administration gérer le contenu.\n\nLe principal défi technique a été la création de l’interface administrateur, permettant d’ajouter, modifier ou supprimer les éléments du menu de manière sécurisée et intuitive. J’ai implémenté une architecture CRUD complète pour gérer les plats via une interface d’administration. Les formulaires et la liste des produits sont construits avec Bootstrap, offrant une interface moderne et responsive.\n Pour garantir la sécurité, j’ai utilisé des requêtes préparées (PDO) et une validation côté serveur. L’interface admin intègre également un système d’upload d’images pour chaque plat, avec vérification du type, de l’extension et de la taille des fichiers.\n\n Ce projet m’a permis de renforcer mes compétences en PHP et MySQL et d'apprendre à concevoir des interfaces efficaces et agréables avec Bootstrap.",
    url:'https://www.google.com/',
    technos: [FaCss3Alt,FaPhp,DiMysql,FaBootstrap],
    githubUrl:'https://github.com/S0ph1e22/Burger.git'
  },
    {
    id: 6,
    image: top5,
    lien: "🔗Magasine",
    description : " Développement d’une page web interactive mettant en avant le top 5 des meilleures actrices ainsi que leurs meilleurs films. Cette interface propose une navigation dynamique ou l’utilisateur peut interagir avec les éléments visuels pour explorer chaque profil.\n\n Le principal défi technique a été de coordonner les animations JQuery pour ouvrir et fermer dynamiquement les éléments tout en garantissant la fluidité de l’expérience utilisateur. Pour y parvenir, j’ai structuré le code JavaScript avec des fonctions de validation d’index, une gestion centralisée de l’état ouvert/fermé et des animations adaptées a chaque cas.\n\nCe projet m’a permis d’expérimenter la manipulation du DOM et la gestion d’évènement en jQuery, mettre en œuvre des effets visuels et interactions utilisateur simples et de renforcer mes compétences en intégration responsive.",
    url:'https://www.google.com/',
    technos: [FaCss3Alt,FaHtml5,FaJsSquare,DiJqueryLogo],
    githubUrl:'https://github.com/S0ph1e22/MagasineTop5.git'
  },
];

export default projets;
