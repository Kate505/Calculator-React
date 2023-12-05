import React from 'react';
import {Box, Flex, Heading, IconButton, Spacer, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";


function Header() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Flex minW='full' minH='full' alignItems='center' gap='2' p={5} borderColor="teal.500" borderRadius='0'
          borderBottomWidth={1}>
      <Box p='2' border={100}>
        <Heading size='lg' color='teal.500'>Calculator</Heading>
      </Box>
      <Spacer/>
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        size='lg'
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
      />
    </Flex>
  );
}

export default Header;