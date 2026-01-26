import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/video/:roomID' element = {<Video/>}/>
      </Routes>
    </>
  )
}

export default App
