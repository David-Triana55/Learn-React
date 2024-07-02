import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function useFactCat ({ changeFact }) {
  const [fact, setFact] = useState()

  useEffect(() => {
    const api = async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      const { fact } = data
      setFact(fact)
    }
    api(CAT_ENDPOINT_RANDOM_FACT)
  }, [changeFact])

  return { fact }
}
