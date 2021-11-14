import wherewasi from "./static/wherewasi_demo.PNG";
import purepadel from "./static/purepadel_demo.PNG";
import personar from "./static/personar_demo.PNG";
import gettingItDone from "./static/getting_it_done_demo.PNG";

const projects = [
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
    name: "Where was I?",
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
  {
    name: "Pure Padel",
    description: "Padel racket price aggregator",
    paragraph: [
      "Uses a python web scraping library to scrape a number of sites selling padel rackets.",
      "Saves data in a MySQL database and if a duplicate is found, flags the cheapest racket as a 'best deal'. ",
      "Links to original site.",
    ],
    src: purepadel,
    tech: ["Javascript", "React", "Node", "Python", "Scrapy", "MySQL"],
    repolink: "https://github.com/johnnydevster/northernpadel",
  },
];

export default projects;
