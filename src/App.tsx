import { useFactHook } from './hooks/useFactHook'
import { fetchFacts } from './services/fact';

function App() {

  const { firstWord, setFactFromApi } = useFactHook()

  const handleClick = async (): Promise<void> => {
    const newFact = await fetchFacts();
    setFactFromApi( newFact )
  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh', gap: '20px' }}>
    <h1 style={{ textAlign: 'center' }}>App Gatitos</h1>
        <h2><strong>Name:</strong> { firstWord.word }</h2>
        {
          firstWord.src !== ''
          &&
          <img src={ firstWord.src } alt={ firstWord.word } height={ 400 } width={ 400 } />
        }
        <button onClick={ handleClick }>Get new fact</button>
    </main>
  )
}

export default App
