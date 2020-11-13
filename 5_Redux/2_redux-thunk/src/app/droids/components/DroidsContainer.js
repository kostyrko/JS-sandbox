import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux'
import {getAllDroids} from '../duck/operations'

const DroidsContainer = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDroids())

        // dla przypomnienie - co się tam dzieje?
        // dispatch({type: 'ADD_DROID', item: 'D-O'})
    }, [])


    // pobranie wycinka statu przy pomocy -> useSelector
    const droids = useSelector((state) => state.droids);
    console.log(droids);



    return (
        <ul>
            {droids.list.map((droid,i)=> 
                <li key={i}>{droid}</li>
                )}
        </ul>
    );
}

export default DroidsContainer;

