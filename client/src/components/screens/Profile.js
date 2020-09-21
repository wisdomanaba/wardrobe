import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {Link ,useHistory} from 'react-router-dom'
import BreadCumb from './BreadCumb'

const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })
    },[])
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
               //window.location.reload()
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
        <div>
            <BreadCumb title="profile" />
            <div style={{maxWidth:"750px",margin:"3.5em auto"}}>
                <div style={{
                    margin:"18px 0px",
                    borderBottom:"1px solid grey",
                    marginBottom: "20px",
                    paddingBottom: "40px"
                }}>

                
                <div style={{
                    display:"flex"
                    
                }}>
                    <div style={{
                        width: "30%"
                    }}> 
                        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                        src={state?state.pic:"loading"}
                        />
                        
                    </div>
                    <div style={{
                        // flexGrow: 2
                    }}>
                        <h4 style={{ fontSize: "28px" }}>{state?state.username:"loading"} <Link to="/profile/settings"><i className="small material-icons" style={{color:"#1E88E5", fontSize: "20px"}}>settings</i></Link></h4>
                        <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                            <h6><b>{mypics.length}</b> posts</h6>
                            <h6><b>{state?state.followers.length:"0"}</b> followers</h6>
                            <h6><b>{state?state.following.length:"0"}</b> following</h6>
                        </div>

                    </div>
                    </div>
                
                    {/* <div className="file-field input-field" style={{margin:"10px"}}>
                        <div className="btn #64b5f6 blue darken-1">
                            <span>Update pic</span>
                            <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div> */}
                </div>      
                <div className="gallery">
                    {
                        mypics.map(item=>{
                            return(
                                <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                            )
                        })
                    }

                
                </div>
            </div>
       </div>
   )
}


export default Profile