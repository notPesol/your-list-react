import styles from "./Input.module.css";

const Input = ({ type, className, value, onChange, id }) => {
  const classes = `${styles.Input} ${className}`;

  return (
    <input
      id={id}
      type={type || "text"}
      value={value}
      onChange={onChange}
      className={classes}
    />
  );
};

export default Input;
