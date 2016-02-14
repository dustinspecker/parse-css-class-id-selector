# parse-css-class-id-selector
[![NPM version](https://badge.fury.io/js/parse-css-class-id-selector.svg)](https://badge.fury.io/js/parse-css-class-id-selector) [![Build Status](https://travis-ci.org/dustinspecker/parse-css-class-id-selector.svg)](https://travis-ci.org/dustinspecker/parse-css-class-id-selector) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/parse-css-class-id-selector.svg)](https://coveralls.io/r/dustinspecker/parse-css-class-id-selector?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/parse-css-class-id-selector/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/parse-css-class-id-selector) [![Dependencies](https://david-dm.org/dustinspecker/parse-css-class-id-selector.svg)](https://david-dm.org/dustinspecker/parse-css-class-id-selector/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/parse-css-class-id-selector/dev-status.svg)](https://david-dm.org/dustinspecker/parse-css-class-id-selector/#info=devDependencies&view=table)

> Retreive class names and id from a CSS selector

## Install
```
npm install --save parse-css-class-id-selector
```

## Usage
```javascript
import parseCssClassIdSelector from 'parse-css-class-id-selector'

parseCssClassIdSelector('.hello#world.good-bye')
// => {id: 'world', classNames: ['hello', 'good-bye']}

parseCssClassIdSelector('#world')
// => {id: 'world', classNames: []}

parseCssClassIdSelector('.hello.good-bye')
// => {id: null, classNames: ['hello', 'good-bye']}
```

## API
### parseCssClassIdSelector(selector)
Returns an object with a `classNames` array and an `id`. An empty array is return if no class names found. Null is return if no id is found.
#### selector
type: `String`

A string consisting of only class and/or id selectors.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
