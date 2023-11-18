import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Logo from '../components/assets/logos/logo.png';
import SLogo from '../components/assets/logos/SchoolLogo.png';
import DIcon from '../components/assets/logos/Category.png';

const navbar = () => {
    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar  ">
                    <div className='mx-5'>
                    <img src={Logo} alt='logo'style={{width:'150px',minWidth:'14px'}}/>
                    </div>
                    <div className='row'>
                        <div className="mt-3 text-center" style={{ textAlign: 'center' }}>
                            <div className="d-flex mb-2 sm-2" style={{ borderRadius: '12px', backgroundColor: '#39A536', width: '150px', minWidth: '10px' }}>
                                <img src={DIcon} alt="Dash Icon" className="mt-1 mx-2 mt-2" style={{ width: "20px", height: "20px" }} />
                                <p className="card-text mb-1 mt-1" style={{ fontSize: '20px', color: 'white' }}>Dashboard</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-5'>
                    <img src={SLogo} alt='logo'style={{width:'150px'}}/>
                    </div>
                </nav>
            </div>
            <hr style={{height:'2px',borderWidth:'0',color:'gray',backgroundColor:'gray'}}/>
            {/* <div >
    <div className='d-none d-lg-block'>
    <Navbar bg="white" className='d-flex' data-bs-theme="light" style={{height:'76px'}}>
        <Container  >
                  <Navbar.Brand className='' href="/"><img src={Logo} alt='logo'style={{height:'60px',width:'178px',minWidth:'14px', minHeight:'33px'}}/></Navbar.Brand>
                  <div className='justify-content-center row'>
                  <div className="mt-1" style={{textAlign:'center'}}>
                  <div className="d-flex mb-2 sm-2"  style={{borderRadius:'12px',backgroundColor:'#39A536',width:'150px', minWidth:'10px'}}>
                  <img src={DIcon} alt="Dash Icon" className="mt-1 mx-2 mt-2" style={{ width: "20px", height: "20px" }} />
                        <p className="card-text mb-1 mt-1" style={{ fontSize: '20px',  color:'white' }}>Dashboard</p>
                  </div>
                  </div>
                  </div>
          <Nav className="mr-2">
            <Nav.Link href="/"><img src={SLogo} alt='logo'style={{height:'55px',width:'180px'}}/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

    
    Mobilke view
    <div className='d-lg-none'>
    <Navbar bg="white" className='d-flex' data-bs-theme="light" style={{height:'60px'}}>
        <Container  >
                  <Navbar.Brand className='' href="/"><img src={Logo} alt='logo'style={{height:'40px',width:'120px',minWidth:'14px', minHeight:'33px'}}/></Navbar.Brand>
                  <div className='justify-content-center row'>
                  <div className="mt-1" style={{textAlign:'center'}}>
                  </div>
                  </div>
          <Nav className="mr-2">
            <Nav.Link href="/"><img src={SLogo} alt='logo'style={{height:'40px',width:'120px'}}/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </div> */}
        </>
    )
}

export default navbar