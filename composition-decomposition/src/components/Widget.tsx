import { PropsWithChildren } from "react";

/**
 * @param {className} string
 * @param {title} string
 * @param {srcImage?} string */

const Widget = ({
  className,
  title,
  srcImage,
  source,
  date,
  children,
}: PropsWithChildren<{
  className: string;
  title: string;
  srcImage?: string;
  source?: string;
  date?: string;
}>) => {
  /**Реализует новость с любыми дочерними элементами */
  return (
    <div className={className}>
      {srcImage ? <img src={srcImage}></img> : srcImage}
      {date ? <time className="time">{date}</time> : date}
      <a href="">{title}</a>
      {children}
      {source ? <p className="source">{source}</p> : source}
    </div>
  );
};

export default Widget;
