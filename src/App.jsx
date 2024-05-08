import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersThunk } from './slices/users.slices';
import User from './componentes/User';

function App() {
  const [count, setCount] = useState(0);

  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, []);
  console.log(users);

  return (
    <div className='card'>
      <User users={users}/>
    </div>
  );
}

export default App;
