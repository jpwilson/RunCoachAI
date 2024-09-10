import React from "react";

export const Avatar: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <div {...props} />;
};

export const AvatarImage: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = (props) => {
  return <img {...props} />;
};

export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return <div {...props} />;
};
