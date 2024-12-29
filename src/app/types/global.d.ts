declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export default classNames; // Используйте export default
}

declare module "*.jpeg";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
