function Favorites({Card,itemsArray,setItemsArray,toggleCartItem}) {
  return(<div className="content">
          <div className="content-top">
            <h1 className="title">
              Favorites
            </h1>
          </div>
          <div className="cards">
            {itemsArray
              .map((obj, index) => {
                if(obj.isFavorite === true){
                  return (
                  <Card   
                    key={obj.title}
                    title={obj.title}
                    price={obj.price}
                    itemsArray={itemsArray}
                    url={obj.url}
                    isFavorite={obj.isFavorite}
                    isCart={obj.isCart}
                    toggleCartItem={toggleCartItem}
                     setItemsArray={setItemsArray}

                  />
                );
                }
                
              })}
          </div>
        </div>)
}

export default Favorites;