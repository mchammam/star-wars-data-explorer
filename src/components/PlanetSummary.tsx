import { useQuery } from "react-query"

function PlanetSummary({ id } : { id: number}) {
    const { isLoading, error, data } = useQuery(`planet-${id}`, () =>
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(res => res.json())
        //.then(data => console.log(data))
    )
  return (
    <div>
      {isLoading && "Loading..."}
            {error && "error..."}

            {data &&
                <>
                <div>Name:  {data.name} </div>
                <div>Terrain: {data.terrain} </div>
                <div>Population: {data.population} </div>
                </>
            }
    </div>
  )
}

export default PlanetSummary
