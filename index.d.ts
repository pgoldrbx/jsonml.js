// see: http://www.jsonml.org/syntax/

// export type AttributeValue = string | number | boolean | null;
export type AttributeValue = any;

export interface Attributes {
  [key: string]: AttributeValue;
}

type TagName = string;

export type TextNode = string;

type EmptyElement = [ TagName ];
type EmptyElementWithAttributes = [ TagName, Attributes ];
interface ElementWithChildren extends Array<TagName | Node> {
  0: TagName
}
interface ElementWithAttributesAndChildren extends Array<TagName | Attributes | Node> {
  0: TagName
  1: Attributes
}

export interface Element extends Array<TagName | Attributes | Node | undefined> {
  0: TagName;
  1?: Attributes | Element | string;
  2?: Element | string;
  3?: Element | string;
  4?: Element | string;
  5?: Element | string;
  6?: Element | string;
  7?: Element | string;
  8?: Element | string;
  9?: Element | string;
  // no additional type checking past position 9
}

export type Node = Element | TextNode

// Utils
export function isFragment(jml: Element): boolean;

export function getTagName(jml: Element): TagName;

export function isElement(value: any): boolean;

export function isAttributes(value: any): boolean;

export function hasAttributes(jml: Element): boolean;

export function getAttributes(jml: Element, addIfMissing?: boolean): Attributes;

export function addAttributes(jml: Element, attr: Attributes): void;

export function getAttribute(jml: Element, key: string): AttributeValue | void;

export function setAttribute(jml: Element, key: string, value: AttributeValue): void;

export function appendChild(jml: Element, child: Element): boolean;

export function getChildren(jml: Element): Node[];


// Initial, basic type definition in lieu of adding external packages
type DOMNode = {
  [key: string]: any,
  nodeType: number
};


// DOM
export type ElementFilter = (jml: Element, elem: DOMNode) => Element | null;

export function fromHTML(elem: DOMNode, filter?: ElementFilter): Element | null;

export function fromHTMLText(html: string, filter?: ElementFilter): Element | null;


// HTML
export class Markup {
  value: string
  toString(): string
}

export type HtmlElementFilter = (elem: DOMNode) => DOMNode

export type ErrorHandler = (err: Error, jml: Element, filter?: HtmlElementFilter) => any

export function raw(value: string): Markup;

export function isRaw(value: any): boolean;

export let onerror: null | ErrorHandler

export function patch(elem: DOMNode, jml: Element, filter?: HtmlElementFilter): DOMNode

export function toHTML(jml: string | Element, filter?: HtmlElementFilter): DOMNode

export function toHTMLText(jml: string | Element, filter?: HtmlElementFilter): string
