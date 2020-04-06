import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios'
import NewGenre from './NewGenre'
import Genre from './Genre'
import EditGenre from './EditGenre'
import Series from './Series'
import NewSerie from './NewSerie'
import InfoSerie from './InfoSerie'
//importando a rota 
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
//   const [data, setData] = useState({})
//   useEffect(() => {
//     console.log('useEfect App')
//     axios.get('/api').then(res => {
//       setData(res.data)
//     })
//   }, [] )
  return (
    <Router>
      <div >
        <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/genre' exact component={Genre} />
            <Route path='/genre/new' exact component={NewGenre} />
            <Route path='/genre/edit/:id' exact component={EditGenre} />
            <Route path='/series' exact component={Series} />
            <Route path='/series/new' exact component={NewSerie} />
            <Route path='/series/info/:id' exact component={InfoSerie} />
          </Switch>  
       {/* <pre>{JSON.stringify(data)}</pre> */}
      </div>
    </Router> 
  );
}

export default App 
