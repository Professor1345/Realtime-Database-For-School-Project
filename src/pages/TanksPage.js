import React from 'react'
import MainHeader from '../components/MainHeader'
import SingleTank from '../components/SingleTank'
import demodata from '../components/demodata'
import Footer from '../components/Footer'

const TanksPage = () => {
  return (
    <>
        <MainHeader />
        <div className="grid md:grid-cols-2 gap-8  mt-4 ">
         {
             demodata.map((info, index) => {
                 return (
                     <div className=" p-2 mb-4 " key={index}>
                            <SingleTank info={info} />
                        </div>
                    )
                })
            }
        </div>
              
        <Footer />
        </>

  )
}

export default TanksPage