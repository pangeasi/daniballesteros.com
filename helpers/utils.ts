import { MarkdownDetails } from "../types/markdown.type";

const parseValue = (key: string, value: string) => {
    value = value.trim()
    switch (key) {
        case 'published':
            return value === 'true';
        case 'date':
            return new Date(value)
        case 'tags':
            return value.split(',')
        default:
            return value;
    }
} 

export const getMarkdown = (data) => {
    let details: MarkdownDetails = {};
    let content: string;

    const detailsFounded = data.match(/---([^---]+)---/)[0]
    detailsFounded
    .split('\n')
    .slice(1, -1)
    .forEach(l => {
        let key = l.split(':')[0]
        let value = l.split(':')[1]
        details[key] = parseValue(key, value);
    })
    content = data.replace(detailsFounded, '')
    
    return {content, details}
}