import './components/CSS.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import ProgressBar from './components/ProgressBar';
import Position1 from './components/Images/position_1.jpeg';
import Position2 from './components/Images/position_2.jpeg';
import Position4 from './components/Images/position_4.jpeg';
import Position5 from './components/Images/position_5.jpeg';
import EcoPointIcon from './components/assets/logos/EcoPoints.png';

function App() {
  const greenProgressValue = 59;
  const blueProgressValue = 87;
  const orangeProgressValue = 70;


  return (
    <>
      <Navbar />
      <div className="container-fluid row">
      {/* Eco-Hero Row 1 */}
        <div className='row justify-content-center'>
          {/* Eco-Hero 1 */}
        <div className="card mt-2 p-2" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position1} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>
        {/* Eco Hero 2 */}
        <div className="card mt-2 p-2 mx-5" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position2} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>

        {/* Eco-Hero 3 */}
        <div className="card mt-2 p-2" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position4} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Eco-Hero Row 2 */}
        <div className='row justify-content-center mt-5'>
        <div className="card mt-2 p-2" style={{ borderRadius: "10px", width: "541px" }}>
          {/* Eco-Hero 4 */}
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position5} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>

        {/* Eco-Hero 5 */}
        <div className="card mt-2 p-2 mx-5" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position4} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>

        {/* Eco-Hero 6 */}
        <div className="card mt-2 p-2" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position5} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        {/* Eco-Hero Row 3 */}
        <div className='row justify-content-center mt-5'>
        <div className="card mt-2 p-2" style={{ borderRadius: "10px", width: "541px" }}>
          {/* Eco-Hero 7 */}
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position4} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>
        {/* Eco-Hero 8 */}
        <div className="card mt-2 p-2 mx-5" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position1} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>

        {/* Eco-Hero 8 */}
        <div className="card mt-2 p-2" style={{ borderRadius: "10px", width: "541px" }}>
          <div className="card-body d-flex ">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={Position5} alt="Team Member" className="rounded-circle" style={{ width: "130px", border: "2px solid #FF8504" }} />
              <span className="mt-2 mb-2 position"><b>1st PLACE</b></span>
              <h5 className='eHeroName mt-2'>Eco-Hero Name</h5>
              <span className='section '>Grade: 8C, Team Name</span>
            </div>
            <div className='mx-4 col'>
              <div className='d-flex'>
                <div><img src={EcoPointIcon} alt="Team Member" style={{ width: "55px" }} /></div>
                <div className='col mx-3 mt-1'>
                  <p className='mb-0 ecoPointsP'>Eco-Points</p>
                  <p className='Points'>1252</p>
                </div>
              </div>
              <div className='mt-3'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Carbon Footprint</span>
                <span style={{ color: 'green', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='CPoints2'>{greenProgressValue}</div>
              </div>
                <div><ProgressBar value={greenProgressValue} color="success" /></div>
                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Water Footprint</span>
                <span style={{ color: '#0d6efd', marginLeft: '5px' }}>Saved</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='WPoints2'>{blueProgressValue}</div>
              </div>
              <div><ProgressBar value={blueProgressValue} color="primary" /></div>
              <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                <span>Amount of Gadgets</span>
                <span style={{ color: '#ffc107', marginLeft: '5px' }}>Reported</span>
                <div style={{ flex: '1', textAlign: 'right' }} className='GPoints2'>{orangeProgressValue}</div>
              </div>                
              <ProgressBar value={orangeProgressValue} color="warning" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
