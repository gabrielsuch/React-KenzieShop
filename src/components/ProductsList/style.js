import styled from "styled-components"


export const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    background-color: #131313;
    color: white;
`

export const Main = styled.div `
    width: 60%;
    margin: auto;

    @media (max-width: 700px){
        width: 80%;
        margin: auto;
    }
`

export const Ul = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #F5F5F5;
    padding: 15px;
`

export const Button = styled.button `
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`