import Header from './components/Header';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Order id="1909" />
      </main>

      <Footer />
    </>
  );
}

export default App;
