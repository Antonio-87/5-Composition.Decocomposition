/**@param {title} string */

import { PropsWithChildren } from "react";

const Main = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  /**Основной блок для реализации поиска и навигации по сайту */
  return <main className={title}>{children}</main>;
};

export default Main;
