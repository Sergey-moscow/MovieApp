import styles from "./AboutPage.module.css"

export default function AboutPage() {
  
  return (
    <div className={styles.aboutContainer}>
      <h1>О сайте</h1>
      <h3>Возможности</h3>
      <p>Учебный сайт для поиска фильмов и добавления в избранное.</p>
      <p>Реализованы различные списки фильмов, поиск по названию и поиск по параметрам.</p>
      <p>Список фильмов запрашивается по API https://www.themoviedb.org/</p>
      <p>Использованы следующие технологии:</p>
      <ul>
        <li>React Routes</li>
        <li>RTK Query</li>
      </ul>
    </div>
  )
}
