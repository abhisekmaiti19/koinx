import React from 'react'
import Dropdown from '../components/reusable/Dropdown'
// import { useState,useEffect } from 'react'

export default function Tax() {
    
     // long term short term switch handelling
    //  const [tick, setTick] = useState(false)
    //  const [tickone, setTickone] = useState(true)
    //  function handletick(){
    //     if(!tick){
    //         setTick(true)
    //         setTickone(false)
    //     }else{
    //         setTickone(true)
    //         setTick(false)
    //     }
    //  }

     // Annual Income and tax rate
    //  const[anincome,setAnincome] = useState(0)
    //  const[tax,setTax] = useState("0%")
   
    //  //handle tax
    //  const[mytax, setMytax] = useState(0);
    //  //handle net gain tax
    //  const[mynet, setMynet] = useState(0)

    //  function taxchanges(){
    //     if(anincome === "1"){
    //         setTax("0%")
    //         setMytax(0)
    //     }
    //     else if(anincome === "18" ){

    //         setTax("Nil + 19% of exces over $18,200")
    //         setMytax(19)
            

    //     }else if(anincome === "45" ){

    //         setTax("$5,092 + 32.5% of exces over $45,000")
    //         setMytax(32.5)

    //     }else if(anincome === "120" )
    //     {

    //         setTax("$29,467 + 37% of exces over $120,000")
    //         setMytax(37)

    //     }else if(anincome === "180"){

    //         setTax("$51,667 + 45% of exces over $180,000")
    //         setMytax(45)

    //     }else{
    //         setTax("0%")
    //         setMytax(0)
    //     }
    //  }
    //  function incomechanges(data){
    //         setAnincome(data)
    //  }
     
     //handle purchase data
    //  const[purchase, setPurchase] = useState(0);
    //  function funpurchase(data){
    //         setPurchase(data);
    //  }

     //handle sale data
    //  const[sale, setSale] = useState(0);
    //  function funsale(data){
    //         setSale(data);
    //  }

     //handle expenses
    //  const[exp, setExp] = useState(0);
    //  function funexp(data){
    //         setExp(data);
    //  }

    //  const[capitalGain, setCapitalGain]  = useState(0);
    //  const[longterm, setLongterm] = useState(0);

    //  const [paytax, setPaytax] = useState(0);

     //main calculation
    //  function calc(){
    //     //for long term
    //     //capital gain amount
    //     let cap = sale - purchase - exp;
    //     setCapitalGain(()=>sale - purchase - exp);
    //    let lt = 0;
    //     if(cap >=0){
    //         lt = cap/2;
    //        setLongterm(cap/2);
    //     }
    //     let netGain = cap - lt;
    //     setMynet(netGain)
        
    //     let mtax = mytax
    //     let taxneed  = (mtax * netGain)/100;
    //     setMytax(taxneed)

    //  }

    //  useEffect(()=>{
    //     taxchanges(anincome)
    //  },[anincome])

    //  useEffect(()=>{
    //     calc()
    //  },[sale,exp,purchase])

     
  return (
   
    // tax card start 
    <div className='w-[881px] h-[879px] bg-white rounded-2xl flex flex-col justify-center items-center'>
        {/* tax card inner */}
        <div className='flex flex-col justify-evenly gap-10' style={{"width":"729px","height":"786px"}}>
            {/* tax card heading  */}
            <h1 className='h-[42px] flex justify-center items-center text-3xl font-bold'>Free Crypto Tax Calculator Australia</h1>
            {/* Inputs  */}
            <div className='flex flex-col w-full h-full gap-7'>
                {/* year and country  */}
                <div className='w-full  h-[86px] pb-2 flex border-b border-2px border-downborder justify-between'>
                    {/* year select */}
                    <div className=' h-full flex items-center justify-evenly' style={{"width":"338px"}}>
                        <span className='text-center flex justify-end text-sm font-normal' style={{"width":"100px"}}>Financial year</span>
                        <select name="financial year" className='bg-page rounded-lg px-4 py-2 font-bold' style={{"width":"228px","height":"48px"}} id="">
                            <option value="" className=''>FY 2023-2024</option>
                        </select>
                    </div>
                    {/* year end  */}

                    {/* country start  */}
                    <div className='h-full flex items-center justify-evenly' style={{"width":"335.5px"}}>
                        <Dropdown/>
                    </div>
                    {/* country end  */}

                </div>
                {/* year and country end  */}

                {/* purchase and sale  */}
                <div className='w-full h-[86px] bg-white flex justify-between'>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Enter purchase price of Crypto</span>
                       {/* <div className='flex'><span className='w-1/5 h-14 p-6 bg-page rounded-l-lg text-lg font-medium flex items-center justify-center'>$</span><input type="number" className='w-4/5 h-14 bg-page rounded-r-lg p-6 text-lg font-medium' value={purchase} onChange={(ev)=>setPurchase(ev.target.value)} /></div> */}
                    </div>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Enter sale price of Crypto</span>
                       {/* <div className='flex'><span className='w-1/5 h-14 p-6 bg-page rounded-l-lg text-lg font-medium flex items-center justify-center'>$</span><input type="number" className='w-4/5 h-14 bg-page rounded-r-lg p-6 text-lg font-medium' value={sale} onChange={(ev)=>setSale(ev.target.value)} /></div> */}
                    </div>
                </div>
                {/* purchase and sale end  */}

                {/* EXPENSES AND INVESTMENT */}
                <div className='w-full h-[86px] bg-white flex justify-between'>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Enter your Expenses</span>
                       {/* <div className='flex'><span className='w-1/5 h-14 p-6 bg-page rounded-l-lg text-lg font-medium flex items-center justify-center'>$</span><input type="number" className='w-4/5 h-14 bg-page rounded-r-lg p-6 text-lg font-medium' value={exp} onChange={(ev)=>setExp(ev.target.value)} /></div> */}
                    </div>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                    <span className='w-full flex justify-start items-start text-sm font-normal'>Investment Type</span>
                       
                       <div className='w-full h-14 flex justify-between'>

                            
                            {/* <button id='shortterm' className={ !tick ? 'h-full bg-page rounded-lg p-6 text-lg font-medium flex justify-between items-center border-black border':'h-full bg-page rounded-lg p-6 text-lg font-medium flex justify-between items-center border-primary border-2 bg-blue-200'} style={{"width":"162px"}} onClick={()=>handletick()}>
                               <span className={!tick?'text-sm text font-base':'text-sm text-primary font-bold'}>Short Term</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={!tick?"w-6 h-6 text-page":"w-6 h-6 text-primary"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </button> */}

                            {/* <button id='longterm' className={ !tickone ? 'h-full bg-page rounded-lg p-6 text-lg font-medium flex justify-between items-center border-black border':'h-full bg-page rounded-lg p-6 text-lg font-medium flex justify-between items-center border-primary border-2 bg-blue-200'} style={{"width":"162px"}} onClick={()=>handletick()}>
                                <span className={!tickone?'text-sm text font-base':'text-sm text-primary font-bold'}>Long Term</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={!tickone?"w-6 h-6 text-page":"w-6 h-6 text-primary"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </button> */}

                       </div>
                       <div className='w-full flex justify-between'>
                            <span className='w-1/2 flex justify-start text-sm'>{`< 12 months`}</span>
                            <span className='w-1/2 flex justify-start text-sm'>{`> 12 months`}</span>
                       </div>
                      
                    </div>
                </div>
                {/* eXPENSES AND INVESTMENT END  */}

                {/* Annual Income and Investment type start  */}
                <div className='w-full h-[86px] bg-white flex justify-between'>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Select Your Annual Income</span>
                       {/* <select className='form-select block w-full h-14 bg-page rounded-lg px-4 text-lg font-medium' onChange={(event)=>incomechanges(event.target.value)} > */}
                       <select className='form-select block w-full h-14 bg-page rounded-lg px-4 text-lg font-medium'  >
                            <option selected value="1">$0 - $18,200</option>
                            <option value="18">$18,201 - $45,000</option>
                            <option value="45">$45,001 - $120,000</option>
                            <option value="120">$120,001 - $180,000</option>
                            <option value="180">$180,001+</option>
                       </select>
                    </div>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Tax rate</span>
                       <div className='w-full h-14 rounded-lg text-sm  flex items-center justify-start' value={"$300"} >
                        {/* <span>{tax} </span> */}
                       </div>
                    </div>
                </div>
                {/* Annual Income and Investment type start  */}

                {/* Capital Gains and discount long term  */}
                {/* <div className={`w-full h-[86px] bg-white flex justify-between ${tick ? "invisible":"visible"}`}> */}
                <div className={`w-full h-[86px] bg-white flex justify-between `}>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Capital gains amount</span>
                       {/* <input type="text" className='w-full h-14 bg-page rounded-lg p-6 text-lg font-medium' value={capitalGain} readOnly="readonly"/> */}
                    </div>
                    <div className=' h-full flex flex-col items-center justify-evenly' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-start items-start text-sm font-normal'>Discount for long term gains</span>
                       {/* <input type="text" className='w-full h-14 bg-page rounded-lg p-6 text-lg font-medium' value={capitalGain >=0 ? longterm : 0} readOnly="readonly" /> */}
                    </div>
                </div>
                {/* Capital Gains and discount long term END  */}

                {/* Net Capital gain and tax pay  */}
                
                <div className={`w-full h-[86px] bg-white flex justify-between `}>
                    <div className=' h-full flex flex-col items-center justify-center bg-green-200 rounded-lg gap-2' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-center items-center text-sm font-normal'>Net Capital gains tax amount</span>
                       {/* <h1 className='w-full flex justify-center items-center text-lg font-bold text-green-900'>{tick ? capitalGain : mynet}</h1> */}
                    </div>
                    <div className=' h-full flex flex-col items-center justify-center bg-blue-200 rounded-lg gap-2' style={{"width":"335.5px"}}>
                       <span className='w-full flex justify-center items-center text-sm font-normal'>The tax you need to pay*</span>
                       {/* <h1 className='w-full flex justify-center items-center text-lg text-primary font-bold'>{ capitalGain <= 0 ? 0 : mytax}</h1> */}
                    </div>
                </div>
                {/* Net Capital gain and tax pay END  */}
            </div>
                
                
        </div>
    </div>
   
  )
}
