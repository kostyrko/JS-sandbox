import React from 'react';
import {connect} from 'react-redux'
import actions from '../duck/actions'

const DroidsForm = (props) => {

    const droidInput = React.createRef()

    const addDroid = event => {
        event.preventDefault()
        // podanie stora na którym ma się dokonać operacja dodania
        // add jest kluczem w obiekcie zwróconym przez mapDispatchToProps
        props.add(droidInput.current.value)
        console.log('form', droidInput.current.value)
        droidInput.current.value = ''
    }

    return (
        <form onSubmit={addDroid}>
            <input ref={droidInput}/>
            <button type="submit">Add droid</button>
        </form>
    );
}

// przygotowanie obiektu, który zawiera funkcje jakie należy wywołać na storze
const mapDispatchToProps = dispatch => ({
    add: droid => dispatch(actions.add(droid))
})

// null ponieważ state nie jest sczytywany
export default connect(null, mapDispatchToProps)(DroidsForm);
