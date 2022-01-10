import React from 'react'; 
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
import vid from '../components/videos/video-1.mp4';
import { Link } from 'react-router-dom';
import {Link as Link_scroll} from 'react-scroll';

function HeroSection() {
    return (
        <div class='hero-container'>
          {/* <video src="./videos/video-2.mp4" autoPlay loop muted/>  */}
          <video src={vid} autoPlay loop muted />
          <h1>BLOG</h1>
          <p>what are you wating for</p>
          <div className="hero-btns">
          <Link to='/services'>
          <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                ADD NEW BLOG
           </Button>
           </Link>
           <Link_scroll to='cards' smooth={true} duration={500}>
           <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' to='Card'>
                READ BLOGS<i className='far fa-play-circle'/>
            </Button>
            </Link_scroll>
         </div>
        </div>

    )
}

export default HeroSection
