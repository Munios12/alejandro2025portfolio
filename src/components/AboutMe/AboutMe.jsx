import styles from "./aboutme.module.css";

export const AboutMe = () => {
  return (
    <>
      <section className={styles.sectionAbout} id="aboutMe">
        <h1 className={styles.sectionAbout__title}>Sobre mí</h1>
        <div className={styles.sectionAbout__textContainer}>
          <p className={`${styles.sectionAbout__bio} ${styles.bio1}`}>
            Empecé de forma autodidacta y, poco después, acabé en un{" "}
            <span className={styles.sectionAbout__resaltedBio}>Bootcamp </span>
            con el objetivo de aprender las últimas tecnologías. Actualmente,
            estoy culminando el grado en{" "}
            <span className={styles.sectionAbout__resaltedBio}>DAW</span>, con
            interés en profundizar, ampliar mis conocimientos, pero, sobre todo
            fortalecer los fundamentos más básicos. Estoy especializado en la
            parte del frontend, pero llevo 1 año introduciéndome en el backend.
            Mi objetivo es ser un desarrollador
            <span className={styles.sectionAbout__resaltedBio}>
              {" "}
              Full Stack
            </span>
            .
          </p>

          <p className={`${styles.sectionAbout__bio} ${styles.bio3}`}>
            He trabajado en 2 proyectos para la marca más reconocida en calzado
            deportivo, resolviendo problemas que generaban grandes pérdidas de
            dinero, creando así el proyecto que más me enorgullece:
            <span className={styles.sectionAbout__resaltedBio}>
              {" "}
              The Missmates Proyect.{" "}
            </span>
            Actualmente, estoy en búsqueda de la oportunidad para aplicar todos
            mis conocimientos y, por supuesto, seguir creciendo.
          </p>
          <p className={styles.sectionAbout__bio}>Te presento mi stack:</p>
        </div>

        <ul className={styles.technologies__list}>
          <li className="tech-1">
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
          </li>
          <li>
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            />
          </li>
          <li>
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
            />
          </li>
          <li>
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            />
          </li>
          <li>
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            />
          </li>
          <li>
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
            />
          </li>
          <li>
            <img
              width={40}
              height={40}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
            />
          </li>
        </ul>
        <div className={styles.photo__container}>
          <video autoPlay muted controls height={400}>
            <source
              src="/public/video/TMProjectLite.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>
    </>
  );
};
