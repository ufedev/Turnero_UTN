// useState
import Contenedor from "./components/Contenedor"
import { useState } from 'react'


const App = () => {
  // primero estados

  const [cuenta, modificarCuenta] = useState(0)
  // otros hooks
  // funciones manejadoras
  const manejarResta = () => {
    modificarCuenta(cuenta - 1)
  }
  const manejarSuma = () => {
    modificarCuenta(cuenta + 1)
  }



  return (
    <div
      className="w-full min-h-screen bg-slate-950 flex justify-center items-center gap-3 px-4 ">
      <Contenedor className="bg-slate-300" >
        <button
          onClick={manejarResta}
          className='p-1 border-[1px] border-slate-600 rounded w-[40px] cursor-pointer'> - </button>
        <p>Contador: {cuenta} </p>
        <button
          onClick={manejarSuma}
          className='p-1 border-[1px] border-slate-600 rounded w-[40px] cursor-pointer'> + </button>
      </Contenedor>

    </div >
  )
}

export default App