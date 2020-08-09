import {useState, useEffect} from 'react';


const useInitialState = (API) => {

    const [generos, setGeneros] = useState([]);
    useEffect(() =>{
        fetch(API)
        .then(response => response.json())
        .then(data => setGeneros({data}));
        


    }, []);

    console.log(generos);

    return generos;

    
    // const [videos, setVideos ] = useState([]);
    // useEffect(() =>{
    //     fetch('https://api.themoviedb.org/3/movie/550?api_key=fe67779bdcaebf4fcd8cffc4eefafb36')
    //     .then(response => response.json())
    //     .then(data => setVideos(data));
    // },[]);
    // console.log(videos);
}

export default useInitialState;
