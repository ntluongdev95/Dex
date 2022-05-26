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
                            <img className='image_around ' src='data:image/png;base64,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' alt='' /> 
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
