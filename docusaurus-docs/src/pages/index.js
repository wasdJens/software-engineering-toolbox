import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Authors from "../components/Authors";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.headerLayout)}>
      <div className="container">
        <h1 className="hero__title">Software Engineering</h1>
        <h1 className="hero__title">Toolbox</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link to="/docs/software-engineering/intro">
          <button className={clsx(styles.headerButton)}>Get Started</button>
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Authors />
      </main>
    </Layout>
  );
}
