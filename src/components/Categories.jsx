import { useState } from "react";

const categoriesArr = [
  {
    index: 0,
    text: 'All'
  },
  {
    index: 1,
    text: 'Meaty'
  },
  {
    index: 2,
    text: 'Veggie'
  },
  {
    index: 3,
    text: 'Grill'
  },
  {
    index: 4,
    text: 'Spicy'
  },
  {
    index: 5,
    text: 'Pie'
  }

]


const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)



  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((category, i) => (
          <li
            key={category.text}
            onClick={() => setActiveCategory(i)}
            className={activeCategory === i ? "active" : ""}
          >
            {category.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
