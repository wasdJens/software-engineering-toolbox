import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";
import JensImageUrl from "@site/static/img/authors/jens.jpg";
import Link from "@docusaurus/Link";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={clsx(styles.base)}>
          <section className={clsx(styles.about)}>
            <img src={JensImageUrl} />
            <div className={clsx(styles.aboutTextContainer)}>
              <h2 className={clsx(styles.aboutCatchphrase)}>
                <span>Jens Reiner</span> is a specialist for products your
                customers love and your developers enjoy working on.
              </h2>
              <p className={clsx(styles.aboutInformation)}>
                I am passionate about software engineering, where I seamlessly
                integrate the precision of engineering discipline with a
                relentless focus on customer satisfaction and innovative
                problem-solving. My expertise in agile methodologies, cloud
                computing, and data-driven decision-making allows me to deliver
                solutions that not only meet but exceed customer expectations,
                driving impactful results.
              </p>
              <p className={clsx(styles.aboutLinks)}>
                <a
                  href="https://www.linkedin.com/in/jens-reiner/"
                  target="blank"
                >
                  <button>🔗 LinkedIn</button>
                </a>
                <a
                  href="https://github.com/wasdJens"
                  target="blank"
                >
                  <button>🐙 Github</button>
                </a>
              </p>
            </div>
          </section>
          <section className={clsx(styles.divider)}></section>
          <section className={clsx(styles.skills)}>
            <div className={clsx(styles.skillsColumn)}>
              <h3>✨ Passion for </h3>
              <ul className={clsx(styles.skillsList)}>
                <li>Requirements Engineering</li>
                <li>Engineering Culture</li>
                <li>Software Architecture</li>
                <li>Cloud Adoption</li>
                <li>Dev Ops</li>
                <li>Software Testing</li>
                <li>Teaching Software Engineering</li>
                <li>Javascript / Typescript</li>
              </ul>
            </div>
            <div className={clsx(styles.skillsColumn)}>
              <h3>📚 Experiences </h3>
              <ul className={clsx(styles.skillsList)}>
                <li>
                  PlanB. GmbH Solution Expert <span>since 2020</span>
                </li>
                <li>
                  Lecturer DHBW <span>since 2021</span>
                </li>
                <li>
                  Conclurer GmbH Software Developer <span>2018-2020</span>
                </li>
                <li>
                  Uni Ulm B.Sc Software Engineering <span>2015-2019</span>
                </li>
              </ul>
            </div>
          </section>
          <secion className={clsx(styles.resources)}>
            <h1>Take a look at my work</h1>
            <div className={clsx(styles.resurcesCardContainer)}>
              <div className={clsx(styles.resourcesCard)}>
                <Link to="/blog">
                  <h3> 📝 Personal Blog</h3>
                </Link>

                <p>
                  I try to write about things I learn and do. Sometimes its also
                  just some drafts which I could not yet define further into an
                  article
                </p>
              </div>
            </div>
            <div className={clsx(styles.resurcesCardContainer)}>
              <div className={clsx(styles.resourcesCard)}>
                <Link to="/docs/software-engineering/intro">
                  <h3> 🧰 Software Engineering Toolbox</h3>
                </Link>
                <p>
                  The software engineering toolbox is a project I have created
                  to share commonly used software engineering principles. It can
                  be used as a cookbook on how to create amazing software
                  products. Like in traditional craftmanship I want to provide a
                  toolbox where you as a software engineer can choose from to
                  achieve your goals and create wonderful new things.
                </p>
              </div>
            </div>
            <div className={clsx(styles.resurcesCardContainer)}>
              <div className={clsx(styles.resourcesCard)}>
                <a
                  href="https://github.com/wasdJens/dont-panic-web-edition"
                  target="blank"
                >
                  <h3> 👨‍🏫 Dont Panic: Web Edition</h3>
                </a>
                <p>
                  People often told me I am a good teacher about software
                  topics. But I often disliked how traditional teaching is done
                  by simply preseting slides and solution. Dont Panic: Web
                  Edition is my attempt to create a more interactive and
                  engaging way of teaching web development by letting you try to
                  create a software product yourself.
                </p>
                <p>
                  It is written using the Diataxis Framework and can either be
                  teached in a workshop setting or self-paced. I am currently
                  working on the second version where I want to improve the
                  basic Javascript section.
                </p>
              </div>
            </div>
          </secion>
        </div>
      </main>
    </Layout>
  );
}
