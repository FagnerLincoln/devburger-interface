
import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container, } from "./Styles";


export function Home(){
   
    
       return(
        <main>
            <Banner>
            <h1>Bem Vindo!(a)</h1>
            </Banner>
            <Container>
                <div>
                   <CategoriesCarousel/>
                   <OffersCarousel/>
                    <div>Carrosel Produtos</div>
                </div>
            </Container>
        </main>
    )
}