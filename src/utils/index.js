import enums from '../../enums'
import _ from 'lodash'

/**
 * @function truncateText This fn is used to truncate the text with given length
 * @param {String} text The text to be truncated
 * @param {Number} length The max length of the text
 * @returns {String}
 */
export const truncateText = (text = enums.EMPTY, length = enums.DEFAULT_TRUNCATE_LENGTH) => _.truncate(text, { length })

/**
 * @function isEqualText This fn is used to check if two texts are equal
 * @param {String} value1 The text to be compared to
 * @param {String} value2 The text to be compared with
 * @returns {Boolean}
 */
export const isEqualText = (value1 = enums.EMPTY, value2 = enums.EMPTY) => _.isEqual(value1, value2)
