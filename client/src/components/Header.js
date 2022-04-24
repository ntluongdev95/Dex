import React from 'react'
import '../styles/header.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
function Header() {
    return (
        <div id='header' className='headers'>
            <header>
                <div className='header_logo'>
                    <img src='https://i.pinimg.com/originals/32/5e/4a/325e4ac5122d462d05bbc052092038d0.jpg' alt='' />
                    <a href='/'>
                        <h2>Panda swap</h2>
                    </a>
                </div>
                <ul className='header_lists'>
                    <li className='header_lists-item'>
                        <a href='#eco'>Ecosystem</a>
                    </li>
                    <li className='header_lists-item'>
                        <a href='#buy'>Buy</a>
                    </li>
                    <li className='header_lists-item'>
                        <a href='/swap'>Panda Swap</a>
                    </li>
                    <li className='header_lists-item'>
                        <a href='#art'>Art</a>
                    </li>
                    <li className='header_lists-item'>
                        <a href=''>Rescue</a>
                    </li>
                    <li className='header_lists-item last_item'>
                        <a href=''>Community</a>
                    </li>
                <div className='header_button'>
                    <div className='header_button-inner'>
                        <div className='icon'>
                            <ArrowForwardOutlinedIcon />
                            <KeyboardBackspaceIcon />
                        </div>
                        <h3>Use Panda Swap</h3>
                    </div>
                </div>
                </ul>
            </header>
            <div className='main' >
               <div className='left'>
                   <h1>A Decentralized Meme Token that Evolved into a Vibrant Ecosystem</h1>
                   <div className='button_group'>
                       <a  href='#buy'>
                          <div className=' button1' > How to buy</div>
                      </a>
                       <a href='' >
                           <div className=' button2'>Read WoofPaper v2</div>
                       </a>
                   </div>
                   <div className='scroll_button'>
                      <a href='#eco' className='scroll_icon'>
                         <ArrowDownwardOutlinedIcon />
                     </a>
            </div>
               </div>
               <div className='right'>
                   <div className='right_wrapper-circle'>
                            <img className='image_around ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png' alt='' />  
                            <img className='image_around ' src='https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg' alt='' /> 
                            <img className='image_around' src='https://previews.123rf.com/images/rubelhossain/rubelhossain2108/rubelhossain210801440/175930222-anl-letter-initial-logo-design-vector-illustration.jpg' alt='' />
                            <img className='image_around' src='https://www.icohotlist.com/wp-content/uploads/2021/05/jcnnm-gq-400x400-300x300.jpg' alt='' />
                            <img className='image_around' src='https://cdn.coingape.com/wp-content/uploads/2021/12/13194950/Terra-LUNA-coinmarketcap.jpg' alt='' />
                            <img className='image_around ' src='https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' alt='' />
                       
                   </div>
                   <img className='image_center' src='https://shibatoken.com/images/hero-shib.png' alt='' />
                  
               </div>
            </div> 
        
        </div>
    )
               
                   
                  
}
                       
                       
                           
                       
                       
                       

export default Header
