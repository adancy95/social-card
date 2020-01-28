import React, {useState} from 'react'

const Title = () => {
    const [title, setTitle] = useState("")

    return(
        <div>
           <form>
                <label htmlFor="title">
                    Title:  
                    <input type="text" name="title" value={title} onChange={ e => {setTitle(e.target.value)}} />
                 </label>
             
           </form>
        </div>
    )
}

export default Title