import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import {RepeatClockIcon} from "@chakra-ui/icons";
import {HistoryChild} from "./HistoryChild.jsx";
import {useLayoutEffect} from "react";

export const History = ({isOpen, onClose, btnRef, history, setHistory, setInput, setCount, setSign}) => {
  useLayoutEffect(() => {

  }, [history]);
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>History <RepeatClockIcon/></DrawerHeader>
        <DrawerBody>
          {
            history.length > 0 && history.map((h) => (<HistoryChild key={h} historyChild={h} history={history} setHistory={setHistory}setInput={setInput} setCount={setCount} setSign={setSign}/>))
          }
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}