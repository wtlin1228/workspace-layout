import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

export const CodeBlock = (props: { codeString: string }) => {
  return (
    <div style={{ fontSize: "12px" }}>
      <SyntaxHighlighter language="typescript" style={theme}>
        {props.codeString.replace(/^\n/, "")}
      </SyntaxHighlighter>
    </div>
  );
};
