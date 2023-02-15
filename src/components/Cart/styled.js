import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #000000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: 23px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const CartText = styled.div`
    flex: 1;
    color: #fff;
    font-size: 1.125rem;
    font-weight: bold;
`;

export const CartBody = styled.div`
    display: ${props=>props.show ? 'flex' : 'none'};

`;