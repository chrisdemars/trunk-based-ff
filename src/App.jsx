import Logo from './components/Logo/Logo';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';
import './index.scss'
import { FFContextProvider } from '@harnessio/ff-react-client-sdk'

const App = () => {
  return (
    <FFContextProvider 
      apiKey='b60de57f-159e-4439-bef6-d9c90d32d97a' 
      target={{name:'name', identifier: 'id'}}>
    <div className='navbar-wrapper'>
      <h1 className='title'>Trunk Based Development with Feature Flags</h1>
      <header className='header'>
        <Logo />
        <PrimaryNav />
      </header>
    </div>
    </FFContextProvider>
  );
};

export default App
