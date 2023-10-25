/**@param {className} string */

import { PropsWithChildren } from "react";

const Sidebar = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => {
  return <aside className={className}>{children}</aside>;
};

export default Sidebar;
