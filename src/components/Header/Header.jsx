import { useState } from "react";
import styles from "./header.module.css";

export const Header = () => {
  const [hamAnim, setHamAnim] = useState(false);
  const body = document.querySelector("body");

  if (hamAnim) {
    body.style.overflow = "hidden";
  } else if (!hamAnim) {
    body.style.overflow = "scroll";
  }

  return (
    <>
      <header className={styles.header} id="home">
        <h1 className={styles.header__title}>Ñ</h1>

        <nav className={styles.desktop__navbar}>
          <ol className={styles.desktop__navbar__list}>
            <li className={styles.desktop__navbar__item}>
              <a href="#home">Inicio</a>
            </li>
            <li className={styles.desktop__navbar__item}>
              <a href="#aboutMe">Sobre mí</a>
            </li>
            <li className={styles.desktop__navbar__item}>
              <a href="#works">Trabajos</a>
            </li>
            <li className={styles.desktop__navbar__item}>
              <a href="#contact">Contacto</a>
            </li>
          </ol>
        </nav>

        <button
          onClick={() => setHamAnim(!hamAnim)}
          className={
            hamAnim
              ? `${styles.header__nav} ${styles.active}`
              : `${styles.header__nav}`
          }
        >
          <div className={styles.nav__hamburguer__menu}></div>
          <div className={styles.nav__hamburguer__menu}></div>
          <div className={styles.nav__hamburguer__menu}></div>
        </button>

        <aside
          className={
            hamAnim
              ? `${styles.aside__menu}`
              : `${styles.aside__menu} ${styles.hidden}`
          }
          style={
            hamAnim
              ? { transform: "translateX(0vw)" }
              : { transform: "translateX(100vw)" }
          }
        >
          <nav className={styles.aside__nav}>
            <ol className={styles.asideMenu__list}>
              <li
                className={`${styles.list__item} ${styles.home}`}
                onClick={() => setHamAnim(!hamAnim)}
              >
                <a href="#home">Inicio</a>
              </li>

              <li
                className={`${styles.list__item} ${styles.about}`}
                onClick={() => setHamAnim(!hamAnim)}
              >
                <a href="#aboutMe">Sobre mí</a>
              </li>

              <li
                className={`${styles.list__item} ${styles.works}`}
                onClick={() => setHamAnim(!hamAnim)}
              >
                <a href="#works">Trabajos</a>
              </li>
              <li
                className={`${styles.list__item} ${styles.contact}`}
                onClick={() => setHamAnim(!hamAnim)}
              >
                <a href="#contact">Contacto</a>
              </li>
            </ol>
          </nav>
        </aside>
      </header>

      <section
        className={
          hamAnim
            ? `${styles.section} ${styles.is_cristal}`
            : `${styles.section}`
        }
      >
        <h1 className={styles.section__title}>Bienvenido 👋🏻 Me llamo</h1>
        <h2 className={styles.section__myname}>Alejandro Muñoz</h2>
        <h3 className={styles.section__profesion}>
          Frontend developer en Barcelona 🧑🏻‍💻
        </h3>
        <p className={styles.section__bio}>
          Programador junior con 2 años de experiencia. Mis{" "}
          <span className={styles.bio__word}> 3 fundamentos</span>: resolución
          de problemas, experiencia de usuario y diseño. Puedes visitar mi
          <span className={styles.bio__word}> portfolio</span>, donde comparto
          todos mis proyectos.
        </p>

        <button className={styles.btn_cv}>
          <a
            href="/cv/AlejandroMunozCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita mi CV
          </a>
        </button>
      </section>
    </>
  );
};
