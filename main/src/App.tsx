import './App.css'
import { Tips } from 'common'
import WujieReact from 'wujie-react'

function App() {
  console.log('EcosHttp', Tips)

  return (
    <>
      <section>
        <h1>主应用</h1>
      </section>
      <section>
        <h2>子应用</h2>
        <WujieReact name='vue3' url='http://localhost:5174/' />
        <WujieReact name='react' url='http://localhost:5175/' />
      </section>
    </>
  )
}

export default App
