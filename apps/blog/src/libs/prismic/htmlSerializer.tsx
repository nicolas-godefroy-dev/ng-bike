import { PrismicRichTextProps } from "@prismicio/react"
import Image from "next/image"

type HtmlSerializer = PrismicRichTextProps["components"]

export const htmlSerializer: HtmlSerializer = {
  heading1: ({ text }) => <h1>{text}</h1>,
  heading2: ({ text }) => <h2>{text}</h2>,
  heading3: ({ text }) => <h3>{text}</h3>,
  heading4: ({ text }) => <h4>{text}</h4>,
  heading5: ({ text }) => <h5>{text}</h5>,
  heading6: ({ text }) => <h6>{text}</h6>,
  paragraph: ({ text }) => <p>{text}</p>,
  preformatted: ({ node }) => <pre>{JSON.stringify(node.text)}</pre>,
  strong: ({ text }) => <strong>{text}</strong>,
  em: ({ text }) => <em>{text}</em>,
  listItem: ({ text }) => <li>{text}</li>,
  oListItem: ({ text }) => <li>{text}</li>,
  list: ({ text }) => <ul>{text}</ul>,
  oList: ({ text }) => <ol>{text}</ol>,
  label: ({ text }) => <span>{text}</span>,
  span: ({ text }) => <span>{text}</span>,
  image: ({ node }) => (
    <p>
      <Image src={node.url} alt={node.alt ?? ""} unoptimized />
    </p>
  ),
  hyperlink: ({ node, text }) => (<a href={node.data.url} className="link link-primary">{text}</a>),
}
