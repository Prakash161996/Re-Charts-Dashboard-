import Recordlist from './Component/BarChart/RecordList';
import './App.css';
import SideNavBar from './Component/SideNavBar/SideNavBar';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-3">
          <SideNavBar/>
        </div>      
        <div className='col-sm-9'>
          <Recordlist/>          
        </div>
      </div>
    </div>
  );
}

export default App;
