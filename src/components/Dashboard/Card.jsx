import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 
function Cards(props) {
  return (
    <>
      <style>
        {`
          .custom-btn {
          background-color:rgb(168, 135, 107) !important;
          border-radius: 8px;
          padding: 10px 20px;
          color: #ddd;
          border: none;
          transition: all 0.3s ease;
          color: black;
          }
          .custom-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            background-color:rgb(151, 117, 87) !important;
            color: black;
        `}

      </style>
      <Card style={{ width: '25rem', borderRadius: '8px', justifyContent: 'space-evenly', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' ,marginTop: '15px', ...props.style }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Link to={props.linkTo}>
            <Button className="custom-btn">{props.btnText}</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
