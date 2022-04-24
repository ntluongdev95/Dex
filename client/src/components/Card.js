import React from 'react'
import '../styles/card.scss'
function Card() {
    return (
        <div className='card_wrapper'>
            <img className='img img_normal' src='https://www.shibatoken.com/images/art10.png' />
            <h4>Liquidity Locked to Uniswap</h4>
        </div>
    )
}

export default Card
