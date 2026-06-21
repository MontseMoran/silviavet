import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import "../styles/cookies.scss";
import rehypeRaw from "rehype-raw";

function Privacy() {
  const { i18n } = useTranslation();
  const [content, setContent] = useState("");
  const lang = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);

  useEffect(() => {
    fetch(lang === "it" ? "/privacy-it.md" : "/privacy-es.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [lang]);

  return (
    <main className="cookies-page">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: (props) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}

export default Privacy;
