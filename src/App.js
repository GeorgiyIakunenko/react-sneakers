
import './app.scss';
import react from 'react';
import Card from './components/Card/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from './pages/Favorites';
//import axios from 'axios'
//import { findAllByTestId } from '@testing-library/react';
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
    const [cartItems, setCartItems] = react.useState([]);
    const [itemsArray, setItemsArray] = react.useState(arr);
    const [searchValue, setSearchValue] = react.useState('');

    function Addcart(title,isCartItem) {

      const newState = itemsArray.map((obj) => {
        if (obj.title === title) {
          return { ...obj, isCart: !isCartItem };
        }
        return obj;
      });

      setItemsArray(newState);

    }

    function onPlusBtnClick(item) {
      const itemIndex = cartItems.findIndex(
        (cartItem) => cartItem.title === item.title
      );
      if (itemIndex >= 0) {
        const newCartItems = cartItems.filter(
          (cartItem, index) => index !== itemIndex
        );
        setCartItems(newCartItems);
      } else {
        setCartItems([...cartItems, item]); 
      }   

      console.log(cartItems);
    }

    const onChangeSearchInput = e => {
      console.log(e.target.value);
      setSearchValue(e.target.value);
    }

    const removeCartItem = (title) => {
       const newState = itemsArray.map((obj) => {
         if (obj.title === title) {
           return { ...obj, isCart: !obj.isCart };
         }
         return obj;
       });

       setItemsArray(newState);

    } 

    return (
      <div className="wrapper">
        {cartOpened ? (
          <Drawer
            removeCartItem={removeCartItem}
            items={cartItems}
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
                Addcart={Addcart}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                Card={Card}
                setItemsArray={setItemsArray}
                itemsArray={itemsArray}
                onPlusBtnClick={onPlusBtnClick}
              ></Home>
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                Addcart={Addcart}
                setItemsArray={setItemsArray}
                Card={Card}
                itemsArray={itemsArray}
                onPlusBtnClick={onPlusBtnClick}
              ></Favorites>
            }
          />
        </Routes>
      </div>
    );
}

export default App;
