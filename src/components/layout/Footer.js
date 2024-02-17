import {FaFacebook, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
           <ul className={styles.social_list}>
                <li><FaFacebook></FaFacebook></li>
                <li><FaInstagram></FaInstagram></li>
                <li><FaLinkedinIn></FaLinkedinIn></li>
           </ul>
           <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
        </footer>
    )

}

export default Footer