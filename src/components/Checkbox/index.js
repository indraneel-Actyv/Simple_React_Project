import React from 'react'
import 'bulma/css/bulma.min.css'
import enums from '../../enums'
import { truncateText, isEqualText } from '../utils'
import _ from 'lodash'

/**
 * @function CustomCheckboxInput
 * @description This is used to render Custom Checkbox Input component
 * @param {Object} props
 * @returns {Component}
 */
const CustomCheckboxInput = (props = {}) => {
  /**
   * The props sent to the component
   */
  const {
    label = enums.EMPTY,
    fieldName = enums.EMPTY,
    required = false,
    errorMessage = enums.EMPTY,
    visibility = true,
    isEditable = true,
    value = enums.EMPTY_ARRAY,
    options = enums.EMPTY_ARRAY,
    onChangeHandler = enums.EMPTY_FUNCTION
  } = props

  /**
   * @const renderRequiredAsterisk
   * @description This function is used to conditionally render asterisk symbol
   * @returns {Component}
   */
  const renderRequiredAsterisk = () => required ? <sup className='has-text-danger ml-1'>*</sup> : null

  /**
   * @const isChecked
   * @description This function is used to conditionally check if the key is checked or not in given value array
   * @param {String} key
   * @returns {Boolean}
   */
  const isChecked = (key = '') => _.isArray(value) && value.findIndex(eachValue => isEqualText(eachValue, key)) > -1

  /**
   * @const renderLabel
   * @description This function is used to render Label
   * @returns {Component}
   */
  const renderLabel = () => (
    <label className='columns label is-size-6'>
      {truncateText(label)}
      {renderRequiredAsterisk()}
    </label>)

  /**
   * @const renderCheckbox
   * @description This function is used to render text input
   * @returns {Component}
   */
  const renderCheckbox = () => (
    <div className='control columns is-vcentered is-multiline is-gapless'>
      {options.map((eachOption, index) => (
        <label className='column columns is-vcentered is-flex mb-0 is-half' key={index}>
          <input className='ml-0' name={eachOption.key} type={enums.CHECKBOX_TYPE} disabled={!isEditable} checked={isChecked(eachOption.key)} onChange={(e) => onChangeHandler(e, fieldName)} />
          <p className='has-text-black is-size-6 column'>{eachOption.label}</p>
        </label>
      ))}
    </div>
  )

  /**
   * @const renderLabelAndCheckbox
   * @description This function is used to render both Label and text input
   * @returns {Component}
   */
  const renderLabelAndCheckbox = () => (
    <div className='field'>
      {renderLabel()}
      {renderCheckbox()}
      <p className='help has-text-danger mb-5'>{errorMessage}</p>
    </div>
  )

  /**
   * Returning the whole component
   */
  return visibility ? renderLabelAndCheckbox() : null
}

export default CustomCheckboxInput
