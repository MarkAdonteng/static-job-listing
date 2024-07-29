
// import Details from "../Details";
// import Photosnap from '../../assets/photosnap.svg'
// import Manager from '../../assets/manage.svg'
// import Account from '../../assets/account.svg'
// import MyHome from '../../assets/myhome.svg'
// import LoopStudio from '../../assets/loop-studios.svg'
// import Facelt from "../../assets/faceit.svg"
// import Shortly from '../../assets/shortly.svg'
// import Insure from '../../assets/insure.svg'
// import Eyecam from '../../assets/eyecam-co.svg'
// import Air from '../../assets/the-air-filter-company.svg'

// interface Props {}

// const FinalPage = (props:Props) => {
//   return (
//     <div>
//      <Details
//       img={Photosnap}
//       title="Photosnap"
//       subtitle="NEW!" 
//       subtitle2="FEATURED"
//       description="Senior Frontend Developer"
//       time="1d ago"
//       session="Full Time"
//       location="USA only"
//       skills={["Frontend", "senior", "HTML", "CSS","JavaScript"]}/>

//       <Details
//       img ={Manager}
//       title ="Manager"
//       subtitle ="NEW!" 
//       subtitle2 ="FEATURED"
//       description ="Fullstack Developer"
//       time="1d ago"
//       session="Part Time"
//       location="Remote"
//       skills={["Fullstack", "Midweight", "python", "React"]}/>

//       <Details
//       img ={Account}
//       title ="Account"
//       subtitle ="NEW!" 
//       subtitle2 =""
//       description ="Junior Frontend Developer"
//       time="1d ago"
//       session="Part Time"
//       location="Remote"
//       skills={["Frontend", "Junior", "React", "Sass","Javascript"]}/>

//       <Details
//       img ={MyHome}
//       title ="MyHome"
//       subtitle ="" 
//       subtitle2 =""
//       description ="Junior Frontend Developer"
//       time="5d ago"
//       session="Contract"
//       location="USA only"
//       skills={["Frontend", "Junior", "Css", "JavaScript"]}/>

//       <Details
//       img ={LoopStudio}
//       title ="Loop Studios"
//       subtitle ="" 
//       subtitle2 =""
//       description ="Software Engineer"
//       time="1d ago"
//       session="Full Time"
//       location="Worldwide"
//       skills={["Frontend", "Midweight", "JavaScript", "Sass", "Ruby"]}/>

//     <Details
//       img ={Facelt}
//       title ="Facelt"
//       subtitle ="" 
//       subtitle2 =""
//       description ="Junior Backend Developer"
//       time="2w ago"
//       session="Full Time"
//       location="USA only"
//       skills={["Backend", "Junior", "Ruby", "RoR"]}/>

//       <Details
//       img ={Shortly}
//       title ="Shortly"
//       subtitle ="" 
//       subtitle2 =""
//       description ="Junior Developer"
//       time="2w ago"
//       session="Full Time"
//       location="Worldwide"
//       skills={["Frontend", "Junior", "HTML", "Sass", "JavaScript"]}/>

//       <Details
//       img ={Insure}
//       title ="Insure"
//       subtitle ="" 
//       subtitle2 =""
//       description ="Junior Frontend Developer"
//       time="2w ago"
//       session="Full Time"
//       location="USA only"
//       skills={["Frontend", "Junior", "Vue", "JavaScript", "Sass"]}/>

//       <Details
//       img ={Eyecam}
//       title ="Eyecam Co."
//       subtitle ="" 
//       subtitle2 =""
//       description ="Full Stack Engineer"
//       time="3w ago"
//       session="Full Time"
//       location="Worldwide"
//       skills={["Fullstack", "Midweight", "JavaScript", "Django", "python"]}/>

//       <Details
//       img ={Air}
//       title ="The Air Filter Company"
//       subtitle ="" 
//       subtitle2 =""
//       description ="Front-end Dev"
//       time="3w ago"
//       session="Full Time"
//       location="Worldwide"
//       skills={["Frondend", "Junior", "React", "Sass", "JavaScript"]}/>



//     </div>
//   )
// }

// export default FinalPage



import React from 'react';
import Details from '../Details';
import Photosnap from '../../assets/photosnap.svg';
import Manager from '../../assets/manage.svg';
import Account from '../../assets/account.svg';
import MyHome from '../../assets/myhome.svg';
import LoopStudio from '../../assets/loop-studios.svg';
import Facelt from '../../assets/faceit.svg';
import Shortly from '../../assets/shortly.svg';
import Insure from '../../assets/insure.svg';
import Eyecam from '../../assets/eyecam-co.svg';
import Air from '../../assets/the-air-filter-company.svg';

const jobDetails = [
  {
    img: Photosnap,
    title: "Photosnap",
    subtitle: "NEW!",
    subtitle2: "FEATURED",
    description: "Senior Frontend Developer",
    time: "1d ago",
    session: "Full Time",
    location: "USA only",
    skills: ["Frontend", "senior", "HTML", "CSS", "JavaScript"],
  },
  {
    img: Manager,
    title: "Manager",
    subtitle: "NEW!",
    subtitle2: "FEATURED",
    description: "Fullstack Developer",
    time: "1d ago",
    session: "Part Time",
    location: "Remote",
    skills: ["Fullstack", "Midweight", "python", "React"],
  },
  {
    img: Account,
    title: "Account",
    subtitle: "NEW!",
    subtitle2: "",
    description: "Junior Frontend Developer",
    time: "1d ago",
    session: "Part Time",
    location: "Remote",
    skills: ["Frontend", "Junior", "React", "Sass", "Javascript"],
  },
  {
    img: MyHome,
    title: "MyHome",
    subtitle: "",
    subtitle2: "",
    description: "Junior Frontend Developer",
    time: "5d ago",
    session: "Contract",
    location: "USA only",
    skills: ["Frontend", "Junior", "Css", "JavaScript"],
  },
  {
    img: LoopStudio,
    title: "Loop Studios",
    subtitle: "",
    subtitle2: "",
    description: "Software Engineer",
    time: "1d ago",
    session: "Full Time",
    location: "Worldwide",
    skills: ["Frontend", "Midweight", "JavaScript", "Sass", "Ruby"],
  },
  {
    img: Facelt,
    title: "Facelt",
    subtitle: "",
    subtitle2: "",
    description: "Junior Backend Developer",
    time: "2w ago",
    session: "Full Time",
    location: "USA only",
    skills: ["Backend", "Junior", "Ruby", "RoR"],
  },
  {
    img: Shortly,
    title: "Shortly",
    subtitle: "",
    subtitle2: "",
    description: "Junior Developer",
    time: "2w ago",
    session: "Full Time",
    location: "Worldwide",
    skills: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
  },
  {
    img: Insure,
    title: "Insure",
    subtitle: "",
    subtitle2: "",
    description: "Junior Frontend Developer",
    time: "2w ago",
    session: "Full Time",
    location: "USA only",
    skills: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
  },
  {
    img: Eyecam,
    title: "Eyecam Co.",
    subtitle: "",
    subtitle2: "",
    description: "Full Stack Engineer",
    time: "3w ago",
    session: "Full Time",
    location: "Worldwide",
    skills: ["Fullstack", "Midweight", "JavaScript", "Django", "python"],
  },
  {
    img: Air,
    title: "The Air Filter Company",
    subtitle: "",
    subtitle2: "",
    description: "Front-end Dev",
    time: "3w ago",
    session: "Full Time",
    location: "Worldwide",
    skills: ["Frondend", "Junior", "React", "Sass", "JavaScript"],
  },
];

const FinalPage: React.FC = () => {
  return (
    <div>
      {jobDetails.map((job, index) => (
        <Details
          key={index}
          img={job.img}
          title={job.title}
          subtitle={job.subtitle}
          subtitle2={job.subtitle2}
          description={job.description}
          time={job.time}
          session={job.session}
          location={job.location}
          skills={job.skills}
        />
      ))}
    </div>
  );
};

export default FinalPage;





