import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Student from './components/Student'

import CreateStudent from './components/CreateStudent'

import UpdateStudent from './components/UpdateStudent'


function App(){
  return(
    <div className = "app">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Student />} />
        <Route path = "/create" element = {<CreateStudent />} />
        <Route path = "/update/:id" element = {<UpdateStudent />} />
      </Routes>
      </BrowserRouter>

    </div>
  )

}

export default App