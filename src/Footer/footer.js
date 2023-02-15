import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <p className={style.name}>Miks Silis:</p>
      <a
        href="https://www.linkedin.com/in/miks-silis"
        target="_blank"
        rel="noreferrer"
        className={style.link}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/msilis"
        target="_blank"
        rel="noreferrer"
        className={style.link}
      >
        Github
      </a>
    </div>
  );
}
