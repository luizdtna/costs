import styles from './InputForm.module.css'

const InputForm = ({type, textLabel, name, placeholder, handleOnChange, value}) => {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{textLabel}</label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            id={name} 
            onChange={handleOnChange} 
            value={value}>
            </input>
        </div>
    )
}

export default InputForm
