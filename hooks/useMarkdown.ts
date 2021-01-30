import { useEffect, useState } from "react"
import { getMarkdown } from "../helpers/utils";
import { MarkdownDetails } from "../types/markdown.type";

export const useMarkdown = (slug) => {
    const [markdown, setMarkdown] = useState<{content: string, details: MarkdownDetails}>()
    useEffect(() => {
        let isCancelled = false;
        slug && fetch(`/blog/${slug}.md`)
        .then(res => res.text())
        .then(data => !isCancelled && setMarkdown(getMarkdown(data)))
        return () => isCancelled = true;
    }, [slug])
    return markdown;
}