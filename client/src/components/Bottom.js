import React from 'react'
import '../styles/bottom.scss'
function Bottom() {
    return (
        <div className='bottom__wrapper'>
            <p className='p'>
            Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate SHIB information.
            <br></br>
            Using the links below, you can join our various groups alongside the <span>1M+</span> other members of the ShibArmy.</p>
            <div  className='a_bottom'>Click here to search for your preferred country!
             <div className='divider'></div>
             </div>

            <div className='bootom_social-link'>
                <a className='link_general'>
                    <img src='https://www.shibatoken.com/images/ico-tel.svg' />
                    <div className='link_name' >Telegram</div>
                </a>
                <a className='link_general'>
                    <img src='https://www.shibatoken.com/images/ico-tw.svg' />
                    <div className='link_name' >Twitter</div>
                </a>
                <a className='link_general'>
                    <img src='https://www.shibatoken.com/images/ico-red.svg' />
                    <div className='link_name' >Reddit</div>
                </a>
                <a className='link_general'>
                    <img src='https://www.shibatoken.com/images/ico-dis.svg' />
                    <div className='link_name' >Discord</div>
                </a>
                <a className='link_general'>
                    <img src='https://www.shibatoken.com/images/instagram.svg' />
                    <div className='link_name' >Instagram</div>
                </a>
            </div>
            
        </div>
    )
}

export default Bottom
