import react from "react";
import Styles from "./Card.scss";
import ContentLoader from "react-content-loader";
import { useLocation } from "react-router-dom";


function Card(props) {

    const [isAdded, setIsAdded] = react.useState(false);
    const [isFavorite, setFavorite] = react.useState(false);

    const [loading, setLoading] = react.useState(true);

  
   react.useEffect(() => {
    const isHomePage = window.location.pathname === "/";

    if(isHomePage){
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
      } else {
        setLoading(false);
      }
    }, []);

    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="13" ry="13" width="150" height="91" />
      <rect x="1" y="102" rx="7" ry="7" width="150" height="15" />
      <rect x="3" y="125" rx="7" ry="7" width="93" height="15" />
      <rect x="112" y="153" rx="11" ry="11" width="32" height="32" />
      <rect x="0" y="157" rx="6" ry="6" width="84" height="24" />
    </ContentLoader>;
      
    console.log(props.isCart)

    function favStaf() {

      setFavorite(!isFavorite);

      const newState = props.itemsArray.map((obj) => {
        // 👇️ if id equals 2, update country property
        if (obj.title === props.title) {
          return { ...obj, isFavorite: !obj.isFavorite };
        }

        // 👇️ otherwise return the object as is
        return obj;
      });

      props.setItemsArray(newState);

      console.log(props.itemsArray);
    }

    function Addcart2() {
      const newState = props.itemsArray.map((obj) => {
        if (obj.title === props.title) {
          return { ...obj, isCart: !props.isCart };
        }
        return obj;
      });
      props.setItemsArray(newState);
    }
    return (
      <>
        {!loading ? (
          <>
            <div className="card">
              <img
                onClick={favStaf}
                className="favorite"
                width={32}
                heigth={32}
                src={
                  props.isFavorite
                    ? "/img/heart-like.svg"
                    : "/img/heart-nolike.png"
                }
                alt="heart"
              />
              <img
                width={133}
                height={112}
                className="card__img"
                src={props.url}
                alt="sneaker"
              />
              <p className="card__text">{props.title}</p>
              <div className="card__box">
                <div className="card__box-wrapper">
                  <p>Цена:</p>
                  <b className="card__price ">{props.price} руб.</b>
                </div>
                <button
                  className={
                    props.isCart
                      ? "sneaker-btn card__btn-inCart carn__btn-noclick"
                      : "card__btn sneaker-btn"
                  }
                  onClick={Addcart2}
                >
                  <img
                    src={
                      props.isCart ? "/img/inCart.svg" : "/img/addToCart.svg"
                    }
                    alt="sneaker"
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <ContentLoader
              speed={2}
              width={210}
              height={260}
              viewBox="0 0 210 260"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <rect x="26" y="18" rx="13" ry="13" width="155" height="126" />
              <rect x="28" y="154" rx="7" ry="7" width="150" height="20" />
              <rect x="140" y="190" rx="11" ry="11" width="32" height="32" />
              <rect x="31" y="195" rx="6" ry="6" width="86" height="21" />
            </ContentLoader>
          </>
        )}
      </>
    );
}

export default Card;