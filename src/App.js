import { useState } from 'react'
import './App.css'
import CustomCheckbox from './components/Checkbox'
import CustomRadio from './components/Radio'
import TextInput from './components/TextInput'

function App () {
  const [text, setText] = useState('')
  const [checkboxInput, setCheckboxInput] = useState([])
  const [radioInput, setRadioInput] = useState('')

  const onChangeHandler = (e) => {
    const { value } = e.target
    setText(value)
  }

  const onChangeCheckboxHandler = (e) => {
    const { name } = e.target
    const foundIndex = checkboxInput.findIndex(each => each === name)
    const previous = [...checkboxInput]
    if (foundIndex > -1) {
      previous.splice(foundIndex, 1)
    } else {
      previous.push(name)
    }
    setCheckboxInput(previous)
  }

  const onChangeRadioHandler = (e) => {
    const { value } = e.target
    setRadioInput(value)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='form-container'>
          <TextInput label='Label1' fieldName='label1' required placeholder='Enter text' unitsPosition='RIGHT' units='Kgs' value={text} onChangeHandler={onChangeHandler} />
          <TextInput label='Label2' fieldName='label2' placeholder='Enter text' unitsPosition='LEFT' units='$' />
          <TextInput label='Label3' placeholder='Enter Text' />
          <TextInput label='Short Label' required isEditable={false} />
          <TextInput label='LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG Label' required />
          <TextInput label='Label number 123' required visibility={false} />
          <TextInput label='Last Label' required inputType='email' />
          <CustomCheckbox label='Checkbox Label' fieldName='checkbox1' required options={[{ label: 'option 1', key: 'option1' }, { label: 'option 2', key: 'option2' }, { label: 'option 3', key: 'option3' }]} onChangeHandler={onChangeCheckboxHandler} value={checkboxInput} />
          <CustomRadio label='Radio Label' fieldName='radio1' required options={[{ label: 'option 1', key: 'option1' }, { label: 'option 2', key: 'option2' }, { label: 'option 3', key: 'option3' }]} onChangeHandler={onChangeRadioHandler} value={radioInput} />
        </div>
      </header>
    </div>
  )
}

export default App
