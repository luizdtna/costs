import styles from './SubmitButton.module.css'

const SubmitButton = ({textButton}) => {
    return(
        <div className={styles.form_control}>
            <button className={styles.btn}>
                {textButton}
            </button>
        </div>
    )
}

export default SubmitButton
