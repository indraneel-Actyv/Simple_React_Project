import React from 'react'
import 'bulma/css/bulma.min.css'
import enums from '../../enums'
import { truncateText, isEqualText } from '../utils'

/**
 * @function CustomRadioInput
 * @description This is used to render Custom Radio Input component
 * @param {Object} props
 * @returns {Component}
 */
const CustomRadioInput = (props = {}) => {
  /**
   * The props sent to the component
   */
  const { label = enums.EMPTY, fieldName = enums.EMPTY, required = false, errorMessage = enums.EMPTY, visibility = true, isEditable = true, value = enums.EMPTY, options = enums.EMPTY_ARRAY, onChangeHandler = enums.EMPTY_FUNCTION } = props

  /**
   * @const renderRequiredAsterisk
   * @description This function is used to conditionally render asterisk symbol
   * @returns {Component}
   */
  const renderRequiredAsterisk = () => (required ? <sup className='has-text-danger ml-1'>*</sup> : null)

  /**
   * @const isChecked
   * @description This function is used to conditionally check if the key is checked or not in given value string
   * @param {String} key
   * @returns {Boolean}
   */
  const isChecked = (key = '') => isEqualText(value, key)

  /**
   * @const renderLabel
   * @description This function is used to render Label
   * @returns {Component}
   */
  const renderLabel = () => (
    <label className='columns label is-size-6'>
      {truncateText(label)}
      {renderRequiredAsterisk()}
    </label>
  )

  /**
   * @const renderRadio
   * @description This function is used to render radio
   * @returns {Component}
   */
  const renderRadio = () => (
    <div className='control columns is-vcentered is-multiline is-gapless'>
      {options.map((eachOption, index) => (
        <label className='column columns is-vcentered is-flex mb-0 is-half' key={index}>
          <input className='ml-0' name={fieldName} value={eachOption.key} type={enums.RADIO_TYPE} disabled={!isEditable} checked={isChecked(eachOption.key)} onChange={onChangeHandler} />
          <p className='has-text-black is-size-6 column'>{eachOption.label}</p>
        </label>
      ))}
    </div>
  )

  /**
   * @const renderLabelAndRadio
   * @description This function is used to render both Label and radio
   * @returns {Component}
   */
  const renderLabelAndRadio = () => (
    <div className='field'>
      {renderLabel()}
      {renderRadio()}
      <p className='help has-text-danger mb-5'>{errorMessage}</p>
    </div>
  )

  /**
   * Returning the whole component
   */
  return visibility ? renderLabelAndRadio() : null
}

export default CustomRadioInput
