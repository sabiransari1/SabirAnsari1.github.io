import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import wave from '../assets/images/wave.png';

export const Footer = () => {
  return (
    <Flex
      p={{
        base: '1rem 1rem',
        sm: '1rem 1rem',
        md: '1rem 2rem',
        lg: '3rem 5rem',
        xl: '3rem 5rem',
        '2xl': '3rem 5rem',
      }}
      w="100%"
      bgImage={wave}
      bgPosition={'center'}
      direction={'column'}
      align={'center'}
      gap={'1rem'}
    >
      <Text textAlign={'center'}>
        Designed and build by Sabir Ansari, 2023 All rights reserved.
      </Text>
    </Flex>
  );
};
