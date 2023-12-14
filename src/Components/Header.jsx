import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode, useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {MoonIcon, RepeatClockIcon, SunIcon} from "@chakra-ui/icons";
import {History} from "./History.jsx";


function Header({history, setHistory, setInput, setCount, setSign}) {
  const {colorMode, toggleColorMode} = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
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
          onClick={onOpen}
          icon={<RepeatClockIcon/>}
        />
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        />
      </Flex>
      <History history={history} isOpen={isOpen} onClose={onClose} btnRef={btnRef} setHistory={setHistory} setInput={setInput}setCount={setCount} setSign={setSign}/>
    </>
  );
}

export default Header;