import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function CardCity(props) {
  return (
    <Card border="dark" className="text-white card">
      <Link exact to={`../city/${props.id}`}>
        <Card.Img className="card-img" src={props.src} alt={props.name} />
        <Card.ImgOverlay>
          <Card.Title className="txt-dark txt-title">{props.name}</Card.Title>
          <Card.Text className="txt-dark txt-description">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.ImgOverlay>
      </Link>
    </Card>
  )
}
