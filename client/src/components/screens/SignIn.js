import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {SignInContainer} from './element'
import {UserContext} from '../../App'
import M from 'materialize-css'
const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        setLoading(true)
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
              setLoading(false)
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }

   return (
       <SignInContainer>
            <div className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Wardrobe</h2>
                        <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>setPasword(e.target.value)}
                        />
                        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                        onClick={()=>PostData()}
                        >
                            {loading ? <i class="fa fa-spinner fa-spin"></i> : "Login"}
                        </button>
                        <h6>
                            <Link to="/reset">Forgot password?</Link>
                        </h6>
                        <h6>Dont have an account? <Link to="/signup"><span>Sign Up</span></Link></h6>
                    </div>
            </div>
      </SignInContainer>
   )
}


export default SignIn