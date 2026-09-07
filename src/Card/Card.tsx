import styles from './Card.module.css'
import profilePic from '../assets/profile.jpeg'

interface CardProps
{
    name?: string,
    description?: string
}

function Card({name = "Guest", description = "I am a web development student building up my portfolio, my hobbies are studying and reading books"} : CardProps)
{
    return (
        <div className={styles.card}>
            <img className={styles.card__imgProfilePic} src={profilePic}/>
            <h2 className={styles.card__h2Title}>{name}</h2>
            <p className={styles.card__pDescription}>{description}</p>
        </div>
    );
}

export default Card