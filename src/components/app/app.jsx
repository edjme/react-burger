import React, { useEffect, useState } from "react";
import BurgerIngridients from "../burgerIngredients1/burgerIngredients";
import BurgerConstructor from "../burgerConstructor1/burgerConstructor";
import AppHeader from "../appHeader1/appHeader";

import appStyles from "./app.module.css";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const App = () => {
  const [data, setData] = useState([]);

  const baseUrl = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then(checkResponse)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []); 

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngridients ingridients={data} />
        <BurgerConstructor ingridients={data} />
      </main>
    </div>
  );
};

export default App;
