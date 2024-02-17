import { Link } from 'react-router-dom'
import styles from './LinkButtonPage.module.css'

const LinkButtonPage = ({to, text}) => {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButtonPage