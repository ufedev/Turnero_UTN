import Contenedor from "./components/Contenedor"

const App = () => {
  return (
    <div
      className="w-full min-h-screen bg-slate-950 flex justify-center items-center gap-3 px-4 ">
      <Contenedor className="bg-slate-300" >
        <h1>Formulario</h1>
        <p>Formulario de inscripción</p>
        <form>
          <input type="text" />
        </form>
      </Contenedor>

    </div >
  )
}

export default App