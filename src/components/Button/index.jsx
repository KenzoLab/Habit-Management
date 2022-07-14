const Button = ({ onClick, name }) => {
    
    return (
        <button onClick={onClick} name={name}>{name}</button>
    )
}

export default Button;