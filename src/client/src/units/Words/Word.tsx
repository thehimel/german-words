import {FC} from "react";
import {Card, CardBody, CardHeader, Divider, useDisclosure} from "@nextui-org/react";
import WordCard from "../WordCard/WordCard.tsx";
import Chips from "./Chips.tsx";

export interface WordProps {
  title: string;
  sentence: string;
  articles: [{ title: string; }];
  parts_of_speech: [{ title: string; }];
  level: string;
}

export interface WordItemProps {
  item: WordProps;
}

const Word: FC<WordItemProps> = ({ item }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Card className="max-w-[400px] shadow-sm shadow-purple-500" isPressable onPress={onOpen}>
        <CardHeader className="flex justify-center">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-center">
              <p className="text-md">{item.title}</p>
            </div>
            <div className="flex flex-row gap-1">
              <Chips items={item.articles} color="secondary" variant="flat"/>
              <Chips items={item.parts_of_speech} color="secondary" variant="faded"/>
            </div>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p className="text-center">{item.sentence}</p>
        </CardBody>
      </Card>
      <WordCard isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  );
}

export default Word;
