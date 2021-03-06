import './App.css';
import Row from './Components/Row';
import requests from './Components/request';
import Banner from './Components/Banner';
import Header from './Components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
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
