import { useSelector } from "react-redux";
import styles from "./AISearchPage.module.css"
import { useState } from "react";
import { useAIApi } from "../../api/useAIApi";
import MyInput from "../../Components/UI/MyInput/MyInput";
import MyButton from "../../Components/UI/MyButton/MyButton";
import { useGetMovieByNameQuery } from "../../api/moviesApi";
import MovieList from "../../Components/MovieList/MovieList";

export default function AISearchPage() {

const bgrPath = useSelector((state)=>state.bgrImg.bgrPath);

const [apiKey, setApiKey] = useState("");
const [userQuery, setUserQuery] = useState("");
const [movie, setMovies] = useState(null);

const {fetchMovieName, isLoading} = useAIApi();
const {data: searchedMovies, isLoading: moviesLoading} = useGetMovieByNameQuery(movie, {
    skip: !movie,
  });


const submitBtn = async () => {
    console.log("Кнопка нажалась функция выполняется")
    setMovies(null);
    try {
        const aiMovie = await fetchMovieName(apiKey, userQuery);
        setMovies(aiMovie);
        console.log(aiMovie)
    } catch (err) {console.log(err)}

}

// const submitBtn = async () => {
//     const aiMovie = "The Matrix";
//     setMovies(aiMovie)
// }


  return (

      <div className={styles.searchContainer} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgrPath}`}}>
        <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
            <h2>Поиск с AI meta-llama/llama-4-scout:free - </h2>
            <h5>Я помогу найти фильм который наиболее подходит под описание, но для этого мне нужен APIKey openrouter.ai</h5>
            <h5>!!! Используйте ключ чистого аккаунта без привязанных платежных данных. Не используй ключ с платежными данными!!! модель хоть и пока бесплатна, но в будущем может измениться</h5>

            <MyInput className={styles.AIInput} value={apiKey} placeholder="Введите API Key" onChange={(e)=>setApiKey(e.target.value)}/>
            <h5>Введите описание фильма, который нужно найти</h5>
                
            <textarea className={styles.AIInput} value={userQuery} placeholder="Описание фильма" onChange={(e)=>setUserQuery(e.target.value)}></textarea>
            
                    <MyButton 
                        className = {styles.AIBtn}
                        onClick={(submitBtn)}
                    >Искать</MyButton>
            </div>
        </div>
           
      
      {isLoading || moviesLoading ? <p>Загрузка данных</p>: null} 

      {searchedMovies?.results?.length > 0 && (<MovieList movies={searchedMovies.results} title="Найденные фильмы по описанию"/>)}
       

    </div>
  )
}
