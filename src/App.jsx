// useState
import Contenedor from "./components/Contenedor"
import { useState } from 'react'
import Input from "./components/Input"

const App = () => {
  // primero estados
  const [nombreCompleto, modificarNombreCompleto] = useState("")


  return (
    <div
      className="w-full min-h-screen bg-slate-950 flex justify-center items-center gap-3 px-4 ">
      <Contenedor className="bg-slate-300" >
        <div>
          <h2>Formulario</h2>
          <form>
            <Input
              name="Nombre Completo"
              placeholder="Nombre Completo"
              type="text"
              value={nombreCompleto}
              onChange={
                (evento) => {

                  console.log(nombreCompleto)
                  modificarNombreCompleto(evento.target.value)

                }
              }
            />

            {/* 
              Telfono (number/tel)
              Horario (Datetime)
            
            */}
          </form>
        </div>
      </Contenedor>
      <Contenedor className="bg-slate-500">
        <div>
          <h2>Turnos</h2>
        </div>
      </Contenedor>
    </div >
  )
}

export default App