import React from 'react';
import { Link } from 'react-scroll';
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Center,
  useColorMode,
} from '@chakra-ui/react';
import zoomcar from '../assets/images/zoomcar.png';
import apnamart from '../assets/images/apnamart.png';
import todo from '../assets/images/todo.png';
import adminDashboard from '../assets/images/adminDashboard.png';
import dashboard from '../assets/images/dashboard.png';
import safar from '../assets/images/safar.png';

const projects = [
  {
    img: zoomcar,
    title: 'Zoomcar',
    desc: 'Zoomcar is an online Car Rental platform.',
    stack: 'HTML, CSS, JavaScript',
    codebase: 'https://github.com/sabiransari1/zoomcar',
    live: 'https://zoomcar-sabiransari1.netlify.app/',
  },
  {
    img: apnamart,
    title: 'Apnamart',
    desc: 'ApnaMART is India’s largest online B2B marketplace, connecting buyers with suppliers. As well as provide services for an individual customer.',
    stack: 'HTML, CSS, JavaScript, LocalStorage',
    codebase: 'https://github.com/sabiransari1/apnamart',
    live: 'https://apnamart-sabiransari1.netlify.app/',
  },
  {
    img: todo,
    title: 'Todo Application',
    desc: 'A Todo Application, It allows users to effortlessly manage their tasks and events, helping them stay organized and on top.',
    stack: 'HTML, CSS, JavaScript, LocalStorage, React.js, Chakra-UI',
    codebase: 'https://github.com/sabiransari1/todo-application',
    live: 'https://todo-application-sabiransari1.vercel.app/',
  },
  {
    img: adminDashboard,
    title: 'Admin Dashboard',
    desc: 'CRUD dashboard, an user interface that we use to interact with databases through APIs with chart presentation.',
    stack:
      'HTML, CSS, JavaScript, React.js, Redux, React-Redux, Redux-Thunk, MVC-architecture, Chakra-UI, Json-Server, Chart.js, React-Chartjs-2',
    codebase: 'https://github.com/sabiransari1/admin-dashboard',
    live: 'https://admin-dashboard-sabiransari1.vercel.app/',
  },
  {
    img: dashboard,
    title: 'CRUD Dashboard',
    desc: 'CRUD dashboard, an user interface that we use to interact with databases through APIs.',
    stack:
      'HTML, CSS, JavaScript, React.js, Redux, React-Redux, Redux-Thunk, MVC-architecture, Chakra-UI, Json-Server',
    codebase: 'https://github.com/sabiransari1/dashboard',
    live: 'https://dashboard-sabiransari1.vercel.app/',
  },
  {
    img: safar,
    title: 'SAFAR',
    desc: 'SAFAR an online hotel booking platform that allows users to book hotels all over the world.',
    stack:
      'HTML, CSS, JavaScript, React.js, Redux, React-Redux, Redux-Thunk, MVC-architecture, Chakra-UI, TypeScript',
    codebase: 'https://github.com/sabiransari1/safar',
    live: 'https://safar-sabiransari1.vercel.app/',
  },
];

export const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="projects"
      p={{
        base: '1rem 1rem',
        sm: '1rem 1rem',
        md: '1rem 2rem',
        lg: '3rem 5rem',
        xl: '3rem 5rem',
        '2xl': '3rem 5rem',
      }}
    >
      {/* first */}
      <Flex>
        <Text
          fontSize={{
            base: '3xl',
            sm: '3xl',
            md: '4xl',
            lg: '4xl',
            xl: '4xl',
            '2xl': '4xl',
          }}
          fontWeight={'bold'}
          mr={'.6rem'}
        >
          My
        </Text>
        <Text
          fontSize={{
            base: '3xl',
            sm: '3xl',
            md: '4xl',
            lg: '4xl',
            xl: '4xl',
            '2xl': '4xl',
          }}
          fontWeight={'bold'}
          bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
          bgClip="text"
        >
          Creative Projects
        </Text>
      </Flex>

      {/* second */}
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(2,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(2,1fr)',
          '2xl': 'repeat(3,1fr)',
        }}
        gap={'2rem'}
      >
        {projects?.map((el, index) => (
          <Grid
            className="project-card"
            key={index}
            p={{
              base: '1rem',
              sm: '1rem',
              md: '1rem',
              lg: '3rem',
              xl: '3rem',
              '2xl': '3rem',
            }}
            gap={'.5rem'}
            // boxShadow={
            //   "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
            // }
            borderRadius="10px"
            w={'100%'}
          >
            <a href={el.live} target={'_blank'} rel="noreferrer noopener">
              <Image
                src={el.img}
                alt={el.title}
                margin={'auto'}
                borderRadius="10px"
                cursor={'pointer'}
                transition="transform .5s"
                _hover={{
                  cursor: 'pointer',
                  transform: 'scale(0.9)',
                }}
              />
            </a>

            <Center
              className="project-title"
              fontSize={'2xl'}
              color={colorMode === 'light' ? 'black' : 'white'}
            >
              {el.title}
            </Center>

            <Text
              className="project-description"
              textAlign={'justify'}
              fontSize={{
                base: '1xl',
                sm: '1xl',
                md: '1xl',
                lg: '1xl',
                xl: '1xl',
                '2xl': '2xl',
              }}
            >
              {el.desc}
            </Text>

            <Box className="project-tech-stack">
              <Text
                bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                bgClip="text"
                display={'inline'}
              >
                Tech Stack :-{' '}
              </Text>
              <Text display={'inline'}>{el.stack} </Text>
            </Box>

            <Flex justify={'space-between'}>
              <a href={el.codebase} target={'_blank'} rel="noreferrer noopener">
                <button className="button project-github-link">Codebase</button>
              </a>

              <a href={el.live} target={'_blank'} rel="noreferrer noopener">
                <button className="button project-deployed-link">Live</button>
              </a>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
