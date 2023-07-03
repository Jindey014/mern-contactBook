import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Contactlist from './components/Contactlist'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" exact Component={Contactlist}></Route>
          <Route path="/create" Component={AddContact}></Route>
          <Route path="/edit/:id" Component={EditContact}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
