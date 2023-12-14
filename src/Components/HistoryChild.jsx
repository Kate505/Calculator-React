import {Box, Card, CardBody, CardHeader, Heading, Text, Stack, Spacer, IconButton} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {checkSign} from "../Helpers/checkSign.js";

export const HistoryChild = ({historyChild, setHistory, history, setInput, setCount, setSign}) => {
  const text = historyChild.split('=');

  const deleteHistory = () => {
    setHistory(history.filter(h => h !== historyChild));
  }
  const restoreInput = () => {
    const newInput = text[0].split(' ').join('').split('');
    setInput(newInput);
    setCount(1);
    setSign(newInput.filter(nI => checkSign(nI).isSign && checkSign(nI).sign !== '.'));
  }

  return (
    <Card size='sm' variant='outline' mb='2'>
      <IconButton
        colorScheme='teal'
        aria-label='Call Segun'
        size='sm'
        onClick={() => deleteHistory()}
        icon={<DeleteIcon/>}
      />
      <Box _active={{bg: '#dddfe2', transform: 'scale(0.98)', borderColor: '#bec3c9'}} textStyle={{size: '100px'}}
           _focus={{boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'}} onClick={() => restoreInput()}>
        <CardHeader>
          <Heading size='md'>{text[0]}</Heading>
        </CardHeader>
        <CardBody>
          <Text>= {text[1]}</Text>
        </CardBody>
      </Box>
    </Card>
  );
}