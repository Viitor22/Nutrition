import { HeroContainer, Hero, TituloHero, ButtonHero } from "./style.js";


const HeroPrincipal = () => {
    return (
    <>
        <HeroContainer>
            <Hero></Hero>
            <TituloHero>
                <h1>Nutrition</h1>
                <h3>O Melhor Amigo do Nutricionista</h3>
                <p>O <i>Nutrition</i> é um app que auxilia nutricionistas na criação de planos alimentares personalizados, acompanhamento de medidas corporais e cálculos de necessidades nutricionais. Com uma interface simples, otimiza o trabalho e melhora a comunicação entre nutricionista e paciente.</p>
                <ButtonHero>Saiba mais</ButtonHero>
            </TituloHero>
        </HeroContainer>
    </>
    )
}

export default HeroPrincipal;