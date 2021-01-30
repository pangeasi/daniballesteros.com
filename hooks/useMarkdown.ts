import { useEffect, useState } from "react"

const parseValue = (key, value) => {
    value = value.trim()
    switch (key) {
        case 'published':
            return value === 'true';
        case 'date':
            return new Date(value)
        default:
            return value;
    }
} 

const frontmatter = (data) => {
    let details = {}
    const d = data.match(/---\n(.|\n)+---/)[0]
    let fm = d.replace(/---/g, '')
    fm.split('\n').slice(1,6).forEach(l => {
        let key = l.split(':')[0]
        let value = l.split(':')[1]
        details[key] = parseValue(key, value);
    })
    return {content: data.replace(d, ''), frontmatter: details}
}

export const useMarkdown = () => {
    const [markdown, setMarkdown] = useState<{content: string, frontmatter: any}>()
    
    useEffect(() => {
        let isCancelled = false;
        fetch('/blog/como-implemetar-un-blog-con-markdown-y-nextjs.md')
        .then(res => res.text())
        .then(data => !isCancelled && setMarkdown(frontmatter(data)))
        return () => isCancelled = true;
    }, [])
    return markdown;
}