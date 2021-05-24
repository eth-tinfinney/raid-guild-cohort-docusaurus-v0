import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Header from "../components/Header";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <Header title={siteConfig.title} tagline={siteConfig.tagline}>
        <div className={styles.buttons}>
          <Link
            // className='button button--secondary button--lg'
            className={clsx("button button--lg", styles.buttonRgCTA)}
            to='/docs/intro'
          >
            Onboarding a New Member into the DAO - 5min ⏱️
          </Link>
        </div>
      </Header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
