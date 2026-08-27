import { ProjectGroup, type CourseSeriesData, type ExperienceCardData, type ProjectsCardData, type SkillCardData } from "@/types/data";
import { JavascriptOriginal, ReactOriginal, Html5Original, Css3Original,
  TypescriptOriginal, BootstrapOriginal, PythonOriginal, JavaOriginal,
  RustOriginal, NodejsOriginal, BashOriginal, COriginal, CplusplusOriginal,
  JupyterOriginal, ScalaOriginal, PostgresqlOriginal, MongodbOriginal,
  AmazonwebservicesOriginalWordmark, AzureOriginal, GitOriginal,
  GithubactionsOriginal, DockerOriginal } from "devicons-react";
import { GiBroadDagger } from "react-icons/gi";
import { LiaCocktailSolid } from "react-icons/lia";

import amazonLogo from "@/assets/amazon.png";
import makeabilityLogo from "@/assets/makeability-lab.png";
import uwLogo from "@/assets/uw.png";
import nFluxAiLogo from "@/assets/nfluxai.png";

const iconSize = 24;

export const navbar = {
  github: "https://github.com/davphan",
  linkedin: "https://www.linkedin.com/in/dphan3/"
};

export const ABOUT = {
  fname: "David",
  lname: "Phan",
  roles: [
    "Software Development Engineer",
    "Electrical and Computer Engineer",
    "Full-stack Developer",
  ],
  description: "A Software Development Engineer with an degree in Electrical and Computer Engineering, specializing in full stack web development. My experiences span a wide engineering background including cloud application development, signal processing, and embedded systems."
};

// const iconSize=24;
export const SKILLS = {
  javascript: {
    name: "Javascript",
    icon: <JavascriptOriginal size={iconSize} />,
  },
  reactjs: {
    name: "ReactJS",
    icon: <ReactOriginal size={iconSize} />,
  },
  html: {
    name: "HTML",
    icon: <Html5Original size={iconSize} />,
  },
  css: {
    name: "CSS",
    icon: <Css3Original size={iconSize} />,
  },
  typescript: {
    name: "Typescript",
    icon: <TypescriptOriginal size={iconSize} />,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: <BootstrapOriginal size={iconSize} />,
  },
  python: {
    name: "Python",
    icon: <PythonOriginal size={iconSize} />,
  },
  java: {
    name: "Java",
    icon: <JavaOriginal size={iconSize} />,
  },
  rust: {
    name: "Rust",
    icon: <RustOriginal size={iconSize} />,
  },
  nodejs: {
    name: "NodeJS",
    icon: <NodejsOriginal size={iconSize} />,
  },
  bash: {
    name: "Bash/Command Line Scripting",
    icon: <BashOriginal size={iconSize} />,
  },
  c: {
    name: "C",
    icon: <COriginal size={iconSize} />,
  },
  cpp: {
    name: "C++",
    icon: <CplusplusOriginal size={iconSize} />,
  },
  jupyter: {
    name: "Jupyter Notebook",
    icon: <JupyterOriginal size={iconSize} />,
  },
  scala: {
    name: "Scala",
    icon: <ScalaOriginal size={iconSize} />,
  },
  daggerDi: {
    name: "Dagger DI",
    icon: <GiBroadDagger size={iconSize} />,
  },
  mockito: {
    name: "Mockito",
    icon: <LiaCocktailSolid size={iconSize} />,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: <PostgresqlOriginal size={iconSize} />,
  },
  mongodb: {
    name: "MongoDB",
    icon: <MongodbOriginal size={iconSize} />,
  },
  aws: {
    name: "AWS",
    icon: <AmazonwebservicesOriginalWordmark size={iconSize} />,
  },
  azure: {
    name: "Azure",
    icon: <AzureOriginal size={iconSize} />,
  },
  git: {
    name: "Git/GitHub",
    icon: <GitOriginal size={iconSize} />,
  },
  gitActions: {
    name: "Git Actions",
    icon: <GithubactionsOriginal size={iconSize} />,
  },
  docker: {
    name: "Docker/Docker Compose",
    icon: <DockerOriginal size={iconSize} />,
  },
}

export const SKILLS_SECTION: { description: string, cards: SkillCardData[] } = {
  description: "Technologies, languages, frameworks, and more learned from my educational background, hands-on projects, and work experience.",
  cards: [
    {
      title: "Frontend",
      skills: [
        SKILLS.javascript,
        SKILLS.reactjs,
        SKILLS.html,
        SKILLS.css,
        SKILLS.typescript,
        SKILLS.bootstrap,
      ]
    },
    {
      title: "Backend",
      skills: [
        SKILLS.python,
        SKILLS.java,
        SKILLS.rust,
        SKILLS.nodejs,
        SKILLS.bash,
        SKILLS.c,
        SKILLS.cpp,
        SKILLS.jupyter,
        SKILLS.scala,
        SKILLS.daggerDi,
        SKILLS.mockito,
        SKILLS.postgresql,
        SKILLS.mongodb,
      ]
    },
    {
      title: "Cloud, Workflow, and Distributed Systems",
      skills: [
        SKILLS.aws,
        SKILLS.azure,
        SKILLS.git,
        SKILLS.gitActions,
        SKILLS.docker,
      ]
    }
  ]
};

export const EXPERIENCE_SECTION: {
  description: string,
  cards: ExperienceCardData[]
} = {
  description: "Career, internship, and research experience timeline. The most recent experiences are at the top of the timeline.",
  cards: [
    {
      role: "Software Development Engineer II",
      organization: "Amazon",
      date: [[9, 2024], [0, 0]],
      img: amazonLogo,
      description: "Operate Amazon's core Java/Guice-based distributed media ingestion REST API service with regular oncall rotations and peak-event preparation. Modernized content ingestion by adding support for new media types and rebuilding ingestion components in Rust for lower latency and memory efficiency, cutting monthly incompatibility-related errors by 32%. Migrated legacy bare-metal deployment infrastructure to CDK-based AWS cloud infrastructure and streamlined team operations through bug bashes, onboarding, and new task-management tooling.",
      skills: [
        SKILLS.java,
        SKILLS.rust,
        SKILLS.aws,
        { name: "Dependency Injection (Guice)" },
        { name: "AWS CDK" },
        { name: "Oncall" },
        { name: "Agile Methodology" },
      ],
    },
    {
      role: "Software Development Engineer (SDE) I Intern",
      organization: "Amazon",
      date: [[6, 2023], [9, 2023]],
      img: amazonLogo,
      description: "Spearheaded an internal full-stack application to help ML research teams process datasets, building a React/TypeScript front-end and a REST API on AWS API Gateway, Lambda, S3, and DynamoDB. Deployed through CI/CD pipelines using Git and internal Amazon tooling while collaborating with a team under Agile methodology.",
      skills: [
        SKILLS.reactjs,
        SKILLS.typescript,
        { name: "AWS Lambda" },
        { name: "AWS DynamoDB" },
        { name: "AWS S3" },
        { name: "AWS API Gateway" },
        { name: "Internal Amazon CI/CD tools" },
        { name: "Agile Methodology" },
      ],
    },
    {
      role: "Software Development Intern",
      organization: "UW Project Sidewalk",
      date: [[3, 2022], [6, 2024]],
      img: makeabilityLogo,
      description: "Maintained and updated the Project Sidewalk API and website, which tracks pedestrian accessibility issues in city infrastructure, collaborating with other developers to resolve tickets and implement feature requests across the Scala/PostgreSQL backend and frontend UI/UX.",
      skills: [
        SKILLS.scala,
        SKILLS.postgresql,
        SKILLS.bootstrap,
        { name: "Play Framework" },
        { name: "Silhouette Framework" },
      ],
    },
    {
      role: "Undergraduate Researcher",
      organization: "UW Theberge (BCME) Lab",
      date: [[7, 2022], [6, 2024]],
      img: uwLogo,
      description: "Automated data-analytics and image-processing tasks with Python-based desktop applications, designed and prototyped microfluidic and biomedical devices using CAD software, 3D printing, milling, and microcontroller circuits, and built website features to represent lab research and grow study participation.",
      skills: [
        SKILLS.python,
        { name: "Image Processing" },
        { name: "Solidworks" },
        { name: "3D Printing" },
        { name: "Milling" },
        { name: "Arduino/Embedded Programming" },
        { name: "Analog Circuit Design" },
        { name: "Wordpress" },
      ],
    },
    {
      role: "Software Engineering Intern",
      organization: "nFlux AI",
      date: [[9, 2021], [12, 2021]],
      img: nFluxAiLogo,
      description: "Automated ML training data processing by developing both SQL and noSQL database access algorithms and a CI/CD framework using Python and Git Actions. Developed frontend functionality testing procedures to analyze UI/UX components of company products.",
      skills: [
        SKILLS.python,
        SKILLS.git,
        SKILLS.gitActions,
        SKILLS.docker,
        SKILLS.postgresql,
        SKILLS.mongodb,
        SKILLS.azure,
      ],
    },
  ]
};

export const PROJECTS_SECTION: {
  description: string,
  cards: ProjectsCardData[]
} = {
  description: "Various personal projects that have expanded my own skillsets. Sort by category or tags, click on each project to expand it for more details, and click on project links for more resources like blog posts or github repos.",
  cards: [
    {
      title: "ENGINE Capstone: Drone Detect",
      date: [[12, 2023], [6, 2024]],
      description: "For my ECE capstone, I led my team alongside ANPC to create a drone detection radar array using forward scatter and SDRs.",
      skills: [
        SKILLS.python,
        { name: "GNURadio" },
        { name: "SDRs" },
        { name: "Leadership" },
        { name: "Signal Processing" },
        { name: "Forward Scatter" },
      ],
      group: ProjectGroup.hardware,
      links: [
        {
          text: "Github",
          url: "https://github.com/coyspink/DroneDetect"
        }
      ]
    },
    {
      title: "Hack UPC Hackathon: Loginly",
      date: [[5, 2021], [5, 2021]],
      description: "Developed the front-end webpage for a facial recognition login system, Loginly. Together with a team of developers from around the world, we created and submitted a complete login system solely off of facial recognition software.",
      skills: [
        SKILLS.html,
        SKILLS.css,
        { name: "Bootstrap 4" },
      ],
      group: ProjectGroup.software,
      links: [
        {
          text: "Github",
          url: "https://github.com/EncryptEx/loginly"
        }
      ]
    },
    {
      title: "Music for Charity",
      date: [[6, 2022], [6, 2024]],
      description: "As an officer for Music for Charity at UW, I helped organize events such as Nursing Home Performances, member meetings, and orchestral concerts to bring together the UW community and raise money for communities in need.",
      skills: [
        { name: "Leadership" },
        { name: "Piano" },
        { name: "Charity" },
        { name: "Volunteering" },
      ],
      group: ProjectGroup.other,
      links: [
        {
          text: "Website",
          url: "https://muscharity.wordpress.com/"
        },
        {
          text: "Youtube",
          url: "https://www.youtube.com/@muscharityuw"
        }
      ]
    },
  ]
};

export const EDUCATION_SECTION: {
  description: string,
  school: string,
  img: string,
  major: string,
  gpa: string,
  grad_date: string,
  honors: string,
  coursework: {
    cs: CourseSeriesData[],
    ece: CourseSeriesData[],
    other: CourseSeriesData[],
  }
}= {
  description: "Details on my college education and coursework.",
  school: "Unversity of Washington, Seattle",
  img: "https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/230/2023/04/02134421/Signature_Stacked_Purple_Hex.png",
  major: "Electrical and Computer Engineering",
  gpa: "3.87",
  grad_date: "June 2024",
  honors: "Cum Laude",
  coursework: {
    cs: [
      {
        series: "Introductory Computer Programming",
        courses: [
          {
            code: "CSE 142",
            year: "freshman",
            quarter: "winter",
          },
          {
            code: "CSE 143",
            year: "freshman",
            quarter: "spring",
          },
        ]
      },
      {
        series: "Special Topics in CSE",
        courses: [
          {
            code: "CSE 190",
            year: "freshman",
            quarter: "winter",
            details: "Introductory programming lab"
          },
          {
            code: "CSE 499",
            year: "sophomore",
            quarter: "spring",
            details: "Makeability Lab: Project Sidewalk research credit"
          },
        ]
      },
      {
        series: "Data Structures and Algorithms",
        courses: [
          {
            code: "CSE 373",
            year: "sophomore",
            quarter: "autumn",
          },
          {
            code: "CSE 374",
            year: "junior",
            quarter: "winter",
            details: "C programming"
          },
        ]
      },
      {
        series: "Web Programming",
        courses: [
          {
            code: "CSE 154",
            year: "sophomore",
            quarter: "winter",
          },
        ]
      },
      {
        series: "Computer Networks",
        courses: [
          {
            code: "E E 419",
            year: "junior",
            quarter: "spring",
          },
        ]
      },
      {
        series: "Computer Architecture",
        courses: [
          {
            code: "E E 469",
            year: "senior",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Embedded Systems",
        courses: [
          {
            code: "E E 474",
            year: "senior",
            quarter: "winter",
          },
        ]
      },
    ],
    ece: [
      {
        series: "Engineering Exploration",
        courses: [
          {
            code: "ENGR 101",
            year: "freshman",
            quarter: "autumn",
          },
          {
            code: "GEN ST 199",
            year: "freshman",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Calculus-Based Physics",
        courses: [
          {
            code: "PHYS 121",
            year: "freshman",
            quarter: "autumn",
            details: "Mechanics"
          },
          {
            code: "PHYS 122",
            year: "freshman",
            quarter: "winter",
            details: "Electromagnetics"
          },
          {
            code: "PHYS 123",
            year: "freshman",
            quarter: "spring",
            details: "Waves"
          },
        ]
      },
      {
        series: "Technical Communications",
        courses: [
          {
            code: "ENGR 231",
            year: "freshman",
            quarter: "spring",
          },
          {
            code: "ENGR 393",
            year: "junior",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Differential Equations",
        courses: [
          {
            code: "MATH 307",
            year: "freshman",
            quarter: "winter",
          },
        ]
      },
      {
        series: "Matrix Algrebra",
        courses: [
          {
            code: "MATH 208",
            year: "sophomore",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Introduction to Electrical Engineering",
        courses: [
          {
            code: "E E 215",
            year: "sophomore",
            quarter: "winter",
          },
        ]
      },
      {
        series: "Circuit Theory",
        courses: [
          {
            code: "E E 233",
            year: "sophomore",
            quarter: "spring",
          },
        ]
      },
      {
        series: "Signal Processing",
        courses: [
          {
            code: "E E 241",
            year: "sophomore",
            quarter: "spring",
          },
          {
            code: "E E 242",
            year: "sophomore",
            quarter: "spring",
          },
          {
            code: "E E 342",
            year: "junior",
            quarter: "autumn"
          },
          {
            code: "ENGR 442",
            year: "junior",
            quarter: "winter",
          },
          {
            code: "ENGR 443",
            year: "junior",
            quarter: "spring",
            details: "Machine learning with signal processing"
          },
        ]
      },
      {
        series: "Special Topics in Engineering",
        courses: [
          {
            code: "E E 498",
            year: "sophomore",
            quarter: "spring",
            details: "Ethics in Engineering"
          },
          {
            code: "E E 398",
            year: "junior",
            quarter: "spring",
            details: "Career development"
          },
          {
            code: "E E 496",
            year: "senior",
            quarter: "autumn",
            details: "Systems Design"
          },
        ]
      },
      {
        series: "Computer Hardware",
        courses: [
          {
            code: "E E 201",
            year: "junior",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Digital Circuits and Systems (VLSI)",
        courses: [
          {
            code: "E E 271",
            year: "junior",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Statistical Methods for Engineering",
        courses: [
          {
            code: "STAT 390",
            year: "junior",
            quarter: "winter",
          },
        ]
      },
      {
        series: "Semiconductor Devices",
        courses: [
          {
            code: "E E 280",
            year: "junior",
            quarter: "spring",
          },
          {
            code: "E E 331",
            year: "senior",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "ENGINE Capstone",
        courses: [
          {
            code: "E E 497",
            year: "senior",
            quarter: "winter",
          },
          {
            code: "E E 498",
            year: "senior",
            quarter: "spring",
          },
        ]
      },
    ],
    other: [
      {
        series: "Organic Chemistry",
        courses: [
          {
            code: "CHEM 237",
            year: "freshman",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Calculus",
        courses: [
          {
            code: "MATH 126",
            year: "freshman",
            quarter: "autumn",
          },
          {
            code: "MATH 224",
            year: "sophomore",
            quarter: "winter",
            details: "Advanced Multivariable Calculus"
          },
        ]
      },
      {
        series: "History of Jazz",
        courses: [
          {
            code: "MUSIC 131",
            year: "freshman",
            quarter: "winter",
          },
        ]
      },
      {
        series: "Global Reproductive Health",
        courses: [
          {
            code: "G H 446",
            year: "freshman",
            quarter: "spring",
          },
        ]
      },
      {
        series: "Survey of Music",
        courses: [
          {
            code: "MUSIC 120",
            year: "sophomore",
            quarter: "autumn",
          },
        ]
      },
      {
        series: "Child Development and Learning",
        courses: [
          {
            code: "EDPSY 302",
            year: "junior",
            quarter: "winter",
          },
        ]
      },
      {
        series: "Japanese",
        courses: [
          {
            code: "JAPAN 101",
            year: "senior",
            quarter: "autumn",
          },
          {
            code: "JAPAN 102",
            year: "senior",
            quarter: "winter",
          },
          {
            code: "JAPAN 103",
            year: "senior",
            quarter: "spring",
          },
        ]
      },
    ]
  }
};