import Card from 'react-bootstrap/Card';

function Frame() {
  return (
    <Card style={{ width: '50rem', backgroundColor:' #F5F5DC', borderRadius: '10px', fontSize: '20px', textAlign: 'center', color: 'rgb(72, 116, 72)', fontWeight: '600' , boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' }}>
      <Card.Body>
        <Card.Text>
        Shadows fade, light shines, 
        </Card.Text>
        <Card.Text>  
        Broken hearts heal with time.
        </Card.Text>
        <Card.Text>
        Strength in every fall,
        </Card.Text>
        <Card.Text>  
        Rising through it all.
        </Card.Text>
        <Card.Text>    
        Peace within, standing tall.
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}

export default Frame;