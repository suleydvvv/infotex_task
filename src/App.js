import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { get_users } from './requests/requests';

import './App.css';
import Table from './components/table/table';
import Search from './components/search/search';
import Sorting from './components/sorting/sorting';
import UserInfo from './components/modal/modalUserInfo';

function App() {
  const dispatch = useDispatch()
  const usersLength = useSelector(state => state.users.users.length)

  useEffect(()=>{
      get_users(dispatch)
      console.log()
    }, [])

  return (
      <div className="App">
              <UserInfo/>
              <Search/>
              <Sorting/>
              <Table/>
      </div>
  );
}

export default App;
