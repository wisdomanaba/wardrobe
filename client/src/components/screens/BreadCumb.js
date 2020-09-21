import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {BreadCumbContainer} from './element'
import {UserContext} from '../../App'
import M from 'materialize-css'

const BreadCumb  = (props)=> {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [loading, setLoading] = useState(false)
   return (
       <BreadCumbContainer>
            <div className="container">
                <div>
                    <Link to="/">Home</Link>
                    <i className="material-icons" style={{color:"#1E88E5", fontSize: "13px", fontWeight: "600"}}>arrow_forward</i>
                    <span>{props.title}</span>
                </div>
            </div>
      </BreadCumbContainer>
   )
}


export default BreadCumb