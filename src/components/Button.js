import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) =>{
    return (
        <button
        onClick={onClick}
        style={{ backgroundColor: color}}
        className= 'btn'
        
        >
            {text}
        </button>

    )
}

Button.defaltProps = {
    color: 'steeblue',
}

Button.prototype ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PointerEvent.func,
}

export default Button