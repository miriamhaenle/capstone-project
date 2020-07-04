import { useState } from 'react'

export default function useForm() {
  const [state, setState] = useState({})

  const handleChange = (event) => {
    event.persist()
    event.target.value.length <= 8 &&
      setState((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }))
  }
  return [state, handleChange]
}
