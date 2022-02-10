import PropTypes from "prop-types";
import styles from "../ImageGalleryItem/ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ toggleModal, webformatURL, largeImageURL }) => {
  return (
    <>
      <li className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={styles.ImageGalleryItem__image}
          onClick={() => toggleModal(largeImageURL)}
        />
      </li>
    </>
  );
};
ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
