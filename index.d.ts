export type AttributeValue = string | number | boolean | null;

export interface Attributes {
  [key: string]: AttributeValue;
}

type TagName = string;

interface ElementWithAttributes extends Array<TagName | Attributes | Element> {
  0: TagName;
  1: Attributes;
}

interface ElementWithoutAttributes extends Array<TagName | Element> {
  0: TagName;
}

// see: http://www.jsonml.org/syntax/
export type Element
  = ElementWithAttributes
  | ElementWithoutAttributes
  | string;

export type ElementList = Array<Element | ElementList> | Element

// Utils
export function isFragment(jml: Element): boolean;

export function getTagName(jml: Element): string;

export function isElement(value: any): boolean;

export function isAttributes(value: any): boolean;

export function hasAttributes(jml: Element): boolean;

export function getAttributes(jml: Element, addIfMissing?: boolean): Attributes;

export function addAttributes(jml: Element, attr: Attributes): void;

export function getAttribute(jml: Element, key: string): AttributeValue | void;

export function setAttribute(jml: Element, key: string, value: any): void;

export function appendChild(jml: Element, child: Element): boolean;

export function getChildren(jml: Element): ElementList;


// Initial, basic type definition in lieu of adding external packages
type DOMNode = {
  [key: string]: any,
  nodeType: number
};


// DOM
export type ElementFilterFunction = (jml: Element, elem: DOMNode) => Element | null;

export function fromHTML(elem: DOMNode, filter?: ElementFilterFunction): Element | null;

export function fromHTMLText(html: string, filter?: ElementFilterFunction): Element | null;


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
