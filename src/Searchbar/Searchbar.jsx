import PropTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import styles from "../Searchbar/Searchbar.module.scss";

class Searchbar extends Component {
  state = {
    search: "",
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.SubmitForm(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.search}
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  SubmitForm: PropTypes.func.isRequired,
};
export default Searchbar;
