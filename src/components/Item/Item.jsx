import Button from "../UI/Button/Button";

import styles from "./Item.module.css";

import { useContext } from "react";
import ListContext from "../../app/list-context";

const formatDate = (date, prefix = "") => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return prefix + `${year}/${month}/${day}`;
};

const Item = ({ item }) => {
  const ctx = useContext(ListContext);

  const date = new Date(Date.parse(item.endDate));

  const removeItem = () => {
    ctx.removeItem(ctx.selectedCategory.id, item.id);
  };

  return (
    <li className={styles.Item}>
      <div className={styles.text}>
        <p>{item.text}</p>
        <small>{formatDate(date, "end date: ")}</small>
      </div>
      <Button onClick={removeItem} className={styles["btn-delete"]}>
        ลบ
      </Button>
    </li>
  );
};

export default Item;
