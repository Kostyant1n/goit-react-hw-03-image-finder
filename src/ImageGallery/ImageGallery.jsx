import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.scss";

const ImageGalleryList = ({ images, isOpenModal, toggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          isOpenModal={isOpenModal}
          toggleModal={toggleModal}
          key={images.indexOf(image)}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default ImageGalleryList;
