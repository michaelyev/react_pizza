import React from "react";

import { useState, useEffect } from "react";

import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

const Home = () => {
  const [pizzas, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // children states
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({name: 'popularity', sortProperty: 'rating'})



  useEffect(() => {
    setIsLoading(true);
    fetch(`https://646e6b9c9c677e23218ba3c6.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId} ` : ""
    }
    &sortBy=${sortType.sortProperty.replace('-', '')}&order=${sortType.sortProperty.includes('-')? 'asc':'desc'}
    `) // 
      .then((res) => res.json())
      .then((pizzaData) => {
        setPizza(pizzaData);
        setIsLoading(false);
        console.log(sortType.sortProperty) 
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]); // watching the change of categoryId

  
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryI={categoryId} setCategoryI={(id)=> setCategoryId(id)}/>
        <Sort sortI={sortType} setSortI={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </>

        {/* <PizzaBlock
                    key={i}
                    title={pizza.title}
                    price={pizza.price}
                    image={pizza.imageUrl}
                    sizes={pizza.sizes}
                    types={pizza.types}
                  /> */}

        {/* <PizzaBlock title='Mexican Pizza' price='$19.99'/>
              <PizzaBlock title='Italian Pizza' price='$19.99'/> */}
      </div>
    </div>
  );
};

export default Home;