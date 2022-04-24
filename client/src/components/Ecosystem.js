import React from 'react'
import Card from './Card';
import '../styles/ecosystem.scss';
function Ecosystem() {
    return (
        <div id='eco' className='eco_wrapper'>
            <div className='eco_left'>
                <h1>Our Project & Ecosystem</h1>
                <p >From its inception, Shiba Inu has done things differently. Starting with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in Uniswap, then “burned” the other half to Ethereum co-founder <span>Vitalik Buterin</span> for safekeeping.
                <br />
                <br />
                To help reverse the devastating spread of Covid-19 in India, VB has since utilized SHIB in the largest crypto donation in history, and then <span>actually</span>  burned 40% of its total supply to a dead wallet, ensuring our long-term success and stability. In the words of Ryoshi, “Thank you to the woofmeister for enabling true decentralization. Now we truly begin.”
                </p>
            </div>
            <div className='eco_right'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Ecosystem
