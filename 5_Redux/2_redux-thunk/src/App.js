import logo from './logo.svg';
import './App.css';

import {createStore, combineReducers, bindActionCreators} from 'redux'


// ---------- Zmienne przechowujące stan wyjściowy ----------
// wyjściowy state
const initialDroids = {
  droidsName: 'Favorite',
  list: [
    'R2D2', 'C3PO', 'BB8'
  ]
}

const initialDroidClasses = {
  listName: 'working droids',
  list : [
    "Protocol droid", "Astromech droid", "Power droid", "Utility droid"
  ]
}


// ---------------------------- Reduktory (stan) -----------------------

// reduktory (reducers)
function droids(state=initialDroids, action) {
  switch (action.type) { // sprawdza typ akcji
    case 'RESET_DROIDS': // nazwa wywołania akcji (np. window.store.dispatch({type: 'RESET'}) przy założeniu że -> window.store = store) -> zwraca pustą tablicę
      return {
        ...state, // kopiowanie atrybutów, które nie mają zostać zmienione
        list: []
      }
    case 'ADD_DROID': // nazwy akcji nie mogą się pokrywać
      return {
        ...state,
        list: [...state.list, action.item]
        // (np. window.store.dispatch({type: 'ADD', droid: 'D-O'}) przy założeniu że -> window.store = store) - spowoduje dodanie nowego droida
      }
    default: 
      return state
  }
}

function droidClasses(state=initialDroidClasses, action) {
  switch (action.type) {
    case 'RESET_DROID_CLASS':
      return {
        ...state,
        list: []
      }
    case 'ADD_DROID_CLASS':
      return {
        ...state,
        list: [...state.list, action.item]
      }
    default: 
      return state
  }
}

// łącznie reduktorów w obiekt mapujący akcje reduktorów
const allReducers = combineReducers({droids, droidClasses}) //  obiekt mapujący akcje stora na reducer

// ---------------------------- Store -----------------------
// store + REDUX_DEVTOOLS_EXTENSION
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// ---------------------------- Kreator akcji -----------------------
// kreator akcji - funkcja, która opakowuje obiekt przekazywany do dispatch'a
const addDroid = item => ({type: 'ADD_DROID', item})
const reset = () => ({type: 'RESET_DROIDS'})

// wywołanie kreatora akcji
store.dispatch(addDroid('ME-8D9'))

// łączenie kreatorów akcji - obiekt w którym przekazywane są różne funkcje + obiekt dispatch
const droidActions = bindActionCreators({add: addDroid, reset}, store.dispatch)

// odwołanie się do metody łączącej w sobie akcje (dispatch już jest wpisany)
droidActions.add('DN-LD')
droidActions.reset()



// ---------------------------- window.store -----------------------
window.store = store // przypisuje wyżej stworzenie store do obiektu window.store pozwala na wpisanie w konsolę window.store.getState() (zwraca wtedy state)



function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
