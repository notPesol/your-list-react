import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./AddItemForm.module.css";

import { useContext, useState } from "react";
import ListContext from "../../app/list-context";

const AddItemForm = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const ctx = useContext(ListContext);

  const onTextChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onDateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text && date) {
      ctx.addItem(ctx.selectedCategory.id, { text, endDate: date });
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="text">รายละเอียด: </label>
        <Input value={text} onChange={onTextChangeHandler} id="text" />
      </div>
      <div>
        <label htmlFor="date">วันสิ้นสุด: </label>
        <Input
          value={date}
          onChange={onDateChangeHandler}
          id="date"
          type="date"
        />
      </div>
      <Button type="submit">เพิ่ม</Button>
    </form>
  );
};

export default AddItemForm;
