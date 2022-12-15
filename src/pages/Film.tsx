import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import PlanetSummary from '../components/PlanetSummary'
import { getIdFromURL } from '../hooks/useGetIdFromURL'

function Film() {
    const { id } = useParams()
    const { isLoading, error, data } = useQuery(`film-${id}`, () =>
        fetch(`https://swapi.dev/api/films/${id}`)
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
                    {data.planets &&
                        <>
                            <div>{data.planets.length} planets</div>
                            {data.planets.map((planetURL: string) => (
                                <PlanetSummary id={getIdFromURL(planetURL)} />
                            ))}
                        </>
                    }
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
