import React from 'react';
import '../assets/App.scss';
import Header from '../components/header';
import Search from '../components/search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';


const App = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Categories>
                <Carousel>
                    <Carouselitem /> 
                    <Carouselitem /> 
                    <Carouselitem /> 
                    <Carouselitem /> 
                </Carousel>
            </Categories>
            <Footer />
        </div>
      );
}

export default App;