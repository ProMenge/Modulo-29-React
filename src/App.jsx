
import { useState } from "react"

import Perfil from "./assets/components/Perfil"
import Formulario from "./assets/components/Formulario"

function App() {
  const [formularEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return (
    <>
      <Perfil nome="Fred Menge" endereco="https://avatars.githubusercontent.com/u/108365974?v=4"/>
      {formularEstaVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularEstaVisivel)} type="button"> Type Form</button>
    </>
  )
}

export default App
