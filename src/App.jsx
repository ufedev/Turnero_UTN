// useState
import Contenedor from "./components/Contenedor"
import { useState } from 'react'
import Input from "./components/Input"

const App = () => {
  // primero estados

  const [nombreCompleto, modificarNombreCompleto] = useState("")
  const [horario, modificarHorario] = useState("")
  const [telefono, modificarTelefono] = useState("")


  const enviarFormulario = (evento) => {
    evento.preventDefault()
    const horarioDate = new Date(horario)
    if (horarioDate.getDay() === 0) {
      console.log("Es domingo")
    }

  }

  return (
    <div
      className="w-full min-h-screen bg-slate-950 flex justify-center items-center gap-3 px-4 ">
      <Contenedor className="bg-slate-300" >
        <div>
          <h2 className='text-3xl font-black text-center mt-5' >Formulario</h2>
          <form
            className="flex flex-col gap-5 pt-5"
            onSubmit={enviarFormulario}

          >
            <Input
              name="Nombre Completo"
              placeholder="Nombre Completo"
              type="text"
              value={nombreCompleto}
              onChange={
                (evento) => {

                  modificarNombreCompleto(evento.target.value)

                }
              }
            />

            <Input
              name="Horario"
              type="datetime-local"
              step="1200"

              value={horario}
              onChange={(evento) => {
                modificarHorario(evento.target.value)
              }
              }
            />

            <Input
              type="number"
              name="Telefono"
              placeholder="Ingrese su telefono"
              value={telefono}
              onChange={(evento) => {
                modificarTelefono(evento.target.value)
              }}

            />
            <input
              className="w-full p-2 text-center font-bold bg-slate-950 text-slate-100 rounded mt-5 cursor-pointer hover:bg-slate-300 transition-all"
              type="submit"
              value="Agendar"
            />
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