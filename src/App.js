import './App.css';
import Row from './Components/Row';
import { requests } from '././request';

function App() {
  return (
    <div className='App'>
      <h3>Hello</h3>
      <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title='Trending' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
