import type { PortableTextBlock } from "sanity";

export function toPlainText(blocks: PortableTextBlock[]) {
  return (
    blocks.map((block) => {
      if (block._type !== 'block' || !block.children) return ''
      return (block.children as {text: string}[]).map((child) => child.text).join('')
    }).join('\n\n')
  )
}
