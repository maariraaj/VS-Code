import React from 'react' 

function Comment(props){
    return (
        <div>
            <button>{props.commentName}</button>
        </div>
    )
}

export default Comment