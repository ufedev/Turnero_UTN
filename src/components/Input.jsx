const Input = ({ name, onChange, value, type, placeholder }) => {
    return (
        <div
            className="flex flex-col gap-2"
        >
            <label htmlFor={name}>{name}:</label>
            <input

                className='p-1 border-[1px] border-slate-400 rounded shadow'
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />
        </div>
    )
}

export default Input