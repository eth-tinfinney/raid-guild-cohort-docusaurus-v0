import React from "react";
import Layout from "@theme/Layout";
import ApprenticeGrid from "../../components/ApprenticeGrid";

function Projects() {
  return (
    <Layout title='Projects'>
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
          RaidGuild Season 1 Projects
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

export default Projects;
