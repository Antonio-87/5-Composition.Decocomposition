import { PropsWithChildren } from "react";

/**
 * @param {className} string
 * @param {title} string */

const Widget = ({
  className,
  title,
  children,
}: PropsWithChildren<{ className: string; title: string }>) => {
  /**Реализует новость с любыми дочерними элементами */
  return (
    <div className={className}>
      <a href="">{title}</a>
      {children}
    </div>
  );
};

export default Widget;
