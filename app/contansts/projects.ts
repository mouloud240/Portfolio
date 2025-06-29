interface Iproject{
  title: string;
  description: string;
  tags: string[];
  link: string;
}
export const projects:Iproject[] = [
    {
      title: "Expense Tracker",
      description: "A mobile app for tracking personal expenses",
      tags: ["ExpressJs", "Flutter", "MongoDB"],
      link: "https://github.com/mouloud240/Expense-Tracker-App"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/mouloud240/Portfolio"
    },
    {

      title: "TaskWan",
      description: "A task management app built with Flutter and Firebase",
      tags: [ "Flutter", "Firebase"],
      link: "https://github.com/mouloud240/taskManager"
    },
    {
      title:"Chatti",
      description:"A chat application built with NextJs and express",
      tags:["Next.js","ExpressJs","Socket.io"],
      link:"https://github.com/mouloud240/Chatti"
    }
    ,{
      title:"Boumerdes Smart City",
      description:"A full platform to handle Boumerdess tourism and accomadations Made on a 48h hackathon",
      tags:["Next.js","Express.js","MonogDb","Flutter"],
      link:"https://github.com/BscApp"
    }, 
    {
    title:"EVENT HUB",
    description:"A platform to  view ,create and Reserver events working on rsvp system",
    tags:["Next.js","Nest.js"],
    link:"http://github.com/mouloud240/EVENT-HUB"
  },
  {
    title:"Carrer bridge",
    description:"A platform to connect students with companies and help them to find interships and solve comapnies probelms as well as creating teams to solve problems for companies",
    tags:["Flutter","Currenty in development"],
    link:'https://www.example.com'
  },
  ]
export const experience: Iproject[] = [
  {
    title: "Backend Lead - Portals",
    description:
      "Helped create interactive virtual and in-person event management with user interaction, live streams, task delegation, and PR reviews.",
    tags: [
      "NestJS",
      "RTMP",
      "WebSocket",
      "Redis",
      "Pub-Sub",
      "BullMQ",
      "Elasticsearch"
    ],
    link: "https://www.example.com"
  }
];
