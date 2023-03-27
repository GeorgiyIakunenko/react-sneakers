function Home({Card,itemsArray, setSearchValue, onChangeSearchInput, searchValue, setItemsArray,toggleCartItem }) {
  return(<div className="content">
          <div className="content-top">
            <h1 className="title">
              {searchValue
                ? `Поиск по запросу : '${searchValue}'`
                : "Все кроссовки"}
            </h1>
            <div className="search-block">
              <img
                height={15}
                width={15}
                src="/img/search.svg"
                alt="search-img"
              />
              <input
                className="search-block__input"
                placeholder="Search..."
                type="text"
                value={searchValue}
                onChange={onChangeSearchInput}
              />
              {searchValue ? (
                <button
                  onClick={() => {
                    setSearchValue("");
                  }}
                  className="search-block__btn sneaker-btn"
                >
                  <img src="/img/delFromCart.svg" alt="x" />
                </button>
              ) : null}
            </div>
          </div>
          <div className="cards">
            {itemsArray
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj, index) => {
                return (
                  <Card
                    setItemsArray={setItemsArray}
                    itemsArray={itemsArray}
                    key={obj.title}
                    title={obj.title}
                    price={obj.price}
                    toggleCartItem={toggleCartItem}
                    isFavorite={obj.isFavorite}
                    isCart={obj.isCart}
                    url={obj.url}
                  />
                );
              })}
          </div>
        </div>)
}

export default Home;