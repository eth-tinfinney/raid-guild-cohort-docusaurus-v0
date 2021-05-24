import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Header from "../components/Header";

export default function ApprenticeshipPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Raid Guild ${siteConfig.title} Apprenticeships`}
      description='Raid Guild apprenticeships in Season 1'
    >
      <Header title={siteConfig.title} tagline='Apprenticeships'></Header>
      <main>
      RaidGuild is a premier design and development agency of the Web3 ecosystem. Entrenched in decentralized autonomous organizations (DAOs), finance (DeFi), software applications (dApps). The Season 1 team consists of a diverse group of talented individuals with a wide ranges of skills and experience.
      </main>
    </Layout>
  );
}
