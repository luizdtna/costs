import styles from './SelectForm.module.css'

const SelectForm = ({textLabel, name, options, handleOnChange, value}) => {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{textLabel}</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ""}
            >
                <option>Selecione um opção</option>
                {options.map((option) => ( 
                    <option key={option.id} value={option.id}>{option.name}</option>                    
                ))}
            </select>
        </div>
    )
}

export default SelectForm
