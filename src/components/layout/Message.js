import {useState, useEffect} from 'react'
import styles from './Message.module.css'


function Messege({type, message, indexNewMsg}) {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        if(!message){
            setVisible(false);
            return
        }
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        },3000)

        return () => clearTimeout(timer)

     }, [message, indexNewMsg])


    return(
        <>
            {visible &&( 
                <div className={`${styles.message} ${styles[type]}`}><p>{message}</p></div>
            )}
        </>
       
    )
}

export default Messege