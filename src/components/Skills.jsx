import React, { useState } from 'react';
import { Box, Flex, Grid, Text, Button } from '@chakra-ui/react';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import reactjs from '../assets/images/reactjs.png';
import redux from '../assets/images/redux.png';
import typescript from '../assets/images/typescript.png';
import chakra from '../assets/images/chakra.png';
import nodejs from '../assets/images/nodejs.png';
import express from '../assets/images/express.png';
import mongodb from '../assets/images/mongodb.png';
import git from '../assets/images/git.png';
import npm from '../assets/images/npm.png';
import postman from '../assets/images/postman.png';
import vercel from '../assets/images/vercel.png';
import netlify from '../assets/images/netlify.png';
import VSCode from '../assets/images/VSCode.png';
import figma from '../assets/images/figma.png';
import canva from '../assets/images/canva.png';
import { SkillCard } from './SkillCard';

const skills = [
  { img: html, name: 'HTML', type: 'frontend' },
  { img: css, name: 'CSS', type: 'frontend' },
  { img: javascript, name: 'JavaScript', type: 'frontend' },
  { img: reactjs, name: 'React.js', type: 'frontend' },
  { img: redux, name: 'Redux', type: 'frontend' },
  { img: typescript, name: 'TypeScript', type: 'frontend' },
  { img: chakra, name: 'Chakra-UI', type: 'frontend' },
  { img: nodejs, name: 'Node.js', type: 'backend' },
  { img: express, name: 'Express', type: 'backend' },
  { img: mongodb, name: 'MongoDB', type: 'backend' },
  { img: git, name: 'Git', type: 'others' },
  { img: postman, name: 'Postman', type: 'others' },
  { img: npm, name: 'NPM', type: 'others' },
  { img: VSCode, name: 'VS Code', type: 'others' },
  { img: figma, name: 'Figma', type: 'others' },
  { img: canva, name: 'Canva', type: 'others' },
  { img: vercel, name: 'Vercel', type: 'others' },
  { img: netlify, name: 'Netlify', type: 'others' },
];

export const Skills = () => {
  const [filterSkills, setFilterSkills] = useState(skills);
  const [type, setType] = useState('all');

  const skillsFilter = (e) => {
    const { value } = e.target;

    const filterSkillsX = skills.filter((el) => el.type === value);

    setFilterSkills(filterSkillsX.length === 0 ? skills : filterSkillsX);
    setType(value);
  };

  return (
    <Box
      id={'skills'}
      p={{
        base: '1rem 1rem',
        sm: '1rem 1rem',
        md: '1rem 2rem',
        lg: '3rem 5rem',
        xl: '3rem 5rem',
        '2xl': '3rem 5rem',
      }}
    >
      {/* 1.1 */}
      <Box>
        {/* 1.1 */}
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
            Technical Skills
          </Text>
        </Flex>

        {/* 1.2 */}
        <Flex direction={'column'}>
          {/* 1.1.1 */}
          <Flex gap={'1rem'} mb={'1rem'}>
            <Button
              variant="solid"
              size={{
                base: 'sm',
                sm: 'sm',
                md: 'md',
                lg: 'md',
                xl: 'lg',
                '2xl': 'lg',
              }}
              color={type === 'all' ? '#fdc50f' : ''}
              onClick={skillsFilter}
              value={'all'}
            >
              All
            </Button>

            <Button
              variant="solid"
              size={{
                base: 'sm',
                sm: 'sm',
                md: 'md',
                lg: 'md',
                xl: 'lg',
                '2xl': 'lg',
              }}
              color={type === 'frontend' ? '#fdc50f' : ''}
              onClick={skillsFilter}
              value={'frontend'}
            >
              Frontend
            </Button>

            <Button
              variant="solid"
              size={{
                base: 'sm',
                sm: 'sm',
                md: 'md',
                lg: 'md',
                xl: 'lg',
                '2xl': 'lg',
              }}
              color={type === 'backend' ? '#fdc50f' : ''}
              onClick={skillsFilter}
              value={'backend'}
            >
              Backend
            </Button>

            <Button
              variant="solid"
              size={{
                base: 'sm',
                sm: 'sm',
                md: 'md',
                lg: 'md',
                xl: 'lg',
                '2xl': 'lg',
              }}
              color={type === 'others' ? '#fdc50f' : ''}
              onClick={skillsFilter}
              value={'others'}
            >
              Others
            </Button>
          </Flex>

          {/* 1.1.2 */}
          <Box>
            <Grid
              templateColumns={{
                base: 'repeat(2,1fr)',
                sm: 'repeat(4,1fr)',
                md: 'repeat(6,1fr)',
                lg: 'repeat(6,1fr)',
                xl: 'repeat(8,1fr)',
                '2xl': 'repeat(8,1fr)',
              }}
              gap={'1rem'}
              justifyItems={'center'}
            >
              {filterSkills?.map((el, index) => (
                <SkillCard key={index} {...el} />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
