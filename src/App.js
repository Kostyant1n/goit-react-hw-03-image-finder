import { Component } from "react/cjs/react.production.min";
import styles from "./App.module.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGalleryList from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Fetch from "./Service/FetchImages";
import Loader from "./Loader/Loader";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isOpenModal: false,
    largeImageURL: "",
    error: "",
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.query !== prevState.query ||
      prevState.page !== this.state.page
    ) {
      this.setState((prevState) => ({ isLoading: !prevState.isLoading }));

      Fetch(this.state.query, this.state.page)
        .then((images) => {
          this.setState((prevState) => ({
            isLoading: !prevState.isLoading,
            images: [...prevState.images, ...images],
          }));
        })

        .catch((error) => this.setState({ error }));
    }

    if (prevState.images !== this.state.images) {
      window.scrollTo({ top: snapshot, behavior: "smooth" });
    }

    if (this.state.error !== prevState.error) {
      this.setState({ error: null, isLoading: false });
    }
  }
  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
  }

  onLoadMore = () => {
    if (this.state.images) {
      this.setState((prevState) => ({ page: prevState.page + 1 }));
    }
  };

  toggleModal = (largeImageURL) => {
    this.setState((prevState) => ({
      isOpenModal: !prevState.isOpenModal,
      largeImageURL,
    }));
  };

  SubmitForm = (query) => {
    if (this.state.query === query) {
      return;
    }
    this.setState({ query, page: 1, images: [] });
  };
  render() {
    const { images, isOpenModal, isLoading } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar SubmitForm={this.SubmitForm} />
        <ImageGalleryList
          toggleModal={this.toggleModal}
          isOpenModal={isOpenModal}
          images={images}
        />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}

        {isOpenModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
