import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'

function App () {
  const [text, setText] = useState(null)

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setText(value)
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
        </div>
      </header>
    </div>
  )
}

export default App
