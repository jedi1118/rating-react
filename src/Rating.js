import React, { useState } from 'react';

import './Rating.css';
import EMPTY from './img/empty.png';
import FILLED from './img/filled.png';

const RATING_MAX = 5;

function Rating(param) {
    const [state, setState] = React.useState({ rating: param.rating, first: "hello", second: "world" });
    console.log('===>', state);
    const stars = [];
    for(let i = 1; i <= RATING_MAX; i++){
        console.log(state.rating, i);
        if(state.rating && i <= state.rating) {
            stars.push(<img src={FILLED} onClick={()=>setRating(i)}/>);
        } else {
            stars.push(<img src={EMPTY} onClick={()=>setRating(i)}/>);
        }
    }
    return (
        <div id="rating">
            {stars}
        </div>
    )

    function setRating(idx) {
        console.log('setRating:' , idx);
        setState({rating: idx});
    }
}

export default Rating;