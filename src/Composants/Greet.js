import React from 'react';

const Greet=(props) =>{
    console.log(props)
return(
    <div>
        <h3>
            Hello {props.name} a.k.a {props.heroName}
        </h3>
        {props.children}
    </div>
)       
}
export default Greet;