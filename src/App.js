import logo from './logo.svg';
import './App.css';
import player from './Profile';
import {Card} from 'react-bootstrap';
function App() {
  return (
    <>
   <h1 className='App'>Football players</h1>
   <div className="App">
     
     {player.map((player) =>(<Card style={{ width: '18rem', margin: '10px',height: '600px',padding: '10px',border: '2px solid black', borderRadius: '10px' }}>
    <Card.Img variant="top" src={player.img} alt={player.name} />
    <Card.Body>
      <Card.Title className='text'> {player.name}</Card.Title>
      <Card.Text className='text'>
        Team: {player.team}<br />
        Nationality: {player.nationality}<br />
        Age: {player.age}
      </Card.Text>
    </Card.Body>
  </Card>
  ))}
    </div>
    </>
  );
}

export default App;
