// JsonML
// see: http://www.jsonml.org/syntax/
//
// `Node` type imported from lib.dom
//
/// <reference lib="dom"/>

// export type AttributeValue = string | number | boolean | null;
export type AttributeValue = any;

export interface Attributes {
  [key: string]: AttributeValue;
}

type TagName = string;

type TextNode = string;

type EmptyElement = [ TagName ];
type EmptyElementWithAttributes = [ TagName, Attributes ];
interface ElementWithChildren extends Array<TagName | JSONMLNode> {
  0: TagName
}
interface ElementWithAttributesAndChildren extends Array<TagName | Attributes | JSONMLNode> {
  0: TagName
  1: Attributes
}

export interface JSONMLElement extends Array<TagName | Attributes | JSONMLNode | undefined> {
  0: TagName;
  1?: Attributes | JSONMLNode;
  2?: JSONMLNode
  3?: JSONMLNode;
  4?: JSONMLNode;
  5?: JSONMLNode;
  6?: JSONMLNode;
  7?: JSONMLNode;
  8?: JSONMLNode;
  9?: JSONMLNode;
  // no additional type checking past position 9
}

export type JSONMLNode = JSONMLElement | TextNode


// Utils
export function isFragment(jml: JSONMLElement): boolean;

export function getTagName(jml: JSONMLElement): TagName;

export function isElement(value: any): boolean;

export function isAttributes(value: any): boolean;

export function hasAttributes(jml: JSONMLElement): boolean;

export function getAttributes(jml: JSONMLElement, addIfMissing?: boolean): Attributes;

export function addAttributes(jml: JSONMLElement, attr: Attributes): void;

export function getAttribute(jml: JSONMLElement, key: string): AttributeValue | void;

export function setAttribute(jml: JSONMLElement, key: string, value: AttributeValue): void;

export function appendChild(jml: JSONMLElement, child: JSONMLElement): boolean;

export function getChildren(jml: JSONMLElement): JSONMLNode[];


// DOM
export type JSONMLElementFilter = (jml: JSONMLElement, elem: JSONMLNode) => JSONMLElement | null;

export function fromHTML(elem: Node, filter?: JSONMLElementFilter): JSONMLElement | null;

export function fromHTMLText(html: string, filter?: JSONMLElementFilter): JSONMLElement | null;


// HTML
export class Markup {
  value: string
  toString(): string
}

export type HTMLElementFilter = (elem: Node) => Node

export type ErrorHandler = (err: Error, jml: JSONMLElement, filter?: HTMLElementFilter) => any

export function raw(value: string): Markup;

export function isRaw(value: any): boolean;

export let onerror: null | ErrorHandler

export function patch(elem: Node, jml: JSONMLElement, filter?: HTMLElementFilter): Node

export function toHTML(jml: string | JSONMLElement, filter?: HTMLElementFilter): Node

export function toHTMLText(jml: string | JSONMLElement, filter?: HTMLElementFilter): string
