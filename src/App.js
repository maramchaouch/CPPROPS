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
Player.defaultProps = {
     name: "Pedri",
        age: 21,
        nationality:'spanish',
        team:'barcelone',
        img:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt60e0570929574910/64149e8572da236419c696f2/335071325_930879951248406_2296145525242076249_n.jpg"
};
          </div>
    </>
  );
}

export default App;
