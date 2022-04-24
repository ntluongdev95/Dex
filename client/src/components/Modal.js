import React, { useEffect, useRef, useState } from 'react'
import '../styles/modal.scss';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux';
import { closeModal } from '../redux/actions/buttonAction';
import{tokenList} from '../utils/data';
import {commonToken} from '../utils/data'
function Modal({from,setFrom}) {
    const dispatch = useDispatch()
    const scrollRef = useRef()
    const handleCloseModal =()=>{
        dispatch(closeModal())
    }
    useEffect(()=>{
      scrollRef.current?.scrollIntoView({
          behavior:"smooth"
      })
    })
    const handleClickOut =(e)=>{
       e.stopPropagation();
    }
    return (
        <div onClick={handleCloseModal} className='layer'>
            <div onClick={handleClickOut} className='modal_container'>
                <div className='modal_inner'>
                    <div className='modal_header'>
                        <p>Select a token</p>
                        <CloseIcon onClick={handleCloseModal} style={{cursor:"pointer"}} />
                    </div>
                    <div className='input_search'>
                        <input type='text' placeholder='Search name or paste address' />
                    </div>
                    <div className='title'>Common bases</div>
                    <div className='token_list'>
                        {commonToken.map(c=>(
                        <div className='token_item'>
                            <img src={c.img} alt='' />
                            <h3>{c.symbol}</h3>
                        </div>
                        ))}
                    </div>
                    <hr />
                    <div ref={scrollRef} className='list_token-scroll'>
                        {tokenList.map(token=>(
                        <div key={token.id} address={token.address} className='list_item-scroll'>
                            <img src={token.img} alt='' />
                            <div className='name'>
                                {token.symbol}
                                <span>{token.name}</span>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='bottom'>
                            Manage
                        </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Modal
