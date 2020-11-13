// akcje generują state
import actions from "./actions";

const fetchDroids = async () => {
    const response = await fetch('http://localhost:3001/droidsTypes', { method: 'GET' })
    const json = await response.json()
    console.log('json');
    return json
};

// thunk - zwraca funkcję asynchroniczną i przekaże w niej dispatcha powodując zmianę statu
// export const getAllDroids = () => {

export const getAllDroids = () =>
  async (dispatch) => {
    const droids = await fetchDroids()
    console.log(droids);
    droids['list'].map(droid => dispatch(actions.add(droid)))
  }
