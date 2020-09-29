import React from 'react'

function Table(props) {
    return (
       <div className="" style={{}}>
         <p>
         <table className="table table-striped table-hover table-bordered">
            {props.children}
            </table>
         </p>
       </div>
        
    )
}

export default Table
