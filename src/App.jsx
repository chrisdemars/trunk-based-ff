import Logo from './components/Logo/Logo';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';
import './index.scss'

const App = () => {
  return (
    <div className='navbar-wrapper'>
      <h1 className='title'>Trunk Based Development with Feature Flags</h1>
      <header className='header'>
        <Logo />
        <PrimaryNav />
      </header>
    </div>
  );
};

export default App
