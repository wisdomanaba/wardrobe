import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import {WelcomeContainer} from './element'

const Home  = ()=> {
   return (
        <WelcomeContainer>
            <div className="container">
                <div className="landing">
                    <h3><span>My</span>TopNotch<span>Wardrobe</span></h3>
                    <p>Need styling counsel? Look no farther than My TopNotch <br/> Wardrobe - where you'll get hand picked and <br/> customized alters custom-made to your style.</p>
                </div>
                <div className="signup">
                    <h2>How does it work?</h2>
                    <div>
                        <ul>
                            <li className="step-1">
                                <p>Take the quiz to find the perfect shapes and styles for you</p>
                            </li>
                            <li className="step-2">
                                <p>From Rebel Girl to Fashionista, discover your Style Persona</p>
                            </li>
                            <li className="step-3">
                                <p>Tell us what like and dislike to keep your edits up to date</p>
                            </li>
                            <li className="step-4">
                                <p>Check your wardrobe and inbox for edits tailored to you</p>
                            </li>
                        </ul>
                        <Link to={"signup"}><button>TAKE THE QUIZ</button></Link>
                    </div>
                </div>
                <div className="signin">
                    <h2>View your Wardrobe</h2>
                    <p>Your latest edit is waiting. Tell us what you like <br/> and dislike to keep your wardrobe updated.</p>
                    <Link to={"signin"}><button>SIGN IN</button></Link>
                </div>
            </div>
        </WelcomeContainer>
   )
}

export default Home