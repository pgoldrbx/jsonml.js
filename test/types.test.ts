import {
  JsonMLAttributes,
  JsonMLChildren,
  utils,
} from '..';

// Utils
const isFragYes: boolean = utils.isFragment(['', 'hi']);
const isFragNo: boolean = utils.isFragment(['div', 'hi']);

const paraTag: string = utils.getTagName(['p', 'some text']);
const fragTag: string = utils.getTagName(['', 'some fragment text']);

const isElemYes: boolean = utils.isElement(['img', { href: 'https://example.com/foo.jpg' }]);
const isElemNo: boolean = utils.isElement({});

const isAttrsYes: boolean = utils.isAttributes({ foo: 'bar' });
const isAttrsNo: boolean = utils.isAttributes(['foo']);

const hasAttrsYes: boolean = utils.hasAttributes(['p', { foo: 'bar' }]);
const hasAttrsNo: boolean = utils.hasAttributes(['p']);

const gotAttrs: JsonMLAttributes = utils.getAttributes(['p', { foo: 'bar' }]);
const gotAddedAttrs: JsonMLAttributes = utils.getAttributes(['p'], true);
const gotEmptyAttrs: JsonMLAttributes = utils.getAttributes(['p'], false);

const addAttributesRetval: undefined = utils.addAttributes(['p'], { foo: 'bar', a: 1 });

const gotAttr: string = utils.getAttribute(['p', { foo: 'bar' }], 'foo');
const gotNoAttr: undefined = utils.getAttribute(['p', { foo: 'bar' }], 'this-does-not-exist');

const setAttributeRetval: undefined = utils.setAttribute(['p'], 'foo', 'bar');

const childWasAppended: boolean = utils.appendChild(['p', { foo: 'bar'}], ['strong', 'Hello World']);

const gotChildren: JsonMLChildren = utils.getChildren(['div', ['p', 'one'], ['p', 'two']]);
