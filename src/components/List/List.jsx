import Wrapper from "../UI/Wrapper/Wrapper";

import styles from "./List.module.css";

import { useContext, useState } from "react";
import ListContext from "../../app/list-context";
import Item from "../Item/Item";
import Button from "../UI/Button/Button";
import AddItemForm from "../AddItemForm/AddItemForm";

const List = () => {
  const ctx = useContext(ListContext);
  const [showForm, setShowForm] = useState(false);

  const onChangeHandler = (e) => {
    ctx.selectCategory(e.target.value);
  };

  return (
    <Wrapper className={styles.List}>
      <div className={styles.actions}>
        {ctx.selectedCategory && (
          <Button onClick={() => setShowForm((prevState) => !prevState)}>
            {showForm ? "ยกเลิก" : "เพิ่ม"}
          </Button>
        )}
        <select onChange={onChangeHandler}>
          <option value="">--- เลือกหมวดหมู่ ---</option>
          {ctx.categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      
      {ctx.selectedCategory && <h2>{ctx.selectedCategory.name}</h2>}
      {showForm && ctx.selectedCategory && <AddItemForm />}

      {ctx.selectedCategory &&
        ctx.selectedCategory.items &&
        ctx.selectedCategory.items.length < 1 && <h3>รายการว่างเปล่า</h3>}

      <ul className={styles.ul}>
        {ctx.selectedCategory?.items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default List;
