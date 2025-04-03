import { useGetMovieNowQuery, useGetMovieTopQuery, useGetPopularMoviesQuery } from "../../api/moviesApi";
import MovieList from "../../Components/MovieList/MovieList"
import styles from "./Home.module.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import FilterWindow from "../../Components/FilterWindow/FilterWindow";
import SearchButton from "../../Components/UI/SearchButton/SearchButton";
import FilterButton from "../../Components/UI/FilterButton/FilterButton";


function Home() {
    const bgrPath = useSelector((state)=>state.bgrImg.bgrPath);
    const [isModal, setIsModal] = useState(false);

    const {data: popularMovies, isLoading: popularIsLoading} = useGetPopularMoviesQuery ();
    const {data: nowMovies, isLoading: nowIsLoading} = useGetMovieNowQuery ();
    const {data: topMovies,  isLoading: topIsLoading} = useGetMovieTopQuery ();
   

    return (
  
        <div className={styles.homeContainer} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgrPath}`}}>
             {isModal ? <FilterWindow setIsModal={setIsModal}/> : null}
        <div className={styles.searchBtnContainer} >
             <SearchButton />
             <FilterButton setIsModal={setIsModal} />
           
        </div>
             {!popularIsLoading ? <MovieList movies={popularMovies.results} title="Популярное"/> : <div>Идет загрузка</div>}
             {!nowIsLoading ? <MovieList movies={nowMovies.results} title="Сегодня"/> : <div>Идет загрузка</div>}
             {!topIsLoading ? <MovieList movies={topMovies.results} title="Лучшие все времен"/> : <div>Идет загрузка</div>}
        </div>
    )
}

export default Home;