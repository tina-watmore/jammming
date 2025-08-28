import { Search } from "./components/Search/Search";
import { ResultsList } from "./components/ResultsList/ResultsList";
import { Playlist } from "./components/PlayList/PlayList";

function App() {

  return (
    <>
      <header className="header-bar">
        <h1>Jammming!</h1>
      </header>
      <main>
        <div className="container">
          <Search />  
          <div className="display-container">   
            <ResultsList />   
            <Playlist />
          </div>
        </div>
      </main>
      <footer>
        <p>By Tina W</p>
      </footer>
    </>
  )
}

export default App
