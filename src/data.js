import orecipes from './assets/img/orecipes.webp';
import portfolio from './assets/img/portfolio.webp';
import codetonasso from './assets/img/codetonasso.webp';
import organize from './assets/img/organize.webp';
import useradgents from './assets/img/useradgents.webp';
import but from './assets/img/but.webp';

export default [
  {
    image: useradgents,
    alt: 'image de la page d\'accueil du site de UserAdgents',
    title: 'Site UserAdgents',
    description: 'Participation au développement du site de l\'agence',
    technos: ['Vue.js', 'Nuxt.js', 'Tailwind.css', 'Wordpress'],
    detailedDescription: 'Site officiel de l\'agence UserAdgents, j\'ai pu participer à son développement afin d\'améliorer l\'existant, ajouter des fonctionnalités et entretenir par rapport aux différents besoins.',
    process: '',
    conceptionChoices: '',
    challenges: 'Ce fut mon premier projet professionnel en Vue.js, Nuxt.js et Tailwind.css, j\'ai retrouvé beaucoup de principes similaires à React bien sûr, mais aussi des fonctionnements propres à ces technologies. J\'ai pu enrichir mes connaissances en collaboration avec les équipes de communications et autres développeurs.',
    github: {
      href: '',
      hrefFront: '',
      hrefBack: '',
    },
    site: 'https://www.useradgents.com',
  },
  {
    image: but,
    alt: 'image de la page d\'accueil du site de But Cuisines',
    title: 'But et But Cuisine',
    description: 'Développement partie frontend sur but.fr et but-cuisines.fr',
    technos: ['Html', 'Css', 'Javascript'],
    detailedDescription: 'J\'ai pu notamment participer au développement de la partie mobile sur but.fr et le site responsive but-cuisines.fr pendant 1 an environ, ce fut une superbe expérience. J\'ai pu proposer une vraie partie conseil et mettre en place les demandes client d\'un point de vue technique.',
    process: 'Ces projets ont été réalisés dans une dynamique agile, afin de répondre au plus vite à la demande client et coller au maximum aux diverses attentes qui sont donc toujours réévaluées au besoin.',
    challenges: 'Ce fut une expérience très enrichissante car But fut mon premier client en tant que développeur. Cela m\'a permis de concrétiser de nombreuses idées, en particulier en ce qui concerne les process et la communication dans le métier.',
    github: {
      href: '',
      hrefFront: '',
      hrefBack: '',
    },
    site: 'https://www.but-cuisines.fr',
    but: 'https://www.but.fr',
  },
  {
    image: codetonasso,
    alt: 'image de la liste des associations de l\'application Code ton asso',
    title: 'Code ton asso',
    description: 'Plateforme de mise en relation entre des associations et des développeurs',
    technos: ['React', 'Style-Component', 'Node.js', 'Express', 'Sequelize'],
    detailedDescription: 'Plateforme de mise en relation entre associations et développeurs, l\'objectif est que les associations puissent partager leur besoin de création de sites/applications et demander de l\'aide auprès de développeurs bénévoles, qui eux, pourraient être à la recherche d’une première expérience, de participer à un projet de groupe, ou encore, de tout simplement participer à un projet qui a du sens.',
    process: 'Ce projet a été réalisé dans une dynamique agile, par 4 développeurs fullstack puis poursuivi de mon côté. Dans une première phase de préparation (cahier des charges), nous avons travaillé sur la définition de notre MVP, les besoins et objectifs du projet, notre arborescence, architecture mise en place, diagrammes entité-relation/séquence/données/use-case, création de wireframe et maquettes. Sont venus ensuite une phase de conception, puis de débuggage, pour finir sur une présentation de l\'app.',
    conceptionChoices: 'Nous avons utilisé des outils comme github project, google drive et notion. En front, nous sommes directement partis sur la librairie react-components et dans une architecture de composants réutilisables. Nous avons réalisé dans un premier temps ces composants, pour n\'avoir plus qu\'à les utiliser ensuite lors de la conception de nos pages. Pour le back, nous avons opté pour une base de donnée relationnelle et la création d\'une API resfull.',
    challenges: 'Première fois que j\'utilisais la librairie Styled-components, j\'ai pu travailler sur ce projet avec un développeur qui m\'a beaucoup appris sur cette librairie, notamment  quelques astuces dans son fonctionnement. Ce fut aussi l\'occasion de mettre plus en pratique mes connaissances notamment sur l\'ORM Sequelize.',
    github: {
      href: '',
      hrefFront: 'https://github.com/YohannHERBET/code-ton-asso-front',
      hrefBack: 'https://github.com/YohannHERBET/code-ton-asso-back',
    },
    site: '#',
  },
  {
    image: organize,
    alt: 'image du tableau de bord de l\'application Organize',
    title: 'Organize',
    description: 'Projet permettant de gérer son temps et son organisation, mise en place de rappels d\'événements etc..',
    technos: ['React', 'Redux', 'Sass'],
    detailedDescription: 'Plateforme permettant d\'organiser son temps, un peu à la manière d\'un Trello. L\'objectif était de proposer une interface personnalisable et épurée, afin de permettre une facilité de prise en main pour tous et pour tout type de projet. Dès l\'écran d\'accueil, l\'utilisateur a la possibilité de voir ses tâches du jour, ses 5 tâches les plus proches à venir et d\'avoir un oeil sur ses projets.',
    process: 'Ce projet a été réalisé en agilité, par 5 développeurs (3 React et 2 Symfony). Dans une première phase de préparation (cahier des charges), nous avons travaillé sur la définition de notre MVP, les besoins et objectifs du projet, notre arborescence, architecture mise en place, définition de la BDD, création de wireframe et maquettes ; Sont venus ensuite une phase de conception, puis de débuggage, pour finir sur une présentation de l\'app.',
    challenges: 'Ce fut mon premier vrai projet en React (1 mois de travail spécifiquement sur la partie frontend). Cela m\'a permis de mettre en application ce que j\'avais pu apprendre dans ma phase d\'apprentissage sur un projet plus imposant, et par la même occasion de mettre en pratique mes connaissances sur Redux. J\'ai aussi pu appliquer quotidiennement des process, et le travail en équipe dans des conditions similaires à celles d\'une entreprise, ainsi que la mise en place une méthodologie Scrum.',
    github: {
      href: 'https://github.com/YohannHERBET/Organize',
      hrefFront: '',
      hrefBack: '',
    },
    site: '#',
  },
  {
    image: orecipes,
    alt: 'image de la page d\'accueil de l\'application Orecipes',
    title: 'O\'recipes',
    description: 'Site de recettes, possibilité d\'ajout aux favoris si la personne est connectée',
    technos: ['React', 'Redux', 'Sass', 'Node.js'],
    detailedDescription: 'Application permettant de consulter des recettes et de les ajouter en favoris grâce à un compte utilisateur.',
    process: '',
    conceptionChoices: '',
    challenges: 'Ce petit projet réalisé en formation a été ma première mise en application de Redux.',
    github: {
      href: 'https://github.com/YohannHERBET/O-recipes',
      hrefFront: '',
      hrefBack: '',
    },
    site: '#',
  },
  {
    image: portfolio,
    alt: 'image de ce portfolio',
    title: 'Portfolio',
    description: 'Site sur lequel vous êtes, ayant pour objectif de vous faire entrer un peu dans mon univers de développeur ;)',
    technos: ['React', 'React-Bootstrap'],
    detailedDescription: '',
    process: '',
    conceptionChoices: 'J\'ai fait le choix d\'une architecture et séparation des composants très simple en vue de la complexité du projet.',
    challenges: 'Cela a été ma première utilisation de React-Bootstrap. Cependant, étant donné que j\'avais déjà utilisé plusieurs librairies de composants, j\'ai pu retrouver de nombreuses similitudes comme par exemple certaines pratiques de Material-UI ou Semantic UI.',
    github: {
      href: 'https://github.com/YohannHERBET/portfolio',
      hrefFront: '',
      hrefBack: '',
    },
    site: '',
  },
];
