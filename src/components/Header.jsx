import { Link } from "solid-app-router"

import styles from '../App.module.scss';

function Header() {
  return (
    <nav id={styles.header}>
      <div>Hi there!</div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}

export default Header;
