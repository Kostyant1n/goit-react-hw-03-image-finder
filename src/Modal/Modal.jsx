import PropTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import styles from "../Modal/Modal.module.scss";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("key", this.onKey);
  }
  componentWillUnmount() {
    window.removeEventListener("key", this.onKey);
  }
  onKey = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };
  onOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <div className={styles.Overlay} onClick={this.onOverlayClick}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
export default Modal;
