import { PythonOriginal, JavaOriginal, JavascriptOriginal, NodejsOriginal,
  ReactOriginal, LinuxOriginal, COriginal, CplusplusOriginal, Html5Original,
  Css3Original, TypescriptOriginal, BootstrapOriginal, JupyterOriginal,
  ScalaOriginal, PostgresqlOriginal, MongodbOriginal,
  AmazonwebservicesOriginalWordmark, AzureOriginal, GitOriginal,
  GithubactionsOriginal, DockerOriginal } from 'devicons-react';
import { GiBroadDagger } from 'react-icons/gi';
import { LiaCocktailSolid } from 'react-icons/lia';

export const navbar = {
  github: "https://github.com/davphan"
};

export const about = {
  fname: "David",
  lname: "Phan",
  roles: [
    "Software Development Engineer",
    "Electrical and Computer Engineer",
    "Full-stack Developer",
  ],
  description: "A Software Development Engineer (SDE) with an degree in Electrical and Computer Engineering (ECE), specializing in full stack web development. My experiences span a wide engineering background including cloud application development, signal processing, and embedded systems.",
  resume: "https://davphan.github.io/Portfolio/imgs/resume.pdf",
};

const iconSize=24;
export const skills = {
  description: "Technologies, languages, frameworks, and more learned from my educational background, hands-on projects, and work experience.",
  cards: [
    {
      title: "Frontend",
      skills: [
        {
          name: "Javascript",
          image: <JavascriptOriginal size={iconSize}/>
        },
        {
          name: "ReactJS",
          image: <ReactOriginal size={iconSize}/>
        },
        {
          name: "HTML",
          image: <Html5Original size={iconSize}/>
        },
        {
          name: "CSS",
          image: <Css3Original size={iconSize}/>
        },
        {
          name: "Typescript",
          image: <TypescriptOriginal size={iconSize}/>
        },
        {
          name: "Bootstrap 5",
          image: <BootstrapOriginal size={iconSize}/>
        },
      ]
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Python",
          image: <PythonOriginal size={iconSize}/>
        },
        {
          name: "Java",
          image: <JavaOriginal size={iconSize}/>
        },
        {
          name: "NodeJS",
          image: <NodejsOriginal size={iconSize}/>
        },
        {
          name: "Bash/Command Line Scripting",
          image: <LinuxOriginal size={iconSize}/>
        },
        {
          name: "C",
          image: <COriginal size={iconSize}/>
        },
        {
          name: "C++",
          image: <CplusplusOriginal size={iconSize}/>
        },
        {
          name: "Jupyter Notebook",
          image: <JupyterOriginal size={iconSize}/>
        },
        {
          name: "Scala",
          image: <ScalaOriginal size={iconSize}/>
        },
        {
          name: "Dagger DI",
          image: <GiBroadDagger size={iconSize}/>
        },
        {
          name: "Mockito",
          image: <LiaCocktailSolid size={iconSize}/>
        },
        {
          name: "PostgreSQL",
          image: <PostgresqlOriginal size={iconSize}/>
        },
        {
          name: "MongoDB",
          image: <MongodbOriginal size={iconSize}/>
        },
      ]
    },
    {
      title: "Cloud, Workflow, and Distributed Systems",
      skills: [
        {
          name: "AWS",
          image: <AmazonwebservicesOriginalWordmark size={iconSize}/>
        },
        {
          name: "Azure",
          image: <AzureOriginal size={iconSize}/>
        },
        {
          name: "Git/GitHub",
          image: <GitOriginal size={iconSize}/>
        },
        {
          name: "Git Actions",
          image: <GithubactionsOriginal size={iconSize}/>
        },
        {
          name: "Docker/Docker Compose",
          image: <DockerOriginal size={iconSize}/>
        },
      ]
    }
  ]
};

export const experience = {
  description: "Career, internship, and research experience timeline. The most recent experiences are at the top of the timeline.",
  cards: [
    {
      id: 0,
      img: "https://media.licdn.com/dms/image/C4D0BAQGv2nOs_zZ7_w/company-logo_200_200/0/1670948475090/nflux_logo?e=1729123200&v=beta&t=K-ZdT5Ut4Pu-toLoVJtqd2TyrCd3lyKCFJFZnmiST2M",
      role: "Software Engineering Intern",
      company: "nFlux AI",
      date: "September 2021 - December 2021",
      desc: "Automated ML training data processing by developing both SQL and noSQL database access algorithms and a CI/CD framework using Python and Git Actions. Developed frontend functionality testing procedures to analyze UI/UX components of company products.",
      skills: [
        "Python",
        "Git",
        "Git Actions",
        "Docker/Docker Compose",
        "PostgreSQL",
        "MongoDB",
        "Azure"
      ],
      doc: ""
    },
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/C4D0BAQEMmhF9TqUCgA/company-logo_100_100/0/1630545704089/university_of_washington_logo?e=1729123200&v=beta&t=C6dgrh1t19GdJgyW-u2wPXwic4jZKRfHn50s8Lw6fAo",
      role: "Undergraduate Researcher",
      company: "UW Theberge (BCME) Lab",
      date: "July 2022 - June 2024",
      desc: "Developed a desktop application to automate data-analytics and image processing tasks, designed prototype microfluidic and biomedical devices using CAD software and embedded microcontroller circuits, and redesigned the lab website to optimize page rendering layout and scaling data.",
      skills: [
        "Python",
        "tkinter",
        "Image Processing",
        "Wordpress",
        "PostgreSQL",
        "Solidworks",
        "3D printing",
        "Milling",
        "Arduino/Embedded Programming",
        "Analog circuit design"
      ],
      doc: ""
    },
    {
      id: 2,
      img: "https://media.licdn.com/dms/image/C560BAQFDOZOCXXsy0Q/company-logo_100_100/0/1646680000491?e=1729123200&v=beta&t=2ujWjdJsFDwNUWZj0e9D6U5R0uv5woXmrX7EHrR8j2A",
      role: "Software Development Engineer Intern",
      company: "UW Project Sidewalk",
      date: "March 2022 - June 2024",
      desc: "Collaborated with a small team of developers to implement feature requests, debug issues, and maintain the Project Sidewalk website. These include API search algorithm optimizations, database redesign optimizations, and UI updates.",
      skills: [
        "Scala",
        "PostgreSQL",
        "Bootstrap",
        "Play Framework",
        "Silhouette Framework"
      ],
      doc: ""
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1630640869849/amazon_logo?e=1729123200&v=beta&t=bjlw2yyExHil93zcMlUEDR_kDE1kcepcy9lfooF2wkQ",
      role: "Software Development Engineer Intern",
      company: "Amazon",
      date: "June 2023 - September 2023",
      desc: "Spearheaded an internal full-stack ML dataset storage application for storing, searching, and sharing ML datasets across the company.",
      skills: [
        "AWS Lambda",
        "AWS DynamoDB",
        "AWS s3",
        "AWS API Gateway",
        "Internal Amazon CI/CD tools",
        "Full stack web application design",
        "Dependency Inject (Dagger DI)",
        "Agile Methodology"
      ],
      doc: ""
    }
  ]
};

export const projects = {
  description: "Various personal projects that have expanded my own skillsets. Sort by category or tags, click on each project to expand it for more details, and click on project links for more resources like blog posts or github repos.",
  cards: [
    {
      id: 0,
      title: "Example Software Project",
      date: "May 2023 - June 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "",
      tags: ["Java", "Python", "foo", "bar", "baz", "hee", "hoo"],
      group: "software",
      links: [
        {
          name: "Github",
          url: "https://davphan.github.io/Portfolio/index.html"
        }
      ]
    },
    {
      id: 1,
      title: "Example Hardware Project",
      date: "May 2023 - June 2024",
      description: "Lorem Ipsum",
      image: "",
      tags: ["Java", "Python"],
      group: "hardware",
      links: [
        {
          name: "Github",
          url: "https://davphan.github.io/Portfolio/index.html"
        }
      ]
    },
    {
      id: 0,
      title: "Example Other Project",
      date: "May 2023 - June 2024",
      description: "Lorem Ipsum",
      image: "",
      tags: ["Java", "Python"],
      group: "other",
      links: [
        {
          name: "Github",
          url: "https://davphan.github.io/Portfolio/index.html"
        }
      ]
    },
  ]
};

export const education = {

};