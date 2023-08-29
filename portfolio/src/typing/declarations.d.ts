// To make sure it works with React TypeScript
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}