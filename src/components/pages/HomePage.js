import styles from './HomePage.module.css'
import savings from '../../img/savings.svg'
import LinkButtonPage from '../layout/LinkButtonPage'

const HomePage = () =>{
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButtonPage to="/newproject" text="Criar Projeto"></LinkButtonPage>
            <img src={savings} alt="Costs"></img>
        </section>
    )
}

export default HomePage
