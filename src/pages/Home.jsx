import React from "react";

import { useState, useEffect, useContext } from "react";

import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {

  const { searchValue } = useContext(SearchContext)

  const [pizzas, setPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // children states
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  // pagination states
  const[currentPage, setCurrentPage] = useState(1)

  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://646e6b9c9c677e23218ba3c6.mockapi.io/items?page=${currentPage}&limit=3&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty.replace("-", "")}${search}&order=${
        sortType.sortProperty.includes("-") ? "asc" : "desc"
      }`
    ) //
      .then((res) => res.json())
      .then((pizzaData) => {
        setPizza(pizzaData);
        setIsLoading(false);
        console.log(sortType.sortProperty);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]); // watching the change of categoryId

  /* const pizzasSorting = pizzas
  .filter((obj) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
      return true
    } else {
      return false
    }
  } )
  .map((obj) => <PizzaBlock key={obj.id} {...obj} />) */

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryI={categoryId}
          setCategoryI={(id) => setCategoryId(id)}
        />
        <Sort sortI={sortType} setSortI={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
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
      <Pagination onPageChange={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;