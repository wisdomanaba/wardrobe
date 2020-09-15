import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {SignUpContainer} from './element'
import M from 'materialize-css'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'

const SignIn  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    const [state,setState] = useState({

    })
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])

    Survey
        .StylesManager
        .applyTheme("modern")
    
    const onCompleteComponent = () => {
        setState({
            isCompleted: true
        })
    }

    var json = {
        "title": "Take the Quiz",
        "pages": [
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "customer_role",
                        "title": "How old are you?",
                        "choices": [
                            "14-24",
                            "25-34",
                            "35-44",
                            "45-54",
                            "55-64",
                            "65+",
                        ]
                    }
                ]
            }, {
                "name": "page2",
                "elements": [
                    {
                        "type": "imagepicker",
                        "name": "adventurous",
                        "title": "How adventurous is your style?",
                        "choices": [
                            {
                                "value": "More classic",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/adventurous/adventurous_1-b9e1895d5882cd5e8bf1e8fd2150cfa1c6c3c4597f7a3b773c03dcecd7e5c922.jpg"
                            }, {
                                "value": "Classic",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/adventurous/adventurous_2-1d4ac455c74bf1d298d3304d408afa8ab2495836edac2e1d8dd8f275b7d18917.jpg"
                            }, {
                                "value": "Neutral",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/adventurous/adventurous_3-99d1ea14cb7c94568e7f0a4bcca546ed77a7256577300253cc553d2a56b1747f.jpg"
                            }, {
                                "value": "Out there",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/adventurous/adventurous_4-13246aa1179c4340ff2fceb28afbd6d5e822cb16cf8510f38f07461f5430d6d6.jpg"
                            }, {
                                "value": "More out-there",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/adventurous/adventurous_5-324fbe4b58aaa4776b14ba3ac14927ffdfbf0630d62a5af41deb1df058ab5a1d.jpg"
                            }
                        ]
                    }
                ]
            }, {
                "name": "page3",
                "elements": [
                    {
                        "type": "imagepicker",
                        "name": "adventurous",
                        "title": "Whose style do you like the most?",
                        "choices": [
                            {
                                "value": "Cool-girl chic",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/style_icon/alexa_chung-533c2565e00fa545010061e4bec67ac5fc34f60572577c619d725170b29ec80e.jpg"
                            }, {
                                "value": "Polished glam",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/style_icon/beyonce-f261fb783ebcdd8997fe35cb7de5fe2f9247e3c22e5a452bd221103a911c94b8.jpg"
                            }, {
                                "value": "Rock girl edge",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/style_icon/kate_moss-d1b3b1950220db8c3bff9ce609c7f5d5849eebcd94bbce586a15fbc814a290db.jpg"
                            }, {
                                "value": "Eccentric cool",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/style_icon/florence_welch-644c38075e43c3af6ed04383726cf0068306e14204c96e4e073a535d00ff51b6.jpg"
                            }, {
                                "value": "Laid-back tomboy",
                                "imageLink": "https://dvi6scvzkvo7z.cloudfront.net/assets/fashion_fingerprints/style_icon/cara_delevingne-ed93e7853674bd23472ba4687bdccdf131915237026646783d1173a6287a919d.jpg"
                            }
                        ]
                    }
                ]
            }, {
                "name": "page4",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "product_alternative",
                        "title": "What would you use as an alternative if [the product] were no\nlonger available?",
                        "hasOther": true,
                        "choices": [
                            "Alternative 1",
                            "Alternative 2",
                            "Alternative 3",
                            "Alternative 4",
                            "Alternative 5",
                            "Alternative 6"
                        ],
                        "otherText": "Other (please name)",
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "product_benefit",
                        "title": "What is the primary benefit that you have received from the\nproduct?",
                        "hasOther": true,
                        "choices": [
                            "Benefit 1",
                            "Benefit 2",
                            "Benefit 3",
                            "Benefit 4",
                            "Benefit 5",
                            "Benefit 6"
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "product_recommend",
                        "title": "Have you recommended the product to anyone?",
                        "choices": ["Yes", "No"]
                    }
                ]
            }, {
                "name": "page4",
                "elements": [
                    {
                        "type": "rating",
                        "name": "nps_score",
                        "title": "How likely are you to recommend the product to a friend or\ncolleague? ",
                        "isRequired": true,
                        "rateMin": 0,
                        "rateMax": 10,
                        "minRateDescription": "Most unlikely",
                        "maxRateDescription": "Most likely"
                    }, {
                        "type": "radiogroup",
                        "name": "favorite_functionality",
                        "title": "What's your favorite functionality / add-on for the product?",
                        "hasOther": true,
                        "choices": [
                            "Feature 1",
                            "Feature 2",
                            "Feature 3",
                            "Feature 4",
                            "Feature 5",
                            "Feature 6"
                        ],
                        "colCount": 3
                    }, {
                        "type": "comment",
                        "name": "product_improvement",
                        "title": "How could the product be improved to better meet your\nneeds?"
                    }
                ]
            }
        ]
    }

    const survey = new Survey.Model(json);

    var surveyRender = !state.isCompleted ? (
        <Survey.Survey
            model={survey}
            showCompletedPage={false}
            onComplete={onCompleteComponent}
        />
    ) : null

    var onSurveyCompleteion = state.isCompleted ? (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Wardrobe</h2>
                <p>Want us to follow-up? Kindly SignUP :)</p>
                <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="number"
                placeholder="phone number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPasword(e.target.value)}
                />
                <div className="file-field input-field">
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
                    SignUP
                </button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>
            </div>
        </div>
    ) : null


    survey
            .onComplete
            .add(function (res) {
                var surveyData = res.data;
                console.log(surveyData)
        })

    const uploadPic = ()=>{
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
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const uploadFields = ()=>{
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
                name,
                password,
                email,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    const PostData = ()=>{
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
       
    }


   return (
        <SignUpContainer>
            <div className="container">
                {surveyRender}
                {onSurveyCompleteion}
            </div>
        </SignUpContainer>
   )
}


export default SignIn