import { ReactNode } from "react";

// ----------------------------------------------------------------------

interface HighlightProps {
  query?: string | string[];
  children?: ReactNode;
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function Highlight({ query, children }: HighlightProps) {
  if (!query || !children || typeof children !== "string") {
    return <>{children}</>;
  }

  const queries = (Array.isArray(query) ? query : [query]).filter(Boolean);
  if (!queries.length) return <>{children}</>;

  const regex = new RegExp(`(${queries.map(escapeRegex).join("|")})`, "gi");
  const parts = children.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-warning/30 text-inherit">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
