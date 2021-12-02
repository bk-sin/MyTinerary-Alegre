import {useState} from "react"
import "./CitiesCards.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

function CitiesCards(props) {
  const [search, setSearch] = useState([])
  const filtered = props.cities.filter((city) =>
    city.name.toLowerCase().startsWith(search)
  )

  console.log(filtered)

  return (
    <>
      <input
        className="SearchInput"
        onInput={(e) => setSearch(e.target.value.toLowerCase().trim())}
        type="text"
        placeholder="Search a City"
      />
      {filtered.length > 0 ? (
        filtered.map((city) => (
          <div class="cartas">
            {filtered.length > 0 ? (
              filtered.map((city, index) => (
                <Link className="cartalink" to={`/city/${city._id}`}>
                  <div
                    class={`carta ${
                      index === 5 || index === 10 ? "paddtop" : ""
                    }`}
                    style={{backgroundImage: "url(" + city.src + ")"}}
                  >
                    <div class="carta-content">
                      <h2 class="carta-title">{city.name}</h2>
                      {/* <p class="card-body">{city.description}</p> */}
                      <Link to={`/city/${city._id}`} class="boton">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        ))
      ) : (
        <h1>No matching results!</h1>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities.getCities,
  }
}
export default connect(mapStateToProps)(CitiesCards)
