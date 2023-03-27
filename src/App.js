
import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import react from 'react';
import Card from './components/Card/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";

import Favorites from './pages/Favorites';

  const arr = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Green",
      price: "12 450",
      url: "/img/sneakers/1.jpg",
      isCart: true,
      isFavorite: false,
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: "8 750",
      url: "/img/sneakers/2.jpg",
      isCart: false,
      isFavorite: false,
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "17 000",
      url: "/img/sneakers/3.jpg",
      isCart: false,
      isFavorite: false,
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: "8 999",
      url: "/img/sneakers/4.jpg",
      isCart: false,
      isFavorite: true,
    },
  ];  
 
function App() {

    const [cartOpened, setCartOpener] = react.useState(false);
    const [itemsArray, setItemsArray] = react.useState(arr);
    const [searchValue, setSearchValue] = react.useState('');

    const onChangeSearchInput = e => {
      console.log(e.target.value);
      setSearchValue(e.target.value);
    }

    const toggleCartItem = (title) => {
      const newState = itemsArray.map((obj) => {
        if (obj.title === title) {
          return { ...obj, isCart: !obj.isCart };
        }
        return obj;
      });
      setItemsArray(newState);
    }; 

    return (
      <div className="wrapper">
        {cartOpened ? (
          <Drawer
            toggleCartItem={toggleCartItem}
            itemsArray={itemsArray}
            onClose={() => setCartOpener(false)}
          />
        ) : null}

        <Header onClickCart={() => setCartOpener(true)} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                toggleCartItem={toggleCartItem}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                Card={Card}
                setItemsArray={setItemsArray}
                itemsArray={itemsArray}
              ></Home>
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                toggleCartItem={toggleCartItem}
                setItemsArray={setItemsArray}
                Card={Card}
                itemsArray={itemsArray}
              ></Favorites>
            }
          />
        </Routes>
      </div>
    );
}

export default App;
