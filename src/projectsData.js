import wherewasi from "./static/wherewasi_demo.PNG";
import personar from "./static/personar_demo.PNG";
import gettingItDone from "./static/getting_it_done_demo.PNG";
import deliDelights from "./static/delidelights_demo.PNG";

const projects = [
  {
    name: "Deli Delights",
    description: "Headless CMS Restaurant Mockup",
    paragraph: [
      "A mockup of a restaurant site built with Next.js on the frontend, using WordPress as a headless CMS for the backend.",
      "Client can easily add content on their own using the WordPress admin panel, which utilizes custom post types and GraphQL fields.",
      "Uses Next.js dynamic routing to dynamically build news post routes.",
    ],
    src: deliDelights,
    tech: ["Next.js", "Tailwind", "Headless WordPress", "GraphQL"],
    repolink: "https://github.com/johnnydevster/restaurant-cms",
    website: "https://restaurant-cms.vercel.app/",
  },
  {
    name: "Getting It Done",
    description: "Fullstack To-Do Application",
    paragraph: [
      "Mobile-first design with social login and Firestore backend.",
      "Users can create and delete categories and tasks, and completed tasks are optionally displayed below the display area.",
      "Data is fetched using snapshot listeners, so all changes are instantly synced across all devices.",
    ],
    src: gettingItDone,
    tech: ["React", "Tailwind", "Firestore", "Firebase Auth"],
    repolink: "https://github.com/johnnydevster/getting-it-done",
    website: "https://fir-test-9cd48.web.app/",
  },
  {
    name: "Persona",
    description: "Personality test",
    paragraph: [
      "A personality test based on the big five personality traits.",
      "User fills out a form and gets the results in a chart as well as a written summary of their general characteristics.",
      "If you want to skip to an example result, feel free to use the 'skip to example result'-button.",
    ],
    src: personar,
    tech: ["Javascript", "React", "Tailwind", "Node", "Chart.js"],
    repolink: "https://github.com/johnnydevster/persona",
    website: "https://persona-5c2e8.web.app/",
  },
  {
    name: "Where Was I?",
    description: "Landmark picture search",
    paragraph: [
      "This project uses Google's Vision API to detect landmarks in user submitted images.",
      "If a landmark is found, it grabs some info from Wikipedia about the landmark and marks its location on an embedded Google Map.",
      "(hosted on Heroku free dyno, it may take some time to spin up the site)",
    ],
    src: wherewasi,
    tech: ["Javascript", "React", "Node", "SCSS", "Google Vision API"],
    repolink: "https://github.com/johnnydevster/where-was-i",
    website: "https://nowwherewasi.herokuapp.com/",
  },
];

export default projects;
