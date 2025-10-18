import ReactMarkdown from "react-markdown";
import "../styles/cookies.scss";
import remarkGfm from "remark-gfm";

import { useEffect, useState } from "react";

function Cookies() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/cookies.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <>
      <main className="cookies-page">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </main>
    </>
  );
}

export default Cookies;
