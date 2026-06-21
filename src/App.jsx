
import './App.css'
const text = "Hello World!"
let search = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg"

function App() {
  return (
    <>
      <img src={search} alt='cat' width={300}/>
    <h1>{text}</h1>
    </>
  )
}

export default App
