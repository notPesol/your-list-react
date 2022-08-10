import styles from "./Button.module.css";

const Button = ({ children, className, type, onClick }) => {
  const classes = `${styles.Button} ${className}`;

  return (
    <button
      className={classes}
      type={type || "button"}
      onClick={onClick || null}
    >
      {children}
    </button>
  );
};

export default Button;
