import { useFactHook } from './hooks/useFactHook'

function App() {

  const { firstWord } = useFactHook()

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>App Gatitos</h1>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: 'calc(100vh - 200px)' }}>
        <h2><strong>Name:</strong> { firstWord.word }</h2>
        <img src={ firstWord.src } alt={ firstWord.word } height={ 400 } width={ 400 } />
      </main>
    </div>
  )
}

export default App
