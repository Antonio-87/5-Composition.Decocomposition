/**
 * @param {className} string
 */

import { PropsWithChildren } from "react";

const Header = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  /**Реализует список заголовков или новостей в шапке страницы */
  return <header className={title}>{children}</header>;
};

export default Header;
