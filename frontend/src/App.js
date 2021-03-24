import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import EventoScreen from './screens/EventoScreen';
import AdminScreen from './screens/AdminScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import NotFound from './screens/NotFound';
import Footer from './components/Footer'
import TempHeader from './components/TempHeader';


const App = () => {
  return (
    <Router>
      <Header />
      <Container>
      <TempHeader />
        <main className='py-3'>
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/evento/:id">
              <EventoScreen />
            </Route>
            <Route path="/admin">
              <AdminScreen />
            </Route>
            <Route path="/user">
              <UserScreen />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
