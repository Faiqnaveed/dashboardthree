import React from 'react'
import COP from './assets/logos/COP.png';
import R3 from './assets/logos//R3 Factory Logo.png';
import YOS from './assets/logos//Year of Sustainability.png';

const footer = () => {
  return (
    <>
    <div className="">
      <div className='d-none d-lg-block'>
        <footer className="bg-light text-dark mt-2 pb-2">
                <hr/>
                <div className="container-fluid row d-flex">
                <div className="col-sm-6 ">
                    <p className='mx-5'>@2023 R3 Factory All Rights Reserved</p> 
                </div>
                <div className="col-sm-6">
                    <div className="d-flex justify-content-end">
                        <img src={R3} alt="Logo 1" style={{width:'35px', height:'30px'}} className="mx-2"/>
                        <img src={YOS} alt="Logo 2" style={{width:'60px', height:'30px'}} className="mx-2"/>
                        <img src={COP} alt="Logo 3" style={{width:'70px'}} className="mx-2"/>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <div className='d-lg-none'>
    <footer className="bg-light text-dark mt-2 pb-2">
            <hr/>
            <div className="col-sm-6 mb-4 mt-4">
                <div className="d-flex justify-content-center">
                    <img src={R3} alt="Logo 1" style={{width:'35px', height:'30px'}} className="mx-2"/>
                    <img src={YOS} alt="Logo 2" style={{width:'60px', height:'30px'}} className="mx-2"/>
                    <img src={COP} alt="Logo 3" style={{width:'70px'}} className="mx-2"/>
                </div>
            </div>
            <div className="justify-content-center d-flex">
            <div className="col-sm-6 ">
                <p className='mx-2'>@2023 R3 Factory All Rights Reserved</p> 
            </div>
        </div>
    </footer>
    </div>
    </div>
    </>
  )
}

export default footer
