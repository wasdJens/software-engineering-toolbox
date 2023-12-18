import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

// const AuthorList = [
//   {
//     name: "Jens Reiner",
//     title: "Solution Expert - PlanB. GmbH",
//     image: "/img/authors/jens.jpg",
//     about:
//       "Five years of experience in creating modern software solutions. Passionate about software architecture, requirements engineering and frontend development.",
//   },
// ];

// function Author({ name, title, image, about }) {
//   return (
//     <div className={clsx(styles.authorContainer)}>
//       <div className={clsx(styles.authorCard)}>
//         <img className={clsx(styles.authorImage)} src={useBaseUrl(image)}></img>
//         <div className={clsx(styles.authorAbout)}>
//           <h3>
//             {name}
//             <div className={clsx(styles.authorSubtitle)}>{title}</div>
//           </h3>
//           <p>{about}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Authors() {
  return (
    <section className={styles.authors}>
      <div className="container">
        <div className={clsx(styles.title)}>
          <h1 className="text--center">About the author</h1>
        </div>

        <div>
          <div className={clsx(styles.authorContainer)}>
            <div className={clsx(styles.authorCard)}>
              <img
                className={clsx(styles.authorImage)}
                src={useBaseUrl("/static/img/authors/jens.jpg")}
              ></img>
              <div className={clsx(styles.authorAbout)}>
                <h3>
                  Jens Reiner
                  <div className={clsx(styles.authorSubtitle)}>
                    Solution Expert - PlanB. GmbH
                  </div>
                </h3>
                <p>
                  Five years of experience in creating modern software
                  solutions. Passionate about software architecture,
                  requirements engineering and web development.
                </p>
                <p>
                  Feel free to connect on &nbsp;
                  <a href="https://www.linkedin.com/in/jens-reiner/">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          {AuthorList.map((props, idx) => (
            <Author key={idx} {...props} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
