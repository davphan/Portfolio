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
  description: "A Software Development Engineer (SDE) with an degree in Electrical and Computer Engineering (ECE), specializing in full stack web development. My experiences span a wide engineering background including cloud application development, signal processing, and embedded systems."
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
      title: "Hack UPC Hackathon",
      date: "May 2021",
      description: "Developed the front-end webpage for a facial recognition login system, Loginly. Together with a team of developers from around the world, we created and submited a complete login system solely off of facial recognition software.",
      image: "",
      tags: ["HTML", "CSS", "Bootstrap 4"],
      group: "software",
      links: [
        {
          name: "Github",
          url: "https://github.com/EncryptEx/loginly"
        }
      ]
    },
    {
      id: 1,
      title: "ENGINE Capstone: ",
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