import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Features from './pages/Features'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/video/:roomID' element = {<Video/>}/>
        <Route path='/features' element = {<Features/>}/>
      </Routes>
    </>
  )
}

export default App
