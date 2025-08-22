
const Contenedor = ({ className, children }) => {
    return (
        <div
            className={`
        flex-1 
        min-h-[400px] 
        rounded-lg 
        ${className}`}
        >

            {children}

        </div>
    )
}

export default Contenedor