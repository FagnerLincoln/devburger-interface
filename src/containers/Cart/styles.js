
import styled from 'styled-components';
import Texture from '../../assets/Texture.svg';
import background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
    background: linear-gradient(
    rgba(255,255,255, 0.4),
    rgba(255,255,255, 0.4)
),
url('${background}');
height: 100%;
  min-height: 100vh;
  position: relative; /* Necessário para criar o contexto de posicionamento */
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  background: url('${Texture}') no-repeat center center;
  background-size: cover;
  display: flex;
  background-color: #1f1f1f;
  align-items: center;
  justify-content: center;
  width: 100vw; /* Ocupa toda a largura da viewport */
  height: 193px;
  position: relative; /* Garantimos que ele tenha contexto para o z-index */
  z-index: 2; /* Ele ficará acima do Title */

img{
  height: 150px;
}

`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #61a120;
  background-color: #ffffff;
  text-align: center;
  padding-bottom: 12px;
  width: 100%;
  margin: 0;
  position: relative; /* Garante que ele esteja abaixo do Banner */
  z-index: 1; /* Definido para ficar atrás do Banner */
  top: 0px; /* Faz com que o título suba ligeiramente atrás do Banner */

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 20px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;


