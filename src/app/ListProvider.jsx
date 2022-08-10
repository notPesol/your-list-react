import { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ListContext from "./list-context";

const date = new Date(2022, 8, 8);
const dateString = date.toISOString();
const dummyCategories = [
  {
    id: nanoid(),
    name: "Shopping List",
    items: [
      { id: nanoid(), text: "buy carrot", endDate: dateString },
      { id: nanoid(), text: "buy watermelon", endDate: dateString },
    ],
  },
  {
    id: nanoid(),
    name: "Todo List",
    items: [
      { id: nanoid(), text: "run 5KM", endDate: dateString },
      { id: nanoid(), text: "swim 1 hour", endDate: dateString },
    ],
  },
];

const ListProvider = ({ children }) => {
  const [categories, setCategories] = useState([...dummyCategories]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addCategory = (categoryName) => {
    setCategories((prevState) => {
      if (
        prevState.findIndex((category) => category.name === categoryName) !== -1
      ) {
        return prevState;
      }

      const newCategory = {
        id: nanoid(),
        name: categoryName,
        items: [],
      };

      return [...prevState, newCategory];
    });
  };

  const removeCategory = (categoryId) => {
    setCategories((prevState) => {
      return prevState.filter((category) => category.id !== categoryId);
    });
  };

  const addItem = (categoryId, item) => {
    setCategories((prevState) => {
      const selectedIndex = prevState.findIndex(
        (category) => category.id === categoryId
      );
      // if found
      if (selectedIndex !== -1) {
        const newItem = {
          id: nanoid(),
          ...item,
        };
        const copyCategories = [...prevState];
        let selectedCategory = prevState[selectedIndex];
        selectedCategory.items.push(newItem);
        return copyCategories;
      }
      // if not found
      return prevState;
    });
  };

  const removeItem = (categoryId, itemId) => {
    setCategories((prevState) => {
      const selectedIndex = prevState.findIndex(
        (category) => category.id === categoryId
      );
      // if found
      if (selectedIndex !== -1) {
        const copyCategories = [...prevState];
        let selectedCategory = { ...prevState[selectedIndex] };
        selectedCategory.items = selectedCategory.items.filter(
          (item) => item.id !== itemId
        );
        copyCategories[selectedIndex] = selectedCategory;
        return copyCategories;
      }
      // if not found
      return prevState;
    });
  };

  const selectCategory = useCallback(
    (categoryId) => {
      const selectedCategory = categories.find(
        (category) => category.id === categoryId
      );
      setSelectedCategory(selectedCategory);
    },
    [categories]
  );

  useEffect(() => {
    if (selectedCategory) {
      selectCategory(selectedCategory.id);
    }
  }, [selectedCategory, selectCategory]);

  return (
    <ListContext.Provider
      value={{
        categories,
        selectedCategory,
        addCategory,
        removeCategory,
        addItem,
        removeItem,
        selectCategory,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
