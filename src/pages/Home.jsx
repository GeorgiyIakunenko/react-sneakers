function Home({Card,itemsArray, onPlusBtnClick, setSearchValue, onChangeSearchInput, searchValue }) {
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
                    
                    key={obj.title}
                    title={obj.title}
                    price={obj.price}
                    url={obj.url}
                    onPlusBtnClick={() => {
                      onPlusBtnClick(obj);
                    }}
                  />
                );
              })}
          </div>
        </div>)
}

export default Home;