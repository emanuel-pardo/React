import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCard.css';

function ItemCard({product}) {
  return (
    <Card className="card-container">
      <Card.Img variant="top" src={product.img} alt={product.code}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{product.description}</Card.Text>       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;