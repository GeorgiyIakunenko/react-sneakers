

function Drawer({ removeCartItem, onClose, items = [], itemsArray }) {

  let cnt = 0;

  itemsArray.forEach((value, index, array) => {
    if(value.isCart == true){
      cnt++;
    }
  })

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__top">
          <h3 className="drawer__title">Корзина</h3>
          <button onClick={onClose} className="drawer__top-btn">
            <img height={30} width={30} src="/img/closeBtn.svg" alt="" />
          </button>
        </div>

        {cnt > 0 ? (
          <div className="drawer__content">
            <div className="drawer__items">
              {itemsArray.map((item) => {
                if (item.isCart == true) {
                  return (
                    <div className="drawer__item">
                      <img
                        width={70}
                        height={70}
                        className="drawer__item-img"
                        src={item.url}
                        alt="sneakers-foto"
                      />
                      <div className="drawer__item-info">
                        <p className="drawer__item-text">{item.title}</p>
                        <span className="drawer__item-price price-style">
                          {item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => removeCartItem(item.title)}
                        className="drawer__item-btn sneaker-btn"
                      >
                        <img src="/img/delFromCart.svg" alt="x" />
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            <div className="drawer__box">
              <ul className="drawer__info">
                <li className="drawer__price">
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li className="drawer__tax">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="green-btn">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <img
              width={120}
              height={120}
              className="cart-empty__img"
              src="/img/cart-empty.png"
              alt="cart-empty"
            />
            <h3 className="cart-empty__title">Корзина пустая</h3>
            <p className="cart-empty__text">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="green-btn green-btn__left">
              <img src="/img/arrow-left.svg" alt="arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;