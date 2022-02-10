import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore} className={styles.Button}>
        Load more{" "}
      </button>
    </div>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
