type Block = {
  _type: string,
  children: Child[]
}

type Child = {
  _type: string,
  text: string
}

export function blockToText(blocks: Block[] | undefined): string {
  const block = (blocks || []).find((block: Block) => block._type === 'block');
  return block ? 
    block.children.filter((child: Child) => child._type === "span").map(span => span.text).join('')
    : '';
}