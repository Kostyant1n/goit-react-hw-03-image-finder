import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "../Loader/Loader.module.scss";

const Loader = () => (
  <div className={styles.Loader}>
    <BallTriangle ariaLabel="loading" />
  </div>
);

export default Loader;
