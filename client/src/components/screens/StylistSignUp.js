import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {SignUpContainer} from './element'
import M from 'materialize-css'

const SignIn  = ()=>{

    const [loading, setLoading] = useState(false)

    const history = useHistory()
    const [username,setUsername] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    })

    const uploadPic = ()=>{

        setLoading(true)

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
            setLoading(false)
            setUrl(data.url)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }
    const uploadFields = ()=>{

        setLoading(true)

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,
                password,
                email,
                pic:url,
                role: "stylist"
            })
        }).then(res=>res.json())
        .then(data=>{

            setLoading(false)

           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{

            setLoading(false)
            console.log(err)
        })
    }
    const PostData = ()=>{
        setLoading(true)
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
       
    }


   return (
        <SignUpContainer>
            <div className="container">
                {/* {surveyRender}
                {onSurveyCompleteion} */}
                <div className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Wardrobe</h2>
                        <p>Want to become a stylist? Kindly SignUP :)</p>
                        <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value.toLowerCase())}
                        />
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
                        <div className="file-field input-field pic-field">
                            <div className="btn #64b5f6 blue darken-1">
                                <span>Upload pic</span>
                                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                        onClick={()=>PostData()}
                        >
                            {loading ? <i class="fa fa-spinner fa-spin"></i> : "SignUP"}
                        </button>
                        <h6>
                            <Link to="/signin">Already have an account ?</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </SignUpContainer>
   )
}


export default SignIn