import React from 'react'
import {  useNavigate } from 'react-router-dom'
import '../styles/buy.scss'
function Buy() {
    const navigate = useNavigate();
    return (
        <div id='buy' className='buy_wrapper'>
          <div className='buy_card'  >
              <div className='buy_card-header'>
                  <img src='https://previews.123rf.com/images/rubelhossain/rubelhossain2108/rubelhossain210801440/175930222-anl-letter-initial-logo-design-vector-illustration.jpg' alr='' />
              </div>
              <div className='but_card-body'>
                  <div className='title'>
                      <h1>ANL</h1>
                      <div className='button_chart'>
                          <img src='https://shibatoken.com/images/ico-graph-ora.svg' />
                          <h5>See Live Chart</h5>
                      </div>
                  </div>
                  <p className='content'>
                  The ANL token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets.
                  <br />
                  <br />
                  Between its international recognition and its legitimate utility, <span>ANL</span> is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on ShibaSwap, our proprietary DEX.
                  </p>
                  <div  className='buy_button'>
                      <a href='/swap' >Buy ANL</a>
                      <div onClick={()=>navigate('/swap')} className='buy_layer'>Buy ANL</div>
                  </div>
              </div>
          </div>
          <div className='buy_card'  >
              <div className='buy_card-header'>
                  <img src='data:image/png;base64,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' alr='' />
              </div>
              <div className='but_card-body'>
                  <div className='title'>
                      <h1>LEASH</h1>
                      <div className='button_chart'>
                      <img src='https://shibatoken.com/images/ico-graph-ora.svg' />
                          <h5>See Live Chart</h5>
                      </div>
                  </div>
                  <p className='content'>
                  The ANL token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets.
                  <br />
                  <br />
                  Between its international recognition and its legitimate utility, <span>ANL</span> is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on ShibaSwap, our proprietary DEX.
                  </p>
                  <div className='buy_button'>
                      <a href='/swap'>Buy ANL</a>
                      <div onClick={()=>navigate('/swap')} className='buy_layer'>Buy ANL</div>
                  </div>
              </div>
          </div>
          <div className='buy_card'  >
              <div className='buy_card-header'>
                  <img src='data:image/png;base64,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' alr='' />
              </div>
              <div className='but_card-body'>
                  <div className='title'>
                      <h1>BONE</h1>
                      <div className='button_chart'>
                      <img src='https://shibatoken.com/images/ico-graph-ora.svg' />
                          <h5>See Live Chart</h5>
                      </div>
                  </div>
                  <p className='content'>
                  The ANL token is our foundational currency that allows investors to hold millions, billions, or even trillions, of it in their wallets.
                  <br />
                  <br />
                  Between its international recognition and its legitimate utility, <span>ANL</span> is up thousands of times and is constantly expanding its reach. SHIB is the first to be listed and incentivized on ShibaSwap, our proprietary DEX.
                  </p>
                  <div className='buy_button'>
                      <a href='/swap'>Buy ANL</a>
                      <div onClick={()=>navigate('/swap')} className='buy_layer'>Buy ANL</div>
                  </div>
              </div>
          </div>
          
        </div>
    )
}

export default Buy
