// Style your elements here
import Styled from 'styled-components'

export const BgContainer = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CardContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px  #334155;
    width: 90%;
    height:90%;
    padding: 15px;
    @media screen and (min-width: 768px){
        box-shadow: none;
        width: 440px;
        padding: 20px;
    }
`
export const Heading = Styled.h1`
    font-family: 'Roboto';
    color: #1e293b;
    margin: 0px;
    margin-bottom: 20px;
    font-size: 24px;
    @media screen and (min-width: 768px){
        font-size: 30px;
    }
`
export const Para = Styled.p`
    font-family: 'Roboto';
    color: #334155;
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
    margin-bottom: 20px;
    @media screen and (min-width: 768px){
        font-size: 16px;
    }
`
export const Image = Styled.img`
    width: 100%;
    @media screen and (min-width: 768px){
      width: 100%;
    }
`
export const Description = Styled.p`
    font-family: 'Roboto';
    color: #1e293b;
    font-size: 13px;
    font-weight: 500;
    @media screen and (min-width: 768px){
     font-size: 15px;
    }
`
export const ButtonEl = Styled.button`
    width: 80px;
    height: 28px;
    font-family: 'Roboto';
    background-color: #1f81ff;
    color: #ffff;
    font-size: 12px;
    font-weight: 500;
    border-radius: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    align-self: flex-start;
    @media screen and (min-width: 768px){
        align-self: center;
        width: 100px;
        height: 32px;
    }
`
