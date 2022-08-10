import { createContext } from "react";

const ListContext = createContext({
  categories: [],
  selectedCategory: {},
  addCategory: (categoryName) => {},
  removeCategory: (categoryId) => {},
  addItem: (categoryId, item) => {},
  removeItem: (categoryId, itemId) => {},
  selectCategory: (categoryId) => {}
});


export default ListContext;