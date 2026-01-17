import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

export default function App() {

  const product = {
    name: "Casque Bluetooth",
    price: "350 MAD",
    description: "Casque sans fil avec une excellente qualité sonore",
    // Image en ligne fiable via HTTPS
    image: "https://www.w3schools.com/w3images/lights.jpg"
  };

  const firstName = "Lahoucine"; // ou "" pour tester "Hello, there!"

  return (
    <Container className="mt-5 text-center">
      <Card style={{ width: "18rem", margin: "auto", padding: "10px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <Card.Body>
          <h5>{product.name}</h5>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </Card.Body>
      </Card>

      <h3 className="mt-3">
        Hello, {firstName ? firstName : "there!"}
      </h3>

      {firstName && (
        <img
          src="https://www.w3schools.com/w3images/lights.jpg"
          alt="user"
          style={{ marginTop: "15px", borderRadius: "50%", width: "150px" }}
        />
      )}
    </Container>
  );
}
