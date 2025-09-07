import '../styles/css/App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      SPA 2 - React Router DOM
      <header>
        <Header />
      </header>
      <main>
        <aside>
          <Navigation />
        </aside>
        <section className='blog'>
          {/* <Outlet> will render the component for the matched nested route */}
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;