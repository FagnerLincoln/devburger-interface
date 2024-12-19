

import styled from "styled-components";

export const Container = styled.div`

.carousel-item {
    margin-top: 40px;
    padding: 20px;
}

overflow-x: hidden;

.react-mult-carousel-list {
    overflow: visible; 
}

.react-multiple-carousel_arrow--left{
    left: 15px;
    top: 10px;
    }

    .react-multiple-carousel_arrow--right{
        top: 10px;
    }

padding-left: 40px;
padding-bottom:40px;

`

export const Title = styled.h2`

font-size: 34px;
color: #61a120;
font-weight: 800;
padding-bottom: 20px;
position: relative;
text-align: center;
margin: 70px, 0;



&::after {
    
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
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
width: 100%;
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

