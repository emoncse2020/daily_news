import { use } from "react";
import { NavLink } from "react-router";

const fetchCategory = async () => {
  const res = await fetch("categories.json");
  return res.json();
};

const categoriesPromises = fetchCategory();

const Categories = () => {
  const categories = use(categoriesPromises);

  return (
    <div>
      <h1>ALL Categories {categories.length}</h1>
      <div>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="bg-gray-200 px-4 py-2 rounded my-2 block hover:bg-gray-400 font-semibold"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
