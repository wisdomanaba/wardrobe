import React,{useState,useContext,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {SettingsContainer} from './element'
import {UserContext} from '../../App'
import BreadCumb from './BreadCumb'
import M from 'materialize-css'

const SignIn  = ()=>{

    const [loading, setLoading] = useState(false)

    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [image,setImage] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")

    useEffect(()=>{
        if(image){
         const data = new FormData()
         data.append("file",image)
         data.append("upload_preset","s0qhad82")
         data.append("cloud_name","cnq")
         fetch("https://api.cloudinary.com/v1_1/devwian/image/upload",{
             method:"post",
             body:data
         })
         .then(res=>res.json())
         .then(data=>{
     
        
            fetch('/updatepic',{
                method:"put",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    pic:data.url
                })
            }).then(res=>res.json())
            .then(result=>{
                console.log(result)
                console.log(state)
                localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
                dispatch({type:"UPDATEPIC",payload:result.pic})
                // window.location.reload()
            })
        
         })
         .catch(err=>{
             console.log(err)
         })
        }
     },[image])

    const updatePhoto = (file)=>{
        setImage(file)
    }

   return (
       <SettingsContainer>
            <BreadCumb title="settings" />
            <div className='container'>
                <div className='settings'>
                    <div className='settings-nav'>
                        <Link to="/profile/settings"><div className="active">Edit Profile</div></Link>
                        <div>Change Password</div>
                        <div>Logout</div>
                    </div>
                    <div className='settings-form'>
                        <div className="profile-pic">
                            <div>
                                <img src={state?state.pic:"loading"} />
                            </div>
                            <div>
                                <h5>{state?state.username:"loading"}</h5>
                                <label htmlFor="settings-pic">Change Profile Photo</label>
                                <input type="file" id="settings-pic" onChange={(e)=>updatePhoto(e.target.files[0])} />
                            </div>
                        </div>
                        <form>
                            <div>
                                <label>Username</label>
                                <input type="text" value={state?state.username:"loading"} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text" value={state?state.email:"loading"} />
                            </div>
                            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                                // onClick={()=>PostData()}
                            >
                                    {loading ? <i class="fa fa-spinner fa-spin"></i> : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
      </SettingsContainer>
   )
}


export default SignIn