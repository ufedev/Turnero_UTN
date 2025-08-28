// const props = {
//     className: "aslkdfjsalkfjksl",
//     children: "salkdfjslkdfjslk"
// }

// const { className } = props

const Contenedor = ({ className, children }) => {
    return (
        <div
            className={` 
            w-[400px]
            h-[520px]
            rounded-lg
            p-[16px]
            shadow 
            ${className}`}
        >
            {children}
        </div>
    )
}

export default Contenedor