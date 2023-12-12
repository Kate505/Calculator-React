import {Box, Card, CardBody, CardHeader, Heading, Text, Stack} from "@chakra-ui/react";

export const HistoryChild = ({historyChild}) => {
  const text = historyChild.split('=');
  return (
    <Card size='sm' variant='outline' mb='2'>
      <CardHeader>
        <Heading size='md'>{text[0]}</Heading>
      </CardHeader>
      <CardBody>
        <Text>= {text[1]}</Text>
      </CardBody>
    </Card>
  );
}