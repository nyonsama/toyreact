import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import TicTacToe from './routes/TicTacToe';
import About from './routes/About';
import Home from './routes/Home';
import MyNavbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Container className='d-flex justify-content-md-center mt-2 mb-2 p-2 bg-light bg-opacity-50'>
        <Row>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
