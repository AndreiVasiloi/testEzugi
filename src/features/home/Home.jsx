import React from "react";
import "../../css/_home.scss";

export default function Home() {
  return (
    <section className="home">
      <h1 className="home__header">
        <span className="home__header-char">N</span>
        <span className="home__header-char">i</span>
        <span className="home__header-char">c</span>
        <span className="home__header-char">e</span>
        <span className="home__header-char">&nbsp;</span>
        <span className="home__header-char">C</span>
        <span className="home__header-char">a</span>
        <span className="home__header-char">t</span>
        <span className="home__header-char">&nbsp;</span>
        <span className="home__header-char">V</span>
        <span className="home__header-char">i</span>
        <span className="home__header-char">d</span>
        <span className="home__header-char">e</span>
        <span className="home__header-char">o</span>
        <span className="home__header-char">s</span>
      </h1>
      <a href="#videos" className="home__btn">
        have a look
      </a>
    </section>
  );
}
