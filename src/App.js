
import './app.scss';
import react from 'react';
import Card from './components/Card/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import axios from 'axios'
//import { findAllByTestId } from '@testing-library/react';
  const arr = [
   {
     title: "Мужские Кроссовки Nike Blazer Mid Green",
     price: "12 450",
     url: "/img/sneakers/1.jpg",
   },
   {
     title: "Мужские Кроссовки Nike Air Max 270",
     price: "8 750",
     url: "/img/sneakers/2.jpg",
   },
   {
     title: "Мужские Кроссовки Nike Blazer Mid Suede",
     price: "17 000",
     url: "/img/sneakers/3.jpg",
   },
   {
     title: "Кроссовки Puma X Aka Boku Future Rider",
     price: "8 999",
     url: "/img/sneakers/4.jpg",
   },
 ];  
 
function App() {

    const [cartOpened, setCartOpener] = react.useState(false);
    const [cartItems, setCartItems] = react.useState([]);
    const [itemsArray, setItemsArray] = react.useState(arr);
    const [searchValue, setSearchValue] = react.useState('');

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
       setCartItems((prev) => prev.filter((item) => item.title !== title ));

    } 

    return (
      <div className="wrapper">
        {cartOpened ? (
          <Drawer
            removeCartItem={removeCartItem}
            items={cartItems}
            onClose={() => setCartOpener(false)}
          />
        ) : null}  

        <Header onClickCart={() => setCartOpener(true)} />
        
          <Home
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            setSearchValue={setSearchValue}
            Card={Card}
            itemsArray={itemsArray}
            onPlusBtnClick={onPlusBtnClick}>   
          </Home>
       
      </div>
    );
}

export default App;
