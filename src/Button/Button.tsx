import styles from './Button.module.css'

interface ButtonProps
{
    content?: string;
}

function Button({content="Click here"}: ButtonProps)
{
    const handleClick = (e) => e.target.textContent = 'OUCH!';

    return (
        <button onDoubleClick={ (e) => handleClick(e) } className={styles.button}>{content}</button>
    )
}

export default Button