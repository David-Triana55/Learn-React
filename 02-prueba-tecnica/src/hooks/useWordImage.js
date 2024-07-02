import { useEffect, useState } from 'react'

export function useWordImage ({ fact }) {
  const [word, setWord] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    setWord(threeFirstWords)
    console.log(threeFirstWords)
  }, [fact])

  return { word }
}
