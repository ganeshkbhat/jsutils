/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/numpyjs.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var { extendArray } = require("./array");
extendArray()

function NumericalArray() {
    // numpy.int32, numpy.int16, and numpy.float64
    var dtype

    // total elements of array
    var ndim

    // dimensions of array
    var shape

    // number of axes (dimensions) of array
    var size

    // size in bytes of each element of the array
    var itemsize

    // actual elements of array
    var data


}

/**

Array Creation: arange, array, copy, empty, empty_like, eye, fromfile, fromfunction, identity, 
Array Creation: linspace, logspace, mgrid, ogrid, ones, ones_like, r_, zeros, zeros_like

Conversions: ndarray.astype, atleast_1d, atleast_2d, atleast_3d, mat

Manipulations: array_split, column_stack, concatenate, diagonal, dsplit, vsplit, hsplit, ndarray.item, newaxis, 
Manipulations: ravel, repeat, reshape, resize, squeeze, swapaxes, take, transpose, dstack, hstack, vstack

Questions: all, any, nonzero, where

Ordering: argmax, argmin, argsort, max, min, ptp, searchsorted, sort

Operations: choose, compress, cumprod, cumsum, inner, ndarray.fill, imag, prod, put, putmask, real, sum

Basic Statistics: cov, mean, std, var, Basic Linear Algebra, cross, dot, outer, linalg.svd, vdot

*/


// Array Getters
// a[-1] > a.get(-1), a[0:10] > a.get(0, 10), a[0:] > a.get(0, undefined|null), 
// a[-1] > a.get("-1"), a[0:10] > a.get("0:10"), a[0:] > a.get("0:"), 

// a[:10] > a.get(undefined|null, 10), a[:] > a.get(undefined|null, undefined|null)
// a[:10] > a.get(":10"), a[:] > a.get(":")
Object.defineProperty(NumericalArray.prototype, 'get', { value: get, enumerable: true });

// Array Setters
// a[-1] > a.set(value, -1), a[0:10] > a.set(value, 0, 10), a[0:] > a.set(value, 0, undefined|null), 
// a[-1] > a.set(value, "-1"), a[0:10] > a.set(value, "0:10"), a[0:] > a.set(value, "0:"), 

// a[:10] > a.set(value, undefined|null, 10), a[:] > a.set(value, undefined|null, undefined|null)
// a[:10] > a.set(value, ":10"), a[:] > a.set(value, ":")
Object.defineProperty(NumericalArray.prototype, 'set', { value: set, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'shape', { value: shape, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'dtype', { value: dtype, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ndim', { value: ndim, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'size', { value: size, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'flat', { value: flat, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'id', { value: id, enumerable: true });

// c.base is a # c is a view of the data owned by a
Object.defineProperty(NumericalArray.prototype, 'base', { value: base, enumerable: true });
// c.flags.owndata
Object.defineProperty(NumericalArray.prototype, 'flags', { value: flags, enumerable: true });

/**

Array Creation: arange, array, copy, empty, empty_like, eye, fromfile, fromfunction, identity, 
Array Creation: linspace, logspace, mgrid, ogrid, ones, ones_like, r_, zeros, zeros_like

*/

Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'arrange', { value: arrange, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'copy', { value: copy, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'empty', { value: empty, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'empty_like', { value: empty_like, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'zeros', { value: zeros, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'zeros_like', { value: zeros_like, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ones', { value: ones, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ones_like', { value: ones_like, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'random', { value: random, enumerable: true });

Object.defineProperty(NumericalArray.prototype, 'linspace', { value: linspace, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'logspace', { value: logspace, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'mgrid', { value: mgrid, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ogrid', { value: ogrid, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'reshape', { value: reshape, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'ravel', { value: ravel, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'repeat', { value: repeat, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'resize', { value: resize, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'flatten', { value: flatten, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'c_', { value: c_, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'r_', { value: r_, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'column_stack', { value: column_stack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'row_stack', { value: row_stack, enumerable: true });

Object.defineProperty(NumericalArray.prototype, 'eye', { value: eye, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'fromfile', { value: fromfile, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'fromfunction', { value: fromfunction, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'identity', { value: identity, enumerable: true });

/**

Manipulations: array_split, column_stack, concatenate, diagonal, dsplit, vsplit, hsplit, ndarray.item, newaxis, 
Manipulations: ravel, repeat, reshape, resize, squeeze, swapaxes, take, transpose, dstack, hstack, vstack

*/

Object.defineProperty(NumericalArray.prototype, 'array_split', { value: array_split, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'concatenate', { value: concatenate, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'diagonal', { value: diagonal, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'newaxis', { value: newaxis, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'dstack', { value: dstack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'hstack', { value: hstack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'vstack', { value: vstack, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'dsplit', { value: dsplit, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'hsplit', { value: hsplit, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'vsplit', { value: vsplit, enumerable: true });


/**

Questions: all, any, nonzero, where
Ordering: argmax, argmin, argsort, max, min, ptp, searchsorted, sort

*/

/**

Operations: choose, compress, cumprod, cumsum, inner, ndarray.fill, imag, prod, put, putmask, real, sum
Basic Statistics: cov, mean, std, var, Basic Linear Algebra, cross, dot, outer, linalg.svd, vdot

*/

Object.defineProperty(NumericalArray.prototype, 'min', { value: min, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'max', { value: max, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'sum', { value: sum, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'cumsum', { value: cumsum, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'add', { value: add, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'subtract', { value: subtract, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'multiply', { value: multiply, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'factorial', { value: factorial, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'divide', { value: divide, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'floor', { value: floor, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'round', { value: round, enumerable: true });

Object.defineProperty(NumericalArray.prototype, 'sin', { value: sin, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'exp', { value: exp, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'sqrt', { value: sqrt, enumerable: true });
Object.defineProperty(NumericalArray.prototype, 'square', { value: square, enumerable: true });

// Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });
// Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });
// Object.defineProperty(NumericalArray.prototype, 'array', { value: array, enumerable: true });

module.exports.NumArray = NumericalArray;
// module.exports.Numjs = NumericalArray;
// module.exports.Numpy = NumericalArray;
module.exports.NumericalArray = NumericalArray;
