/**@param {className} string */

import { PropsWithChildren } from "react";

const Sidebar = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => {
  /**Реализует боковую панель с любыми дочерними компонентами */
  return <aside className={className}>{children}</aside>;
};

export default Sidebar;
