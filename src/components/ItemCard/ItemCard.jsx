import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import './ItemCard.css';

function ItemCard({product}) {
  return (
    <Card className="card-container">
      <Card.Img variant="top" src={product.img} alt={product.code}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{product.description}</Card.Text>       
        <Link className="btn btn-dark" to={`/products/${product?.id}`}>Detalle</Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;