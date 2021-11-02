import Header from './Header';
import Sidebar from './Sidebar';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import DeleteForeverOutlinedIcon  from '@material-ui/icons/DeleteForeverOutlined';
import CloudCircleOutlinedIcon from '@material-ui/icons/CloudCircleOutlined';
function App() {
  return (
    <>
    <Header/>
    <div class="App">
      <Sidebar/>
    </div>
    </>
  );
};

export default App;
