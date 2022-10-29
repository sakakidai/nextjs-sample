import React, { useState } from "react";

type InputProps = JSX.IntrinsicElements['input'] & {
  label: string
}

export const Input = (props: InputProps) => {
  const {label, id} = props;
  const [text, setText] = useState('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const resetInputField = () => {
    setText('')
  }

  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={text} onChange={onInputChange} />
      <button onClick={resetInputField}>Reset</button>
    </div>
  )
}
