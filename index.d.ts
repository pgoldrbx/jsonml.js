export interface JsonMLAttributes {
  [key: string]: any // @TODO - can this be anything but a string? it technically SHOULD be,
      // but I'm not sure if we want to be that strict. maybe it should be primitives at least?
      // or maybe we just leave it alone?
}

export type JsonMLChildNode = string | JsonMLNode;

export type JsonMLChildren = Array<JsonMLChildNode>;

export interface JsonMLNode extends Array<string | JsonMLAttributes | JsonMLChildNode> {
  0: string;
}

export namespace utils {
  export function isFragment(jml: JsonMLNode): boolean;

  export function getTagName(jml: JsonMLNode): string;

  export function isElement(value: any): boolean;

  export function isAttributes(value: any): boolean;

  export function hasAttributes(jml: JsonMLNode): boolean;

  export function getAttributes(jml: JsonMLNode, addIfMissing?: boolean): JsonMLAttributes;

  export function addAttributes(jml: JsonMLNode, attr: JsonMLAttributes): undefined;

  export function getAttribute(jml: JsonMLNode, key: string): any;

  export function setAttribute(jml: JsonMLNode, key: string, value: any): undefined;

  export function appendChild(jml: JsonMLNode, child: JsonMLChildNode): boolean;

  export function getChildren(jml: JsonMLNode): JsonMLChildren;
}


// Initial, basic type definition in lieu of adding external packages
type DOMNode = {
  [key: string]: any,
  nodeType: number
};


export namespace dom {
  export type ElementFilterFunction = (jml: JsonMLNode, elem: DOMNode) => JsonMLNode | null;

  export function fromHTML(elem: DOMNode, filter?: ElementFilterFunction): JsonMLNode | null;

  export function fromHTMLText(html: string, filter?: ElementFilterFunction): JsonMLNode | null;
}


export namespace html {
  export class Markup {
    value: string
    toString(): string
  }

  export type HtmlElementFilter = (elem: DOMNode) => DOMNode

  export type ErrorHandler = (err: Error, jml: JsonMLNode, filter?: HtmlElementFilter) => any

  export function raw(value: string): Markup;

  export function isRaw(value: any): boolean;

  export let onerror: null | ErrorHandler

  export function patch(elem: DOMNode, jml: JsonMLNode, filter?: HtmlElementFilter): DOMNode

  export function toHTML(jml: string | JsonMLNode, filter?: HtmlElementFilter): DOMNode

  export function toHTMLText(jml: string | JsonMLNode, filter?: HtmlElementFilter): string
}
