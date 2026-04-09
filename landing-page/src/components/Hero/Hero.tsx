//Seção principal da landing page, com título, descrição e chamada para ação

import Button from "../Button/Button";
import Statistic from "./components/Statistics";
import './hero.css';


function Hero(){

    return(
        <section className="hero">
            <div className="container">

                <span className="tagHero">Plataforma de aprendizado do futuro</span>
                <h1 className="titleHero">Gestão de aprendizado inteligente para <span>escolas técnicas</span></h1>
                <p className="descriptionHero">
                    Centralize avaliações, presença e progresso dos alunos em uma 
                    interface intuitiva e potente. Desenvolvido para instituições 
                    que buscam excelência acadêmica.
                </p>

                <div className="buttonsHero">
                    <Button 
                    label='Explorar funcionalidades'
                    onClick={() => {}}
                    filled={true}
                    border={true}
                    />

                    <Button 
                    label='Saiba mais'
                    onClick={() => {}}
                    filled={false}
                    border={true}
                    />
                </div>

                <div className="statsHero">
                    <Statistic data="+120" description="escolas técnicas" />
                    <Statistic data="+48 mil" description="alunos ativos" />
                    <Statistic data="4.9 ⭐" description="avaliação média" />
                </div>


            </div>
        </section>
    );

}

export default Hero;