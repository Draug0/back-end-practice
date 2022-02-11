import './App.css';
import 'bulma/css/bulma.min.css'
import Cardbox from './components/CardBox';


function App() {
  return (
    <div>
      <section className='hero is-info has-text-centered mb-3'>
        <div className='hero-body'>
          <p className='title'>
            USUARIOS
          </p>
        </div>
      </section>
      <Cardbox />
    </div>
  );
}

export default App;
