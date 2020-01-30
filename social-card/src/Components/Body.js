import React, {useState} from 'react'

const Body = () =>{
    const [body, setBody] = useState("")
    const [bodyHeader, setBodyHeader] = useState("")
    return(
        <div>
            <form>    
            <div>
                <h3>Body Header:</h3>
                <input name="bodyHeader" type="text" value={bodyHeader} onChange={e => {setBodyHeader(e.target.value)}} />
            </div>
            <div>
                <h3>Body</h3>
                <input name="body" type="text" value={body} onChange={e => {setBody(e.target.value)}} />
            </div>
            </form>
        </div>
    )
}

export default Body