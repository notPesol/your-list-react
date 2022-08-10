import { useState, useContext } from "react";
import ListContext from "../../app/list-context";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./AddCategoryForm.module.css";
import Wrapper from "../UI/Wrapper/Wrapper";

const AddCategoryForm = ({ history }) => {
  const ctx = useContext(ListContext);
  const [categoryName, setCategoryName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (categoryName) {
      const searchIndex = ctx.categories.findIndex(
        (category) => category.name === categoryName
      );
      // if not found in list context
      if (searchIndex === -1) {
        ctx.addCategory(categoryName);
        history.replace("/");
      }
    }
  };

  return (
    <Wrapper className={styles["form-wrapper"]}>
      <h2>Add Category Page</h2>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="categoryName">รายละเอียด: </label>
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            id="categoryName"
          />
        </div>

        <Button type="submit">เพิ่ม</Button>
      </form>
    </Wrapper>
  );
};

export default AddCategoryForm;
