import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import './index.scss'

const App = () => {
  return (
    <div className='navbar-wrapper'>
      <h1 className='title'>Hey there</h1>
      <header className='header'>
        <Logo />
        <Navbar />
      </header>
    </div>
  );
};

export default App
