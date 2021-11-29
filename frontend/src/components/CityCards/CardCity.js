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
            {props.description}
          </Card.Text>
        </Card.ImgOverlay>
      </Link>
    </Card>
  )
}
