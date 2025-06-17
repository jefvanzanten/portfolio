import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Navigate, useParams } from "react-router";
import styles from "./ProjectPage.module.css";

type Frontmatter = { title?: string; date?: string };
type Content = { frontmatter: Frontmatter; markdown: string };

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<Content | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`/content/${slug}.md`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Not Found");
        const raw = await res.text();
        const match = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
        if (match) {
          const fmLines = match[1].split("\n");
          const fm: any = {};
          fmLines.forEach((line) => {
            const [key, ...rest] = line.split(":");
            fm[key.trim()] = rest
              .join(":")
              .trim()
              .replace(/^"(.*)"$/, "$1");
          });
          setContent({ frontmatter: fm, markdown: match[2] });
        } else {
          setContent({ frontmatter: {}, markdown: raw });
        }
      })
      .catch(() => setError("Project niet gevonden"));
  }, [slug]);

  if (error) return <Navigate to="/" replace />;
  if (!content) return <p>Laden…</p>;

  return (
    <article className={styles["markdown-body"]}>
      {content.frontmatter.title && <h1>{content.frontmatter.title}</h1>}
      {content.frontmatter.date && (
        <time dateTime={content.frontmatter.date}>
          {content.frontmatter.date}
        </time>
      )}
      <ReactMarkdown>{content.markdown}</ReactMarkdown>
    </article>
  );
}
