"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "RainDrop3/OdiMedi");
    script.setAttribute("data-repo-id", "R_kgDOQdzhzw");
    script.setAttribute("data-category", "comment");
    script.setAttribute("data-category-id", "DIC_kwDOQdzhz84C0DrI");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ko");

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="w-full mt-10">
      <div ref={ref} />
    </div>
  );
}
