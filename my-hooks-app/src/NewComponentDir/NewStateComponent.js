import React, {useState} from 'react';
import './NewStateComponent.css' // import anywher atleast once

/** Note that whenever a state changes,
 * the whole component below updates */
function NewStateComponent({step=1}) {
  
  /** useState:
  *    + input: initial state (any js object)
  *    + returns: array with
  *        - idx 1: function 
  *                  + takes new state as input to update 
  *                    the component by which it updates state 
  *        - idx 0: new state (any js object)
  *                  + The input ot function @idx1
  * 
  * Note:
  * When input to function @idx1 is sent, the whole component
  * updates. But this time, `useState` sends new state @idx1
  * which can be rendered
  */
  var [curState, updateState] = useState(0) // intially `curState` is `0`

  // Inline style: use js map
  // use same css properties but w/ camelCase
  var someStyle = {
    color : curState >= 0 ? 'green' : 'red' 
  }

  return (
    <div>
      <h1 style={someStyle}>{curState}</h1>
      <button 
        className='blackBorder green'
        onClick={ () => updateState(curState + step) }>
          +{step}
      </button> 
      &nbsp; 
      <button 
        className='blackBorder red'
        onClick={ () => updateState(curState - step) }>
          -{step}
      </button>
    </div>
  );
}
  
export default NewStateComponent;