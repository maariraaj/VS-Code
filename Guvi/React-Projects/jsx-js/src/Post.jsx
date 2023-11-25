import React from 'react' 
import Like from './Like'
import Comment from './Comment'


function Post(){
    const nameLikePost1 = "Like Post 1";
    // const nameCommentPost1 = "Comment Post 1";

    const nameLikePost2 = "Like Post 2";
    const nameCommentPost2 = "Comment Post 2";

    return (
        <div>
           <Like likeName={nameLikePost1}></Like>
           <Comment commentName={"Comment Post 1"}></Comment>   

           <Like likeName={nameLikePost2}></Like>
           <Comment commentName={nameCommentPost2}></Comment>

        </div>
    )
}

export default Post