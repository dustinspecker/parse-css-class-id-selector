'use strict'
import test from 'ava'

import parseCssClassIdSelector from '../lib/'

test('it should throw TypeError if selector is not a string', t => {
  t.throws(parseCssClassIdSelector, TypeError)
  t.throws(parseCssClassIdSelector, /Expected selector to be a string/)
})

test('it should throw Error if selector does not start with a . or #', t => {
  const selectorTest = () => parseCssClassIdSelector('asdfsdf')

  t.throws(selectorTest, Error)
  t.throws(selectorTest, /Expected selector to start with a `.` or `#`/)
})

test('it should throw Error if more than one id is found', t => {
  const selectorTest = () => parseCssClassIdSelector('#hello#bye')

  t.throws(selectorTest, Error)
  t.throws(selectorTest, /Expected a maximum of one id in selector/)
})

test('it should return an object with array of class names', t => {
  const hello = parseCssClassIdSelector('.hello')
  const helloGoodBye = parseCssClassIdSelector('.hello.good-bye')

  t.same(hello.classNames, ['hello'])
  t.same(helloGoodBye.classNames, ['hello', 'good-bye'])
})

test('it should return an object with an id', t => {
  const hello = parseCssClassIdSelector('#hello')
  const noId = parseCssClassIdSelector('.hello')

  t.is(hello.id, 'hello')
  t.is(noId.id, null)
})

test('it should handle mix of id and classes', t => {
  const both = parseCssClassIdSelector('.hello#hi-world.good-bye')

  t.is(both.id, 'hi-world')
  t.same(both.classNames, ['hello', 'good-bye'])
})
