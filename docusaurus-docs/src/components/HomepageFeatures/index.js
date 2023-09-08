import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Philosophy",
    description: (
      <>
        The software engineering toolbox is a project we have created to share
        commonly used software engineerings principles and architectures. It is also a space where we can share our best practices and approaches to create high quality software.
      </>
    ),
  },
  {
    title: "Toolbox",
    description: (
      <>
        Like in traditional craftmanship we want to provide a toolbox where you
        as a software engineer can choose from to achieve your goals and create
        wonderful new things.
      </>
    ),
  },
  {
    title: "Focus",
    description: (
      <>At the current stage we focus on the modern web development. This includes frontend development, API design and Cloud Infrastructure</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(styles.title)}>
          <h1 className="text--center">Make the difference and ship quality products</h1>
        </div>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
