import { useState } from "react";

const categoriesArr = [
  'All',
  'Meaty',
  'Veggie',
  'Grill',
  'Spicy',
  'Pie'

]


const Categories = ({categoryI, setCategoryI}) => {


  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => setCategoryI(i)}
            className={categoryI === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;