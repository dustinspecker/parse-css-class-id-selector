'use strict'

/**
 * Retrieve class names and id from a CSS selector
 * @param {String} selector - the selector to parse
 * @throws {TypeError} - if selector is not a string
 * @throws {Error} - if selector does not contain valid class names and id
 * @returns {Object} - contains class names and id
 *   {String|NULL} id
 *   {String[]} classNames
 */
module.exports = selector => {
  if (typeof selector !== 'string') {
    throw new TypeError('Expected selector to be a string.')
  }

  if (selector[0] !== '.' && selector[0] !== '#') {
    throw new Error('Expected selector to start with a `.` or `#`')
  }

  const firstId = selector.indexOf('#')
  const lastId = selector.lastIndexOf('#')
  if (firstId !== -1 && firstId !== lastId) {
    throw new Error('Expected a maximum of one id in selector')
  }

  let classNames = []
    , id = null
  if (firstId !== -1) {
    id = selector.match(/#[^.]*/)[0].slice(1)
    classNames = selector.replace(`#${id}`, '').split('.')
  } else {
    classNames = selector.split('.')
  }

  // remove first element because it is an empty string
  classNames.shift()

  return {
    classNames,
    id
  }
}
