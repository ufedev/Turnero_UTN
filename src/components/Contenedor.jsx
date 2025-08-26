// const props = {
//     className: "aslkdfjsalkfjksl",
//     children: "salkdfjslkdfjslk"
// }

// const { className } = props

const Contenedor = ({ className, children }) => {
    return (
        <div
            className={`
            flex-1 
            min-h-[400px] 
            rounded-lg
            p-[16px] 
            ${className}`}
        >
            {children}
        </div>
    )
}

export default Contenedor