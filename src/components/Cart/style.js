import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

export const HomePage = styled.div `
    color: black;
`

export const Button = styled.button `
    cursor: pointer;
    padding: 10px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    font-size: 1.5rem;
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
    width: 100%;
`

export const Info = styled.div `
    width: 50%;
    margin: auto;
    padding: 5px 15px;

    @media (max-width: 500px){    font-size: 1rem;
        width: 100%;
    }
`

export const Title = styled.h2 `
    background-color: green;
    color: white;
    padding: 15px;
    border-radius: 10px;
    word-break: break-word;
`