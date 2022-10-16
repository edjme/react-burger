import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "../burgerConstructor/burgerConstructor.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToConstructor } from "../../services/actions/constructor";
import { useDrop } from "react-dnd";
import { ConstructorItem } from "../constructorItem/ConstructorItem";

export const ConstructorItems = () => {
  const dispatch = useDispatch();
  const { constructorItems, bun } = useSelector(
    (store) => store.constructorItems
  );

  const [, dropTarget] = useDrop(() => ({
    accept: "ingridient",
    drop: (item) => dispatch(addToConstructor(item)),
  }));

  return (
    <ul className={`${burgerConstructorStyles.items} pl-4`} ref={dropTarget}>
      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        ) : (
          ""
        )}
      </li>

      <li
        className={`${burgerConstructorStyles.list} ${burgerConstructorStyles.window} custom-scroll`}
      >
        {constructorItems.length > 0
          ? constructorItems.map((item, index) => {
              return (
                <ConstructorItem cardData={item} key={item.id} index={index} />
              );
            })
          : ""}
      </li>

      <li className={`${burgerConstructorStyles.list} ml-5`}>
        {bun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        ) : (
          ""
        )}
      </li>
    </ul>
  );
};
