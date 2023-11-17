import React from 'react';
import { Flex, Grid, Box, Image, Text, Center } from '@chakra-ui/react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import sabirAnsari from '../assets/images/sabirAnsari.png';
import resume from '../assets/resume/Sabir-Ansari-Resume.pdf';
import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
  return (
    <Flex
      id="home"
      p={{
        base: '1rem 1rem',
        sm: '1rem 1rem',
        md: '1rem 2rem',
        lg: '3rem 5rem',
        xl: '3rem 5rem',
        '2xl': '3rem 5rem',
      }}
      direction={{
        base: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
    >
      {/* left */}
      <Grid
        gap={'1rem'}
        w={{
          base: '100%',
          sm: '50%',
          md: '50%',
          lg: '50%',
          xl: '50%',
          '2xl': '50%',
        }}
      >
        {/* first */}
        <Box>
          <Box>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              Hy, I Am
            </Text>
            <Text
              id="user-detail-name"
              fontSize={'5xl'}
              fontWeight={'extrabold'}
              bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
              bgClip="text"
            >
              Sabir Ansari
            </Text>
          </Box>

          <Box textAlign={'justify'} color={'#788097'}>
            An enthusiastic solution-driven full-stack web developer with a
            creative mindset, skilled to use both front-end & back-end web
            development tools. Aiming to leverage once knowledge & build
            world-class applications.
          </Box>
        </Box>

        {/* second */}
        <Box
          id="resume-button-2"
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/1rP6gLNhHjeqTRtcApa2yPUU1DHvWyXYP/view?usp=sharing'
            );
          }}
        >
          {' '}
          <a id="resume-link-2" href={resume} download={'Sabir-Ansari-Resume'}>
            <button className="button">Resume</button>
          </a>
        </Box>

        {/* third */}
        <Flex>
          <a
            href="https://github.com/sabiransari1"
            target={'_blank'}
            rel="noreferrer noopener"
          >
            <Image
              id="contact-github"
              src={github}
              w={'50%'}
              transition="transform .5s"
              _hover={{
                transform: 'scale(1.5)',
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sabir-ansari-33b275257/"
            target={'_blank'}
            rel="noreferrer noopener"
          >
            <Image
              id="contact-linkedin"
              src={linkedin}
              w={'50%'}
              transition="transform .5s"
              _hover={{
                transform: 'scale(1.5)',
              }}
            />
          </a>
        </Flex>
      </Grid>

      {/* right */}
      <Flex
        w={{
          base: '100%',
          sm: '50%',
          md: '50%',
          lg: '50%',
          xl: '50%',
          '2xl': '50%',
        }}
        p={{
          base: '2rem',
          sm: '2rem',
          md: '2rem',
          lg: '3rem',
          xl: '3rem',
          '2xl': '3rem',
        }}
        direction={'column'}
        align={'center'}
        justify={'center'}
      >
        <Image
          src={sabirAnsari}
          alt={'Sabir Ansari'}
          borderRadius={'5px'}
          className="home-img"
          w={{
            base: '90%',
            sm: '90%',
            md: '90%',
            lg: '70%',
            xl: '70%',
            '2xl': '70%',
          }}
        />

        <Center>
          <Text
            fontSize={{
              base: '1xl',
              sm: '1xl',
              md: '2xl',
              lg: '3xl',
              xl: '3xl',
              '2xl': '3xl',
            }}
          >
            <Typewriter
              words={["I'm A MERN Developer"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Text>
        </Center>
      </Flex>
    </Flex>
  );
};
