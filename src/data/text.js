import { PythonOriginal, JavaOriginal, JavascriptOriginal, NodejsOriginal,
  ReactOriginal, LinuxOriginal, COriginal, CplusplusOriginal, Html5Original,
  Css3Original, TypescriptOriginal, BootstrapOriginal, JupyterOriginal,
  ScalaOriginal, PostgresqlOriginal, MongodbOriginal,
  AmazonwebservicesOriginalWordmark, AzureOriginal, GitOriginal,
  GithubactionsOriginal, DockerOriginal } from 'devicons-react';
import { GiBroadDagger } from 'react-icons/gi';
import { LiaCocktailSolid } from 'react-icons/lia';

export const about = {
  fname: "David",
  lname: "Phan",
  roles: [
    "Software Development Engineer",
    "Electrical and Computer Engineer",
    "Full-stack Developer",
  ],
  description: "Lorem Ipsum",
  resume: "https://davphan.github.io/Portfolio/#introduction",
};

const iconSize=24;
export const skills = {
  description: "Lorem Ipsum",
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

};

export const projects = {

};

export const education = {

};