import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {FooterContainer} from './element'
import {UserContext} from '../../App'


const Home  = ()=> {
    const {state,dispatch} = useContext(UserContext)

   return (
        <FooterContainer>
            <hr />
            <div className="container">
                <div className="main-footer">
                    <div className="footer-social">
                        <span>Follow us</span>
                        <div className="footer-icons">
                            <Link to={state?"/":"/welcome"} className="brand-logo">
                                <img src="https://res.cloudinary.com/devwian/image/upload/v1600240200/s0qhad82/SVG/instagram_ww07aw.svg" alt="icons" />
                            </Link>
                            <Link to={state?"/":"/welcome"} className="brand-logo">
                                <img src="https://res.cloudinary.com/devwian/image/upload/v1600240200/s0qhad82/SVG/facebook_a12knb.svg" alt="icons" />
                            </Link>
                            <Link to={state?"/":"/welcome"} className="brand-logo">
                                <img src="https://res.cloudinary.com/devwian/image/upload/v1600240200/s0qhad82/SVG/twitter_fkhuqv.svg" alt="icons" />
                            </Link>
                            <Link to={state?"/":"/welcome"} className="brand-logo">
                                <img src="https://res.cloudinary.com/devwian/image/upload/v1600240200/s0qhad82/SVG/snapchat_i6hlos.svg" alt="icons" />
                            </Link>
                        </div>
                    </div>
                    <div className="brand">
                        <Link to={state?"/":"/welcome"} className="brand-logo">Wardrobe</Link>
                    </div>
                </div>
            </div>
        </FooterContainer>
   )
}

export default Home