import { Link } from "react-router-dom";
import styles from "./Rodape.module.css";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Link to={"./"}>
        <p>Densevolvido por Carolina</p>
      </Link>
    </footer>
  );
}

export default Rodape;
