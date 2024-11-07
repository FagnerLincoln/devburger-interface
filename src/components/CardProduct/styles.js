import styled from "styled-components";

export const Container = styled.div `

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
width: 95%;
padding: 20px;
border-radius: 15px;
background-color: #ffffff;
cursor: grab;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}

p {
color: #ff8c05;
line-height: 20px;
font-weight: 700;
margin-top: 40px;
}

strong {
font-size: 22px;
color: #363636;
font-weight: 800;
line-height: 20px;

}

`

export const CardImage = styled.img `

height: 100px;
position: absolute;
top: -30px;


`

