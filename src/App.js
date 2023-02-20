import { useState } from 'react';
import { useUser } from './hooks';
import './App.css';
import UserSearch from './modules/UserSearch/UserSearch';
import UserCard from './modules/UserCard/UserCard';
import SkeletonLoader from './modules/Loader/Loader';

function App() {
  const [search, setSearch] = useState('migigim')
  const { loading, userData } = useUser(search)

  return (
    <div className="App">
      <UserSearch setValue={setSearch} />
      {
        loading ? <SkeletonLoader /> : <UserCard userData={userData} />
      }
    </div >
  );
}

export default App;
