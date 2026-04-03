import { MarkdownDetails } from "../types/markdown.type";

const parseValue = (key: string, value: string) => {
  const normalizedValue = value.trim();

  switch (key) {
    case "published":
      return normalizedValue === "true";
    case "date":
      return new Date(normalizedValue);
    case "tags":
      return normalizedValue.split(",");
    default:
      return normalizedValue;
  }
};

export const getMarkdown = (data: string) => {
  const details: MarkdownDetails = {};
  let content = data;

  const detailsFounded = data.match(/---([^---]+)---/)?.[0];

  if (!detailsFounded) {
    return { content, details };
  }

  detailsFounded
    .split('\n')
    .slice(1, -1)
    .forEach((line) => {
      const [rawKey, rawValue = ""] = line.split(":");
      const key = rawKey as keyof MarkdownDetails;

      details[key] = parseValue(rawKey, rawValue) as never;
    });

  content = data.replace(detailsFounded, "");

  return { content, details };
};
