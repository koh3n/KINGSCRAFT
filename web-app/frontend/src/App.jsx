import Navbar from './components/Navbar.jsx'
import Star from './components/Star'
import Dashboard from './pages/Dashboard.jsx'
import { BrowserRouter as Router, Route, Switch, Redirct } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import Landing from './pages/Landing.jsx';

function App() {
  return (
    <>
      <Star/>
      <AuthProvider>
        <Navbar />  
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App