import React,{useContext,useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import {CreatePostContainer} from './element'
import BreadCumb from './BreadCumb'


const CretePost = ()=>{

    const [loading, setLoading] = useState(false)

    const history = useHistory()
    const [normUserBody,setNormUserBody] = useState("")
    const [normUserImage,setNormUserImage] = useState("")
    const [normUserUrl,setNormUserUrl] = useState("")

    const [dressTitle,setDressTitle] = useState("")
    const [dressSize,setDressSize] = useState("")
    const [dressColor,setDressColor] = useState("")
    const [stylistBody,setStylistBody] = useState("")
    const [stylistImage,setStylistImage] = useState("")
    const [stylistUrl,setStylistUrl] = useState("")
    const [gender,setGender] = useState("male")

    const {state,dispatch} = useContext(UserContext)

    useEffect(()=>{
        if(stylistUrl){
         fetch("/stylist/createpost",{
             method:"post",
             headers:{
                 "Content-Type":"application/json",
                 "Authorization":"Bearer "+localStorage.getItem("jwt")
             },
             body:JSON.stringify({
                dress_title:dressTitle,
                dress_size:dressSize,
                dress_color:dressColor,
                body:stylistBody,
                gender,
                pic:stylistUrl
             })
         }).then(res=>res.json())
         .then(data=>{
     
            if(data.error){
               M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
                history.push('/')
            }
         }).catch(err=>{
             console.log(err)
         })
     }
     })


    useEffect(()=>{
       if(normUserUrl){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                body:normUserBody,
                pic:normUserUrl
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    })
  
    const normUserPostDetails = ()=>{

        setLoading(true)

        const data = new FormData()
        data.append("file",normUserImage)
        data.append("upload_preset","s0qhad82")
        data.append("cloud_name","cnq")
        fetch("https://api.cloudinary.com/v1_1/devwian/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setNormUserUrl(data.url)
            console.log(data.url)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })
    
    }

    const stylistPostDetails = ()=>{
        
        setLoading(true)

        const data = new FormData()
        data.append("file",stylistImage)
        data.append("upload_preset","s0qhad82")
        data.append("cloud_name","cnq")
        fetch("https://api.cloudinary.com/v1_1/devwian/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setStylistUrl(data.url)
            console.log(data.url)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })
    
    }
 
   return (
        <CreatePostContainer>
            <BreadCumb title="create post" />
            {
                state 
                    ? state.role === "stylist" 
                        ?   <div className="card input-filed"
                            style={{
                                margin:"3em auto",
                                maxWidth:"350px",
                                padding:"40px",
                                textAlign:"center"
                            }}
                            >
                                <input 
                                type="text"
                                placeholder="dress title"
                                value={dressTitle}
                                onChange={(e)=>setDressTitle(e.target.value)}
                                />
                                <input 
                                type="number"
                                placeholder="dress size"
                                value={dressSize}
                                onChange={(e)=>setDressSize(e.target.value)}
                                />
                                <input 
                                type="text"
                                placeholder="dress color"
                                value={dressColor}
                                onChange={(e)=>setDressColor(e.target.value)}
                                />
                                <input 
                                type="text"
                                placeholder="Product details"
                                value={stylistBody}
                                onChange={(e)=>setStylistBody(e.target.value)}
                                />
                                <select value={gender} onChange={(e)=>setGender(e.target.value)} style={{display:"block"}}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="unisex">Unisex</option>
                                </select>
                                <div className="file-field input-field">
                                <div className="btn #64b5f6 blue darken-1">
                                    <span>Uplaod Image</span>
                                    <input type="file" onChange={(e)=>setStylistImage(e.target.files[0])} />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                                </div>
                                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                                onClick={()=>stylistPostDetails()}>
                                    {loading ? <i class="fa fa-spinner fa-spin"></i> : "Submit post"}
                                </button>
                    
                            </div>
                        : <div className="card input-filed"
                        style={{
                            margin:"3em auto",
                            maxWidth:"350px",
                            padding:"40px",
                            textAlign:"center"
                        }}
                        >
                             <div className="file-field input-field">
                                 <div className="btn #64b5f6 blue darken-1">
                                     <span>Uplaod Image</span>
                                     <input type="file" onChange={(e)=>setNormUserImage(e.target.files[0])} />
                                 </div>
                                 <div className="file-path-wrapper">
                                     <input className="file-path validate" type="text" />
                                 </div>
                             </div>
                             <input
                               type="text"
                               placeholder="caption..."
                               value={normUserBody}
                               onChange={(e)=>setNormUserBody(e.target.value)}
                             />
                             <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                             onClick={()=>normUserPostDetails()}> {loading ? <i class="fa fa-spinner fa-spin"></i> : "Submit post"} </button>
                 
                        </div>
                    : "0" 
            }
        </CreatePostContainer>
   )

}


export default CretePost