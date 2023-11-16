import React from 'react'

let dataArray = [
    {
        id:1,
        heading: "How are cryptocurrencies taxed in Australia?",
        desc: "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia."
    },
    {
        id:2,
        heading: "What’s the difference between long-term and short-term capital gains?",
        desc: "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate."
    },
    {
        id:3,
        heading: "Do I have to pay tax on crypto-to-crypto transactions?",
        desc: "Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free"
    },
]
export default function Faq() {
  return (
    <div className='rounded-xl p-8 flex flex-col gap-10 bg-white relative'style={{"width":"60vw"}}>
       <h1 className='text-2xl font-bold'>Frequently Asked Questions</h1> 
       {dataArray[0] ? dataArray.map((it)=>{
        return (
            <div className='w-full border-b pb-4 border-stroke flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>{`${it.id}. ${it.heading}`}</h1>
                <p className='text-base font-normal'>{it.desc}</p>
            </div>
        );
       }) : <h1>Waiting for data</h1> }
    </div>
  )
}
