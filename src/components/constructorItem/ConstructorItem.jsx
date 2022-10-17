import { useRef } from "react";
import {
  deleteIngridient,
  sortIngridient,
} from "../../services/actions/constructor";
import { useDrag, useDrop } from "react-dnd";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "../burgerConstructor/burgerConstructor";
import { useDispatch } from "react-redux";

export const ConstructorItem = ({ cardData, index }) => {
  const dispatch = useDispatch();

  const handleDeleteIngridient = (index) => {
    dispatch(deleteIngridient(index));
  };

  const [, dragRef] = useDrag({
    type: "item",
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: "item",
    drop(dragObject) {
      if (dragObject.index === index) {
        return;
      }
      dispatch(sortIngridient(dragObject.index, index));
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  return (
    <div
      key={cardData.id}
      ref={dragDropRef}
      className={burgerConstructorStyles.item}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={cardData.name}
        price={cardData.price}
        thumbnail={cardData.image}
        handleClose={() => handleDeleteIngridient(index)}
      />
    </div>
  );
};
