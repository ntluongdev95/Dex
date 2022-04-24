import React from 'react'
import '../styles/guide.scss'
function Guide() {
    return (
        <div className='guide__wrapper'>
            <h2 className='guide_title'>Quick Start Guide</h2>
            <div className='guide_detail'>
                <div className='guide_detail-line'>
                    <div className='guide_line-left'>
                        <div className='guide_line-number'>1</div>
                        <div className='guide_line-yellowline'></div>
                    </div>
                    <div className='guide_line-right'>
                        <h3 className='h3'>Create MetaMask wallet</h3>
                        <p className='p'>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive ANL or LEASH.</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='guide_detail-line'>
                    <div className='guide_line-left'>
                        <div className='guide_line-number'>2</div>
                        <div className='guide_line-yellowline'></div>
                    </div>
                    <div className='guide_line-right'>
                        <h3 className='h3'>Send ETH to your wallet</h3>
                        <p className='p'>You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='guide_detail-line'>
                    <div className='guide_line-left'>
                        <div className='guide_line-number'>3</div>
                        <div className='guide_line-yellowline'></div>
                    </div>
                    <div className='guide_line-right'>
                        <h3 className='h3'>Connect your wallet to ShibaSwap</h3>
                        <p className='p'>Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='guide_detail-line'>
                    <div className='guide_line-left'>
                        <div className='guide_line-number'>4</div>
                        <div className='guide_line-yellowline'></div>
                    </div>
                    <div className='guide_line-right'>
                        <h3 className='h3'>Swap ETH for ANWAR, LEASH or BONE</h3>
                        <p className='p'>You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Guide
