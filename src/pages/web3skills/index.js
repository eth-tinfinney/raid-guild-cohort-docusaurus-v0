import React from "react";
import Layout from "@theme/Layout";
import ApprenticeGrid from "../../components/ApprenticeGrid";

function Web3Skills() {
  return (
    <Layout title='Web3 Skills'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          RaidGuild Season 1 Web3 Skills
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "colunn",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </Layout>
  );
}

export default Web3Skills;
