import React from 'react'
import 'bulma/css/bulma.min.css'
import enums from '../../enums'
import { isEqualText, truncateText } from '../../utils'

/**
 * @function TextInput
 * @description This is used to render Text Input component
 * @param {Object} props
 * @returns {Component}
 */
const TextInput = (props = {}) => {
  /**
   * The props sent to the component
   */
  const {
    label = enums.EMPTY,
    inputType = enums.DEFAULT_TYPE,
    placeholder = enums.EMPTY,
    fieldName = enums.EMPTY,
    required = false,
    errorMessage = enums.EMPTY,
    units = enums.EMPTY,
    unitsPosition = enums.EMPTY,
    visibility = true,
    isEditable = true,
    value = enums.EMPTY,
    onChangeHandler = enums.EMPTY_FUNCTION
  } = props

  /**
   * @const renderRequiredAsterisk
   * @description This function is used to conditionally render asterisk symbol
   * @returns {Component}
   */
  const renderRequiredAsterisk = () => required ? <sup className='has-text-danger ml-1'>*</sup> : null

  /**
   * @const renderSideUnits
   * @description This function is used to conditionally render side Units
   * @returns {Component}
   */
  const renderSideUnits = (position = enums.LEFT) =>
    isEqualText(unitsPosition, position)
      ? (
        <p className='control'>
          <p className='button is-static'>{units}</p>
        </p>
        )
      : null

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
   * @const renderTextInput
   * @description This function is used to render text input
   * @returns {Component}
   */
  const renderTextInput = () => (
    <div className='field has-addons'>
      {renderSideUnits(enums.LEFT)}
      <p className='control is-expanded'>
        <input className='input is-normal' name={fieldName} type={inputType} placeholder={placeholder} disabled={!isEditable} value={value} onChange={onChangeHandler} />
      </p>
      {renderSideUnits(enums.RIGHT)}
    </div>
  )

  /**
   * @const renderLabelAndTextInput
   * @description This function is used to render both Label and text input
   * @returns {Component}
   */
  const renderLabelAndTextInput = () => (
    <div className='field'>
      {renderLabel()}
      {renderTextInput()}
      <p className='help has-text-danger mb-5'>{errorMessage}</p>
    </div>
  )

  /**
   * Returning the whole component
   */
  return visibility ? renderLabelAndTextInput() : null
}

export default TextInput
