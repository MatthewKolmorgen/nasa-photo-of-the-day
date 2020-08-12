import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function NasaPOD (props) {
    //making my variables to be set later on

    //Come back later and swap everything props and only use one useState
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
            .catch(err => {
                console.log('error')
            })
            .finally (() => {
            // run when finished
            })
    }, []);

    //creating the document
    return (
        <div className='container'>
            <header>
                <h1>Title {title}</h1>
                <h2>Date: {date}</h2>
            </header>
            <section>
                <img src={url} alt='NasaPOD'/>
                <p>Explanation: {explanation}</p>
            </section>
            <footer>
                <nav>
                    <a href='https://twitter.com/NASA'>Nasa Twitter</a>
                    <a href='https://twitter.com/SpaceX'> SpaceX Twitter </a>
                    <a href='https://apod.nasa.gov/apod/astropix.html'>Source</a>
                </nav>
            </footer>
        </div>
    )


}