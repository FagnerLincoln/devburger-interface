

import styled from "styled-components";

export const Container = styled.div`

.carousel-item {
    padding: 20px;
}

padding-left: 40px;

`

export const Title = styled.h2`

font-size: 34px;
color: #9758a6;
font-weight: 800;
padding-bottom: 12px;
position: relative;
text-align: center;


&::after {
    
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    left: calc(50% - 28px);


}

`
export const ContainerItems = styled.div`
background: url('${(props) => props.imageUrl}')no-repeat;
background-size: center;
background-size: cover;
border-radius: 20px;
cursor: pointer;

display: flex;
align-items: center;
padding: 20px 10px;
width: 95%;
height: 200px;

p {
    color: #fff;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5;
    font-weight: bold;
}

`

