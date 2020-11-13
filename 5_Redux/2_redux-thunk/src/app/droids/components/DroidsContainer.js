import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getAllDroids} from '../duck/operations'

const DroidsContainer = ({droids,getAllDroids}) => {

    useEffect(() => {
        getAllDroids();
        // console.log("ComponentDidMount");
    },[])


    return (
        <ul>
            {droids.list.map((droid,i)=> 
                <li key={i}>{droid}</li>
                )}
        </ul>
    );
}
// przyjmuje stan i zwraca obiekt z zawartością stanu znajdującą się pod kluczem droids
const mapStateToProps = state => ({
    droids : state.droids
})

// funkcja wywołująca funkcję dispatch z parametrem funkcji, która ma być wykonana
const mapDispatchToProps = dispatch => ({
    getAllDroids : ()=> dispatch(getAllDroids())
})


// funkcja connect
// 1. argument - mapowanie elementów ze stora, które mają być przyjęte w komponencie jako propsy
// 2. obiekt przyjmujący dane z API
export default connect(mapStateToProps, mapDispatchToProps)(DroidsContainer);

