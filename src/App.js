import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import  Body  from './components/Body';
import { Provider } from 'react-redux';
import  store from './store';

function App() {
  return (
    <Provider store={store}>

<div className="App">
     <Header />
     <div className='flex'>
      <Sidebar/>
      <Body/>
     </div>
    </div>

    </Provider>
    
  );
}

export default App;
