import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

/* In cade I forget to add the id when creating a Hero component. */
Hero.defaultProps = {
  hero: "defaultHero",
};
