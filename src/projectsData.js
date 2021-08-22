import wherewasi from "./static/wherewasi_demo.PNG";
import messageapp from "./static/chatapp_demo.png";
import purepadel from "./static/purepadel_demo.PNG";
import personar from "./static/personar_demo.PNG";

const projects = [
  {
    name: "Personar",
    description: "Personality test",
    paragraph: [
      "A personality test based on the big five personality traits.",
      "User fills out a form and gets the results in a chart as well as a written summary of their general characteristics.",
      "If you want to skip to an example result, feel free to use the 'skip to example result'-button.",
    ],
    src: personar,
    tech: ["Javascript", "React", "Tailwind", "Node", "Chart.js"],
    repolink: "https://github.com/johnnydevster/persona",
  },
  {
    name: "Where was I?",
    description: "Landmark picture search",
    paragraph: [
      "This project uses Google's Vision API to detect landmarks in user submitted images.",
      "If a landmark is found, it grabs some info from Wikipedia about the landmark and marks its location on an embedded Google Map.",
    ],
    src: wherewasi,
    tech: ["Javascript", "React", "Node", "SCSS", "Google Vision API"],
    repolink: "https://github.com/johnnydevster/where-was-i",
    website: "https://nowwherewasi.herokuapp.com/",
  },
  {
    name: "Chat app",
    description: "Instant messaging",
    paragraph: [
      "An instant messaging app built in React with Socket.IO.",
      "Users can join and leave rooms, send messages to each other and see notifications when other users join/leave.",
      "User's own chat messages are styled differently to better differentiate users.",
    ],
    src: messageapp,
    tech: ["Javascript", "React", "Node", "SCSS", "Socket.IO"],
    repolink: "https://github.com/johnnydevster/messageapp",
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
