import { useState } from "react";
import { ProductCategoriesWrapper, ProductCategoriesItem } from "./styles";

const ProductCategories = ({ getCategories }) => {
  const initialCategories = [
    {
      title: "juegos",
      displayName: "Juegos",
      select: false,
    },
    {
      title: "gift-cards",
      displayName: "Gift Cards",
      select: false,
    },
    {
      title: "consolas",
      displayName: "Consolas",
      select: false,
    },
    {
      title: "accesorios",
      displayName: "Accesorios",
      select: false,
    },
  ];
  const [categories, setCategories] = useState(initialCategories);

  const handleClick = (e) => {
    const { name } = e.target;
    const newCategories = categories.map((category) => {
      if (category.title === name) {
        category.select = !category.select;
      }
      return category;
    });
    setCategories(newCategories);
    sendCategories();
  };

  const sendCategories = () => {
    const filter = categories
      .filter((category) => category.select)
      .map((category) => category.title);
    getCategories(filter);
  };

  return (
    <ProductCategoriesWrapper>
      {categories.map(({ displayName, select, title }) => (
        <ProductCategoriesItem
          key={title}
          type="button"
          name={title}
          select={select}
          onClick={handleClick}
        >
          {displayName}
        </ProductCategoriesItem>
      ))}
    </ProductCategoriesWrapper>
  );
};

export default ProductCategories;
