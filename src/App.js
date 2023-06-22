import Nav from './components/Nav'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Form from './components/Form'
function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      {/* <Login /> */}
      <Form />
    </div>
  );
}

export default App;
