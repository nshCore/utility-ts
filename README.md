# utility-ts

A collection of helpful utilities for Typescript projects.

## Utilities

### Buffer Helper

Converts various types of arrays, strings and numbers to a buffer.

```js
    const stringBuffer = await BufferHelper.toBuffer('Hello World');
```

### Clone Helpers

An extremely fast function for deep-cloning an object which only contains simple values, i.e. primitives, arrays and nested simple objects.

```js
const foo = {
 prop1: 'hello',
 prop2: 'world',
}

const bar = CloneHelper.simpleDeepClone(foo);

console.assert(foo === bar);
```

### Common Helpers

A collection of general use guards such as.

* isObject
* isClassInstance
* notNullOrUndefined
* assertNever

### Generic Helper

Provides a .NetCore style Activator to instantiate generic types at runtime.

### Iterator Helpers

Methods to repeat functions multiple times.

### Map Helper

FastFlatMap provides same result as FlatMap in the es2019 standard but 40% quicker.

```js

const obj = {
 boringProp: 123,
 goodProp: 'abc',
 nestedProp: {
   boringProp: 456,
   goodProb: 'def'
 }
}

MapHelper.FastFlatMap(obj, 'goodProp');
```

this will result in 

```js

const result = [
 {
   goodProp: 'abc',
 },
 {
   goodProp: 'def',
 }
]
```

### Number helper

Assortment of number formatting functions.

### Object helper

Assortment of object functions for merging, flattening, serialising, sorting.

### Observable helper

Helper to convert observables to promises.

### String helper

Assortment of object functions for merging, flattening, serialising, sorting.

### Typed Array helper

Assortment of helpers to detect types of TypedArrays as well as converting them to buffers
