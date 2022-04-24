import React, { useEffect, useState } from 'react'
import '../styles/swap.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PanToolIcon from '@mui/icons-material/PanTool';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useDispatch, useSelector} from 'react-redux';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import axios from 'axios'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useNavigate} from 'react-router-dom';
import { blockchainAction } from '../redux/actions/blockchainAction';
import { ToastContainer } from 'react-toastify';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contractAddress ='0x705Df1D757d92Fc8D7D5B6f719Fa1988A0b9Dc5a'
function Swap() {
    const[coin,setCoin]= useState([])
    const dispatch = useDispatch()
    const[inputFrom,setInputFrom] = useState()
    const[inputTo,setInputTo] = useState()
    const{account,web3,contract_MM,contract_Infura,contract_Token} = useSelector(state=>state.blockchain)
    const[tokenBalance,setTokenBalance] = useState()
    const[reRender,setReRender] = useState(false)
    const[accountBalance,setAccountBalance] = useState()
    const[sellActive,setSellActive] =useState(false)
    const[buyActive,setBuyActive] =useState(true)
    const[to,setTo] = useState({
        name:"ETH",
        img:"data:image/png;base64,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",

    })
    const[from,setFrom] = useState({
        name:"ANL",
        img:"https://previews.123rf.com/images/rubelhossain/rubelhossain2108/rubelhossain210801440/175930222-anl-letter-initial-logo-design-vector-illustration.jpg"
    })
    const navigate = useNavigate();
    const[trigger,setTrigger] = useState()  
     
    const handleBlockchain =()=>{
        dispatch(blockchainAction())
     }
     useEffect(()=>{
        contract_Infura?.events.Buy({
            filter:{},
            fromBlock:"latest"},(error)=>{
                if(error){
                    console.log(error);
                }else{
                 setReRender(true)
                }
            })
     },[])
     
                
     useEffect(async()=>{
         if(buyActive){
          const total = await contract_MM?.methods.tokenBalance().call()
          setTokenBalance(web3?.utils.fromWei(total,'ether'));
            const balance = await web3?.eth.getBalance(account)
            setAccountBalance(web3?.utils.fromWei(balance, 'ether'))  
         }
         return ()=>{
             setAccountBalance(0)
             setTokenBalance(0)
         }
     },[account,reRender,buyActive])

     useEffect(async()=>{
        if(sellActive){
         const total = await contract_Token?.methods.balanceOf(account).call()
         console.log(total);
         setTokenBalance(web3?.utils.fromWei(total,'ether'));
           const balance = await contract_MM.methods.getETHBalance().call()
           setAccountBalance(web3?.utils.fromWei(balance, 'ether'))  
        }
        return ()=>{
            setAccountBalance(0)
            setTokenBalance(0)
        }
    },[account,reRender,sellActive])
     
    useEffect(()=>{
        const inter = setInterval(()=>{
            setTrigger(Math.floor(Math.random()*100))
        },60000)
        return ()=>clearInterval(inter)
    })
    useEffect(()=>{
        if(window.ethereum){
            dispatch(blockchainAction())
        }
    },[dispatch])
    useEffect(()=>{
       axios.get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false")
       .then((res)=>{
           setCoin(res.data)
       }).catch(error=>console.error(error))
    },[trigger])

    const handleWithdraw =async()=>{
       const admin = await contract_MM?.methods.admin().call()
       console.log(admin,account.toLowerCase());
       if(admin.toLowerCase() === account.toLowerCase()){
           await contract_MM.methods.withdrawETH().send({from:account})
           setReRender(true)
       }else{
           toast.warn('You are not allowed')
       }
    }

    const handleInputFromChange =async(input)=>{
        if(input > tokenBalance){ toast.warn('Balance is not enough')}
       setInputFrom((input))
       const ratio = await contract_MM?.methods?.tokenPriceInETH().call()
       if(input *( web3.utils.fromWei(ratio,'ether')) > accountBalance){ toast.warn('ETH is not enough')}
       setInputTo(input *( web3.utils.fromWei(ratio,'ether')))
    }
    const handleInputToChange =async(input)=>{
        if(input > accountBalance){ toast.warn('Balance is not enough')}
       setInputTo(input)
       const ratio = await contract_MM?.methods?.tokenPriceInETH().call()
       setInputFrom(input *1/( web3.utils.fromWei(ratio,'ether')))
      
    }
    const handleNavigate=()=>{
        window.scroll(0, 0)
        navigate(-1)
    }
    const handleBuyToken =()=>{
        setSellActive(false)
        setBuyActive(true)
    }
    const handleSaleToken =async()=>{
        setSellActive(true)
        setBuyActive(false)
        
    }
    const handleSwapToken=async()=>{
        if(inputTo && inputFrom && buyActive){
            const inputToFix = inputTo.toFixed(1)
            contract_MM?.methods.buyToken(inputFrom).send({
                from:account,
                value:web3.utils.toWei(String(inputToFix ), 'ether')
            })
        }
        if(inputTo && inputFrom && sellActive){
            const inputToW =web3.utils.toWei(String(inputFrom), 'ether')
            await contract_Token.methods.approve(contractAddress,inputToW).send({
                  from:account})
            await contract_Token.methods.allowance(account,contractAddress).send({from:account})
            contract_MM?.methods.sellToken(inputToW).send({
                from:account },(err,data)=>{
                    if(err){console.log(err);}
                    console.log(data);
                })
           
        }
    }
    return (
        <div className='swap'>
            <ToastContainer />
            <header className='swap_header'>
                <div className='header_left'>
                    <div className='header_left-logo'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiLmd9OvRSSsjkIZuoo9TXNaKT8VmO-Jj-w&usqp=CAU' alt=''  />
                        <h1>PANDASWAP</h1>
                    </div>
                    <div className='tvl'>ANL <span>$ 50</span></div>
                </div>
                <ul className='header_right'>
                    {coin.map(c=>(
                        <>
                    <li key={c.id} className='show_price'>
                        {c.symbol}
                        {c.price_change_percentage_24h <0 ? (
                           <span><ArrowDropDownIcon style={{color:'red'}} /></span>
                        ):(
                            <span><ArrowDropUpIcon style={{color:"green"}} /></span>
                        )}
                         <span> $ {c.current_price}</span>
                    </li>
                    </>
                    ))}
                    {account ? (
                        <li className='connect_wallet account'>{`${account?.substring(0,5)}...${account?.substring(account.length -4)}`}</li>
                    ):(
                    <li onClick={handleBlockchain} style={{cursor:'pointer'}} className='connect_wallet'>
                        Connect wallet
                    </li>
                    )}

                    <li onClick={handleWithdraw} className='menu'>Withdraw</li>
                </ul>
            </header>
            <div  className='swap_section'>
                <div className='swap_section-center'>
                    <div style={{cursor:'pointer'}} onClick={handleNavigate}className='back_btn'>
                        <ArrowBackIosIcon />
                    </div>
                    <div className='swap_content'>
                        <div className='swap_content-header'>
                        <div className='swap_content-left'>
                            <h1>SWAP</h1>
                            <h6> Swap your token for other tokens</h6>
                        </div>
                        <div className='swap_content-right'>
                             <PanToolIcon />
                        </div>
                        </div>
                        <div className='swap_form'>
                            <div className='from'>
                                <img src={from.img} />
                                <div  className='from_option'>
                                    <div className='small'>Supply:{tokenBalance}</div>
                                    <h1>{from.name}</h1>
                                </div>
                                <input name='inputFrom' 
                                autoComplete="off" autoCorrect="off" type="text" name='inputFrom'
                                 min="0" minLength="1" maxLength="18" spellCheck="false" 
                                value={inputFrom}  onChange={(e)=>handleInputFromChange(e.target.value)}  placeholder='0' />
                            </div>
                            <div className='convert'>
                                <ArrowDownwardIcon  style={{margin:"10px 54%",cursor:"pointer"}} />
                            </div>
                            <div className='to'>
                                     <img src={to.img} /> 
                                    <div  className='to_option'>
                                        <div className='small'>Balance:{(accountBalance)}</div>
                                         <h1>{to.name}</h1>
                                    </div>
                                    <input autoComplete="off" autoCorrect="off" type="text" name='inputTo'
                                     min="0" minLength="1" maxLength="18" spellCheck="false" 
                                    value={inputTo} onChange={(e)=>handleInputToChange(e.target.value)}  placeholder='0' />
                            </div>
                            <div className='breakline'></div>
                            {!inputTo ==0 && !inputFrom==0 && buyActive &&(
                            <div className='analytics'>
                                <div className='row'>
                                    <div className ='left_row'>Minimum received</div>
                                    <div className='right_row'>{inputFrom * 99.97/100} ANL</div>
                                </div>
                                <div className='row'>
                                    <div className ='left_row'>Price Impact</div>
                                    <div className='percentage'>0.03%</div>
                                </div>
                                <div className='analytics_link'>View pair analytics</div>
                            </div>
                            )}
                            {!inputTo ==0 && !inputFrom==0 && sellActive &&(
                            <div className='analytics'>
                                <div className='row'>
                                    <div className ='left_row'>Minimum received</div>
                                    <div className='right_row'>{(inputTo * 99.97/100).toFixed(5)} ETH</div>
                                </div>
                                <div className='row'>
                                    <div className ='left_row'>Price Impact</div>
                                    <div className='percentage'>0.03%</div>
                                </div>
                                <div className='analytics_link'>View pair analytics</div>
                            </div>
                            )}
                            {account? (
                                <div className='buy_sell'>
                                     <div onClick={handleBuyToken} className={`connect_btn buy ${buyActive && 'active'}`}>Buy</div>
                                     <div onClick={handleSaleToken} className={`connect_btn sell ${sellActive && 'active'}`}>Sell</div>
                                </div>
                            ):(
                            <div className='connect_btn'>Connect Wallet</div>)}
                            {!inputTo ==0 && !inputFrom==0 &&(
                                <div onClick={handleSwapToken} className='swap__btn'>Swap</div>
                            )}
                        </div>
                    </div>
                    <div className='swap_coming-event'>
                        <div className=' event event1'>Coming Soon</div>
                        <div className='event event2'>Coming Soon</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Swap
