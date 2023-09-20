import update from "immutability-helper";
import { useCallback, useState } from "react";
import Device from "./device";

export interface Item {
  id: number;
  value: number;
}

export const Container = ({ data }: { data: Item[] }) => {
  {
    const [cards, setCards] = useState(data);
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; value: number }, index: number) => {
        return (
          <Device
            key={card.id}
            index={index}
            id={card.id}
            value={card.value}
            moveCard={moveCard}
          />
        );
      },
      [],
    );

    return (
      <div className="grid grid-cols-2 shadow-md shadow-base-300/70 p h-96 w-1/3 mx-4">
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    );
  }
};

export default Container;
