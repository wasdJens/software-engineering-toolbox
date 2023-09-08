import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const AuthorList = [
  {
    name: "Jens Reiner",
    title: "Solution Expert - PlanB. GmbH",
    image: "img/authors/jens.jpg",
    about:
      "Five years of experience in creating modern software solutions. Passionate about software architecture, requirements engineering and frontend development.",
  },
];

function Author({ name, title, image, about }) {
  return (
    <div className={clsx(styles.authorContainer)}>
      <div className={clsx(styles.authorCard)}>
        <img className={clsx(styles.authorImage)} src={image}></img>
        <div className={clsx(styles.authorAbout)}>
          <h3>
            {name}
            <div  className={clsx(styles.authorSubtitle)}>{title}</div>
          </h3>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default function Authors() {
  return (
    <section className={styles.authors}>
      <div className="container">
        <div className={clsx(styles.title)}>
          <h1 className="text--center">Meet the authors</h1>
        </div>

        <div className="row">
          {AuthorList.map((props, idx) => (
            <Author key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
