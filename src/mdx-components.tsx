import type { MDXComponents } from "mdx/types";

const useMDXComponents = (components: MDXComponents) => {
  return { ...components };
};

export default useMDXComponents;
