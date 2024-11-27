import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './component/MyNav'
import MyFooter from './component/Myfooter'
import sfondo from './data/Libreria.jpg'
import books from './data/books/fantasy.json'
import Mybook from './component/Mybook'

function App() {
  return (
    <div className="App">
      <header>
        <MyNav/>
      </header>
      <main className='sfondo'>
        <Mybook books={books}/>
      </main>
    <footer>
      <MyFooter/>
    </footer>
    </div>
  )
}

export default App
