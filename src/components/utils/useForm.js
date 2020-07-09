import { useState } from 'react'

export default function useForm(submitCallback) {
  const [state, setState] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    submitCallback()
    setState('')
  }

  const handleChange = (event) => {
    event.persist()
    event.target.value.length <= 8 &&
      setState((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }))
  }

  return [state, handleChange, handleSubmit]
}
