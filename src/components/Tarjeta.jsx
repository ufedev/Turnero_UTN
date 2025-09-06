import { Edit, Delete } from 'lucide-react'
import { formatearFecha } from '../ayuda'
const Tarjeta = ({ cita, modificar, borrar }) => {
    return (

        <div className="p-1 bg-white/50">
            <div>
                <p>{cita.nombreCompleto}</p>
                <p>{formatearFecha(cita.fecha, cita.horario)}</p>
                <p>Telefono: {cita.telefono}</p>
            </div>
            <div>
                <button ><Edit /></button>
                <button><Delete /></button>
            </div>
        </div>

    )
}
export default Tarjeta