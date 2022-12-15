import { useQuery } from 'react-query'
import { useParams } from 'react-router'

function Film() {
    const { id } = useParams()
    const { isLoading, error, data } = useQuery('filmList', () =>
        fetch('https://swapi.dev/api/films/' + id)
            .then(res => res.json())
        //.then(data => console.log(data))
    )




    return (
        <div>

            {isLoading && "Loading..."}
            {error && "error..."}

            {data &&
                <>
                    <div>Title:  {data.title}</div>
                    <div>Director: {data.director}</div>
                    <div>Opening crawl: {data.opening_crawl}</div>
                    <div>Producer: {data.producer}</div>
                    <div>Release date: {data.release_date}</div>
                    <p> In this film there are:</p>
                    <div>{data.planets.length} planets</div>
                    <div>{data.species.length} species</div>
                    <div>{data.characters.length} character</div>
                    <div>{data.starships.length} starships</div>
                    <div>{data.vehicles.length} vehicel</div>
                </>
            }
        </div>
    )
}

export default Film
