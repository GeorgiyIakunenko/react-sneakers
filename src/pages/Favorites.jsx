
function Favorites({Card,itemsArray, onPlusBtnClick,setItemsArray,Addcart}) {
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
                    Addcart={Addcart}
                    onPlusBtnClick={() => {
                      onPlusBtnClick(obj);
                    }}
                     setItemsArray={setItemsArray}

                  />
                );
                }
                
              })}
          </div>
        </div>)
}

export default Favorites;