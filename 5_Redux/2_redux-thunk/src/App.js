
import './App.css';
import {createStore } from 'redux'
import rootReducer from './reducers'

import {droidActions} from './app/droids/duck'

// ---------------------------- Store -----------------------

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.store = store 

store.dispatch(droidActions.add('D-O'))


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
