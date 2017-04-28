import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      { "Website by "}
      <a
        href="https://www.syndia.nl"
        className={ styles.footerReferenceName }
        target="_blank"
        rel="nooper noreferrer"
      >
        <span className={ styles.footerReferenceName }>
          { "Syndia's Web Studio" }
        </span>
      </a>
      { ". Made with " }
      <span className={ styles.heart }>{ "♥" }</span>
      { " and " }
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.footerReference }
        target="_blank"
        rel="nooper noreferrer"
      >
        <span className={ styles.footerReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
