import React from 'react'

const User = () => {
 return(
     <div>
         <div>
             <div className="user">
                <img src="https://pbs.twimg.com/profile_images/1186876544263872512/MA8AZsIV_400x400.jpg" alt="user" />
                <p>Random Garfield</p>
                <p>15h</p>
             </div>
             <div className="comments">
                 <div><span role="img">👀</span> 200 </div>
                 <div><span role="img">♥ </span> 30 </div>
                 <div><span role="img">💬</span> 5 </div>
             </div>
         </div>

     </div>
 )


}

export default User