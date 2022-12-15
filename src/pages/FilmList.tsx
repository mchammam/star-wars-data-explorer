import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';

function FilmList() {
  const { isLoading, error, data } = useQuery('filmList', () =>
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
    //      .then(data => console.log(data.results))
  )

  function getIdFromURL(url: string) {
    return url.split('/').at(-2);
  }

  return (
    <div>
      <ul>

        {isLoading && "Loading..."}
        {error && "error..."}

        {data?.results.map((film: { title: string, episode_id: number, release_date: Date, url: string }) => (
          <Link to={"/films/" + getIdFromURL(film.url)}>
            <li key={film.title + film.episode_id}>
              <>
                Title: {film.title}
                Release date: {film.release_date}
                Id: {getIdFromURL(film.url)}
              </>
            </li>
          </Link>
        ))}

        {(data?.previous || data?.next) && "Pagination"}


      </ul>
    </div>
  )
}

export default FilmList
