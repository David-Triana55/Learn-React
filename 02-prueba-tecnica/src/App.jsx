import { useState } from 'react'
import { useFactCat } from './hooks/useFactCat'
import { useWordImage } from './hooks/useWordImage'

export const App = () => {
  const [changeFact, setChangeFact] = useState(false)

  const { fact } = useFactCat({ changeFact })
  const { word } = useWordImage({ fact })

  console.log(word)
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && (
        <p className='fact'>{fact}</p>
      )}

      {word && (
        <>
          <img style={{ width: '300px' }} src={`https://cataas.com/cat/says/${word}?fontSize=40&fontColor=red`} alt='cat' />
        </>
      )}

      <br />
      <button onClick={() => { setChangeFact(!changeFact) }}>
        Click to change fact
      </button>

    </main>
  )
}
