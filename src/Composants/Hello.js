import React from 'react';

const Hello=() => {
    // return(
    //     <div>
    //         <h3>Hello my baby</h3>
    //     </div>
    // )
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Bonjour mon bebe'))
}
export default Hello;