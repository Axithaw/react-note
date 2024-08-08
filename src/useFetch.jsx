import React from 'react'
import { useState,useEffect } from 'react'
export default function useFetch(url) {
    const [data, setData] =useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok) throw Error('Unable to fetch data')
           return res.json()})
        .then(
            data => {
                setData(data)
                console.log(data)}
        )
        .catch( err => setError(err.message)
        )
    },[url])

  return {data ,error}
}
