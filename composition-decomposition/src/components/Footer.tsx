/**@param {title} string */

import { PropsWithChildren } from "react";

const Footer = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  /**Блок для второстепенных новостей в нижней части страницы */
  return <footer className={title}>{children}</footer>;
};

export default Footer;
