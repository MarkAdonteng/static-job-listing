

//   interface Props {
//     img : string
//     title : string;
//     subtitle: string;
//     subtitle2: string;
//     description : string;
//     time : string;
//     location : string;
//     session : string
//     skills : string[]; 
//   }

//   const MyComponents : React.FC<Props> = ({skills}) => {
//     return (
//       <div>
//         {skills.map((skill, index) => (
//           <div key={index}>{skill}</div>
//         ))}
//       </div>
//     )
   
//   }
//   const Details = ({img, title , subtitle,subtitle2,description,time,location,session,skills} : Props) => {
//   return (

// <div className="mx-auto my-5 flex items-center gap-3 py-5 px-5
//  bg-slate-200 w-[900px] border-l-blue-400 border-l-4 shadow-lg shadow-blue-200">
        
//      <div className='w-14 h-14 rounded-full mx-5'>
//         {/* side Image */}
//         <img src={img}/>
//          </div>

//             {/* Job Description */}
//          <div>
//          <h3 className='text-base text-blue-400 font-bold inline-block'>{title}
//          <p className="inline-block ml-5 text-[10px]  px-2 text-white bg-blue-400 rounded-xl">{subtitle}</p>
//          <p className="inline-block ml-3 text-[10px]  px-2 text-white bg-black rounded-xl">{subtitle2}</p> 
//          </h3>
//          <h2 className="text-black font-bold pt-2">{description}</h2>
//          <p className="text-[12px] font-bold text-gray-700">{time} . {location} . {session}</p>
//          </div>
        
//          {/* programming language */}
//          <div className="flex justify-end text-blue-500 ml-[100px] bg-blue-200 font-bold p-2">      
//         {skills.map((skill, index) => (
//           <div key={index} className="px-3 rounded-sm  ">
//             {skill}
//             </div>
//         ))}
//       </div>
    
// </div> 
//           );
    
//         }
  

 

// export default Details



import React from 'react';

interface Props {
  img: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  description: string;
  time: string;
  location: string;
  session: string;
  skills: string[];
}

const Details: React.FC<Props> = ({ img, title, subtitle, subtitle2, description, time, location, session, skills }) => {
  return (
    <div className="mx-auto my-5 flex items-center gap-3 py-5 px-5 bg-slate-200 w-[900px] border-l-blue-400 border-l-4 shadow-lg shadow-blue-200">
      <div className='w-14 h-14 rounded-full mx-5'>
        <img src={img} alt={title} />
      </div>
      <div>
        <h3 className='text-base text-blue-400 font-bold inline-block'>
          {title}
          <p className="inline-block ml-5 text-[10px] px-2 text-white bg-blue-400 rounded-xl">{subtitle}</p>
          <p className="inline-block ml-3 text-[10px] px-2 text-white bg-black rounded-xl">{subtitle2}</p>
        </h3>
        <h2 className="text-black font-bold pt-2">{description}</h2>
        <p className="text-[12px] font-bold text-gray-700">{time} . {location} . {session}</p>
      </div>
      <div className="flex justify-end text-blue-500 ml-[100px] font-bold p-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="px-3 py-1 border border-blue-400 rounded-md">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
