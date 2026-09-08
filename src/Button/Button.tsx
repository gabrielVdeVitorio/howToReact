import styles from './Button.module.css'

interface ButtonProps
{
    content?: string,
    onClick: () => void,
    onDoubleClick?: () => void
}

function Button({onDoubleClick, onClick, content="Click here"}: ButtonProps)
{

    return (
        <button onDoubleClick={onDoubleClick} onClick={onClick} className={styles.button}>{content}</button>
    )
}

export default Button