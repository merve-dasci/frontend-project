import { useState } from 'react'
import axios from 'axios'

export const useLocalStorage = (key, initialValue) => {
  
  const [storedValue, setStoredValue] = useState(() => {
   
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  
  const setValue = (value) => {
    
    setStoredValue(value)
    

    localStorage.setItem(key, JSON.stringify(value))
  }

  

  const fetchFromAPI = (endpoint) => {
    return axios.get(`https://reqres.in/api/${endpoint}`)
      .then(response => {
        console.log('GET Response:', response.data)
        setValue(response.data)
        return response.data
      })
      .catch(error => {
        console.error('GET Error:', error)
        throw error
      })
  }

 
  const postToAPI = (endpoint, data) => {
    return axios.post(`https://reqres.in/api/${endpoint}`, data)
      .then(response => {
        console.log('POST Response:', response.data)
        setValue(response.data)
        return response.data
      })
      .catch(error => {
        console.error('POST Error:', error)
        throw error
      })
  }

  return [storedValue, setValue, fetchFromAPI, postToAPI]
}