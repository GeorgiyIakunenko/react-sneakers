import react from "react";
import Styles from "./Card.scss";


function Card(props) {

    const [isAdded, setIsAdded] = react.useState(false);
    const [isFavorite, setFavorite] = react.useState(false);

    function addToCart() {
      setIsAdded(!isAdded);
      props.onPlusBtnClick();
    }

    return (
      <div className="card">
        <img
          onClick={() => setFavorite(!isFavorite)}
          className="favorite"
          width={32}
          heigth={32}
          src={isFavorite ? "/img/heart-like.svg" : "/img/heart-nolike.png"}
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
              isAdded
                ? "sneaker-btn card__btn-inCart carn__btn-noclick"
                : "card__btn sneaker-btn"
            }
            onClick={addToCart}
          >
            <img
              src={isAdded ? "/img/inCart.svg" : "/img/addToCart.svg"}
              alt="sneaker"
            />
          </button>
        </div>
      </div>
    );
}

export default Card;