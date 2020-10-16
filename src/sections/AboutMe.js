import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styles from "./Meta.module.css";


const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <section id="about-me">

      <div className="grid lg:grid-cols-6 gap-12 items-center h-full">
        <div className={"h-full w-full text-justify lg:col-span-3 wow fadeIn"}>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
        <div className={`h-full w-full lg:col-span-3 mx-auto wow fadeInRight flex items-center ${styles.polygon}`}>
          <img
            className="ml-auto w-11/12"
            src="/images/about-me/aboutme.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
