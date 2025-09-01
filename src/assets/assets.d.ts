declare module "*.svg" {
    const src: string;        // the bundler will give you a URL string
    export default src;
  }
  
  declare module "*.png" {
    const src: string;
    export default src;
  }
  
  declare module "*.jpg" {
    const src: string;
    export default src;
  }