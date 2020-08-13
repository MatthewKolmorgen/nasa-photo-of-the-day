import React, {useState, useEffect} from 'react'
import axios from 'axios'
//importing styled-components
import styled from 'styled-components'

//styling components
const StyledDivContainer = styled.div `
    width: 80%;
    margin: ${props => props.theme.margin.center};
`;

const StyledHeader = styled.header`
    width: 75%;
    margin: ${props => props.theme.margin.center};
`

const StyledMainSection = styled.section`
    width: 70%;
    margin: ${props => props.theme.margin.center};
`;

const StyledFooter = styled.footer`
    /* display: flex; */
    margin: ${props => props.theme.margin.center};
`;

const StyledButton = styled.button`
    justify-content: center;
    font-size: 2rem;
    padding: 4rem;
    margin: ${props => props.theme.margin.center};
    color: black;
`;









export default function NasaPOD (props) {
    //making my variables to be set later on

    //Come back later and swap everything props and only use one useState
    //Decided against that and to make the page inside of NasaPOD and just pass 
    // <NasaPOD /> into App.js
    const [img, setImg] = useState ([]);
    const [date, setDate] = useState ([]);
    const [explanation, setExplanation] = useState ([]);
    const [title, setTitle] = useState ([]);
    const [url, setUrl] = useState ([]);

    
    //calling the keys to set my variables
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=sRyTTPbSqSHPCTXsHjSg7yTOCpbATOPDWrO4kDAQ')
            .then(response => {
                console.log('working');
                setImg(response.data.url);
                setDate(response.data.date);
                setExplanation(response.data.explanation);
                setTitle(response.data.title);
                setUrl(response.data.url);
            })
            .catch(error => {
                console.log('error')
            })
            .finally (() => {
            // run when finished
            })
    }, []);

    //creating the document
    return (
        //***** Limit the container size *****
        <StyledDivContainer className='container'>

            {/***** Information About the Picture *****/}
            <StyledHeader>
                <h1>{title}</h1>
                <h2>Date: {date}</h2>
            </StyledHeader>

            {/***** Main Content *****/}
            <StyledMainSection className='main-content'>
                <img src={url} alt='NasaPOD'/>
                <p>Explanation: {explanation}</p>
            </StyledMainSection>

            {/***** Footer with Related Links *****/}
            <StyledFooter>
                <nav className='footer-nav-bar'>
                    <StyledButton as='a' href='https://twitter.com/NASA'>Nasa Twitter</StyledButton>
                    <StyledButton as='a' href='https://twitter.com/SpaceX'> SpaceX Twitter </StyledButton>
                    <StyledButton as='a' href='https://apod.nasa.gov/apod/astropix.html'>Source</StyledButton>
                </nav>
            </StyledFooter>
        </StyledDivContainer>
    )
}