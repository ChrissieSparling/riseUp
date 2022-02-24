import React from 'react';
// ToDo: import any other components of styles that will be needed for this component
import './Components.css'
const Content = (props) => {
return (
    <div>
        <h1 className="test">
           {props.children}
        </h1>
    </div>
)
}
export default Content