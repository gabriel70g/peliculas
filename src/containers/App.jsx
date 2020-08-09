import React, {useEffect, useState } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/header';
import Search from '../components/search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'

const APIGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=fe67779bdcaebf4fcd8cffc4eefafb36&language=es-ES';


const App = () => {

    const initialState = useInitialState(APIGeneros);

    // const [generos, setGeneros] = useState([]);
    // useEffect(() =>{
    //     fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=fe67779bdcaebf4fcd8cffc4eefafb36&language=es-ES')
    //     .then(response => response.json())
    //     .then(data => setGeneros({data}));
        


    // }, []);

    // console.log(generos);
    
    // const [videos, setVideos ] = useState([]);
    // useEffect(() =>{
    //     fetch('https://api.themoviedb.org/3/movie/550?api_key=fe67779bdcaebf4fcd8cffc4eefafb36')
    //     .then(response => response.json())
    //     .then(data => setVideos(data));
    // },[]);
    // console.log(videos);

    return (
        <div className="App">
            <Header />
            <Search />
                
            <Categories title="Zaraza" >
                <Carousel>
                    <Carouselitem /> 
                    <Carouselitem /> 
                    <Carouselitem /> 
                    <Carouselitem /> 
                </Carousel>
            </Categories>

             {/* <Categories title="Tendencias">
                <Carousel>
                    <Carouselitem /> 
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                    <Carouselitem /> 
                    <Carouselitem /> 
                    <Carouselitem /> 
                </Carousel>
            </Categories>  */}
            <Footer />
        </div>
      );
}

export default App;