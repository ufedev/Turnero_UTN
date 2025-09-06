

const Tarjeta = ({ cita, modificar, borrar }) => {
    return (

        <div className="p-1 bg-white/50">
            <div>
                <p>{cita.nombreCompleto}</p>
                <p>{cita.fecha} a las {cita.horario}</p>
                <p>Telefono: {cita.telefono}</p>
            </div>
            <div>
                <button>Editar</button>
                <button>Borrar</button>
            </div>
        </div>

    )
}
export default Tarjeta