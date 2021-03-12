import React from 'react'

export default function Test(props) {
    const{click} = props;
    console.log(click);
    return(
        <div>
            {click}
        </div>
    )
}