// useState
import Contenedor from "./components/Contenedor"
import { useState } from 'react'
import Input from "./components/Input"
import { ToastContainer, toast } from "react-toastify"

const App = () => {
  // primero estados

  const [nombreCompleto, modificarNombreCompleto] = useState("")
  const [fecha, modificarFecha] = useState("")
  const [horario, modificarHorario] = useState("")
  const [telefono, modificarTelefono] = useState("")

  const hoy = new Date()
  const unaSemanaDespues = new Date()
  unaSemanaDespues.setDate(unaSemanaDespues.getDate() + 7)


  const enviarFormulario = (evento) => {
    evento.preventDefault()
    const horarioDate = new Date(horario)
    if (horarioDate.getDay() === 0) {
      console.log("Es domingo")
    }

  }

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-b from-amber-300 to-amber-600 flex justify-center items-center gap-3 px-4 ">
      <Contenedor className="bg-slate-300/75" >
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
              name="Día"
              type="date"
              min={hoy.toISOString().slice(0, 10)}
              max={unaSemanaDespues.toISOString().slice(0, 10)}
              value={fecha}
              onChange={(evento) => {
                const eleccion = new Date(evento.target.value)
                const dia = eleccion.getDay() // obtenemos el dia de la semana Lunes == 0 Domingo == 6
                if (dia === 0 || dia === 6) {
                  toast.error("Domingos y Lunes no laboramos")
                } else {
                  modificarFecha(evento.target.value)
                }
              }
              }
            />
            <Input
              name="Horario"
              type="time"
              step="1800"

              value={horario}
              onChange={(evento) => {
                const horaUsuario = evento.target.value
                const [hora, minutos] = horaUsuario.split(":")
                console.log(Number(hora), Number(minutos))
                modificarHorario(evento.target.value)
              }}

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
              className="w-full p-2 text-center font-bold bg-slate-950 text-slate-100 rounded mt-5 cursor-pointer hover:bg-slate-500 transition-all"
              type="submit"
              value="Agendar"
            />
          </form>
        </div>
      </Contenedor>
      <Contenedor className="bg-slate-300/75">
        <div>
          <h2>Turnos</h2>
        </div>
      </Contenedor>
      <ToastContainer />
    </div >
  )
}

export default App