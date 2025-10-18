import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/cookies.scss";
import rehypeRaw from "rehype-raw";


function Cookies() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/cookies.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <main className="cookies-page">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]} 
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
export default Cookies;
