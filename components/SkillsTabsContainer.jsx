import { Button } from '@mui/material';
import { useState } from 'react';

const tabs = [
  { id: 0, title: 'Languages' },
  { id: 1, title: 'Frameworks' },
  { id: 2, title: 'Databases' },
  { id: 3, title: 'Tools' },
];

const result = [
  {
    data: [
      {
        name: 'C++',
        img: 'https://img.icons8.com/color/60/000000/c-plus-plus-logo.png',
      },
      {
        name: 'Python',
        img: 'https://img.icons8.com/color/60/000000/python--v1.png',
      },
      {
        name: 'Javascript',
        img: 'https://img.icons8.com/color/60/000000/javascript.png',
      },
      {
        name: 'Kotlin',
        img: 'https://img.icons8.com/color/60/000000/kotlin.png',
      },
      {
        name: 'HTML5',
        img: 'https://img.icons8.com/color/60/000000/html-5--v1.png',
      },
      {
        name: 'CSS3',
        img: 'https://img.icons8.com/color/60/000000/css3.png',
      },
      {
        name: 'GrpahQL',
        img: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/graphql_playground_macos_bigsur_icon_190105.png',
      },
    ],
  },
  {
    data: [
      {
        name: 'React.js',
        img: 'https://img.icons8.com/color/60/000000/react-native.png',
      },
      {
        name: 'Flask',
        img: 'https://img.icons8.com/ios-filled/60/ffffff/flask.png',
      },
      {
        name: 'Django',
        img: 'https://img.icons8.com/color/60/000000/django.png',
      },
      {
        name: 'Flutter',
        img: 'https://img.icons8.com/fluency/60/000000/flutter.png',
      },
      {
        name: 'Material UI',
        img: 'https://img.icons8.com/color/60/000000/material-ui.png',
      },
      {
        name: 'Tailwind Css',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      },
      {
        name: 'Fast-API',
        img: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg',
      },
    ],
  },
  {
    data: [
      {
        name: 'Postgres',
        img: 'https://img.icons8.com/color/60/000000/postgreesql.png',
      },
      {
        name: 'MySQL',
        img: 'https://img.icons8.com/color/60/000000/mysql-logo.png',
      },
      {
        name: 'Mongo DB',
        img: 'https://img.icons8.com/color/60/000000/mongodb.png',
      },
    ],
  },
  {
    data: [
      {
        name: 'Git',
        img: 'https://img.icons8.com/color/60/000000/git.png',
      },
      {
        name: 'Heroku',
        img: 'https://img.icons8.com/color/60/000000/heroku.png',
      },
      {
        name: 'Firebase',
        img: 'https://img.icons8.com/color/60/000000/firebase.png',
      },
      {
        name: 'Netlify',
        img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/60/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
      },
    ],
  },
];


export default function SkillsTabsContainer() {
  const [value, setValue] = useState(0);
  return (
    <div className='p-5 transition-all duration-500 '>
      <h1 className='text-2xl md:text-4xl text-green-500 font-bold'>
        Framewoks and Tools I am aware of, &darr;
      </h1>
      <div className='flex justify-start mt-4 pl-2 overflow-x-scroll border-b border-[#2f2f2f]'>
        {tabs.map((tab) => (
          <p
            onClick={() => {
              setValue(tab.id);
            }}
            key={tab.id}
            className={`text-white text-lg cursor-pointer ${
              tab.id === value
                ? '!border-b-4 border-green-600 bg-[#1e1e1e]'
                : null
            }  px-5 py-3`}
          >
            {tab.title}
          </p>
        ))}
      </div>
      <div className='flex flex-wrap'>
        {result[value].data?.map((item) => (
          <div
            key={item.name}
            className='flex flex-col   items-center px-10 py-5 text-[#545457]'
          >
            <img
              className={`${
                item.name === 'Tailwind Css' || 'GraphQL' || 'Fast-API'
                  ? 'w-[60px] h-[60px]'
                  : null
              }`}
              src={item.img}
              alt=''
            />
            <h1 className='hidden md:inline-flex font-extralight'>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
