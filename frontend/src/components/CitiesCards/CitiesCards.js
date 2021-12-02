import {useState} from "react"
import "./CitiesCards.css"
import {Link} from "react-router-dom"

function CitiesCards(props) {
  const [search, setSearch] = useState([])
  const filtered = props.data.filter((city) =>
    city.name.toLowerCase().startsWith(search)
  )

  return (
    <>
      <input
        className="SearchInput"
        onInput={(e) => setSearch(e.target.value.toLowerCase().trim())}
        type="text"
        placeholder="Search a City"
      />

      <div class="cartas">
        {filtered.length > 0 ? (
          filtered.map((city, index) => (
            <Link className="cartalink" to={`/city/${city._id}`}>
              <div
                class={`carta ${index === 5 || index === 10 ? "paddtop" : ""}`}
                style={{backgroundImage: "url(" + city.src + ")"}}
              >
                <div class="carta-content">
                  <h2 class="carta-title">{city.name}</h2>
                  <Link to={`/city/${city._id}`} class="boton">
                    Learn more
                  </Link>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No matching results!</h1>
        )}
      </div>
    </>
  )
}

export default CitiesCards
