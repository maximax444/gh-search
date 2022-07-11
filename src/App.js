import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReposForm from './components/ReposForm';
import ReposList from './components/ReposList';
import ReposEnd from './components/ReposEnd';
import axios from 'axios'
function App() {
  const [searchStr, setSearchStr] = useState("");
  const [errStat, setErrStat] = useState(0);
  const [reps, setReps] = useState({ total_count: '', items: {} });
  function startNewSearch(str) {
    setSearchStr(str);
    searchRepos(str);

  }
  function searchRepos(str) {
    axios({
      method: "get",
      url: `https://api.github.com/search/repositories?q=${str}`,
    }).then(res => {
      if (res.status == "200") {
        setReps(res.data);
        setErrStat(0);
      } else {
        setReps({ total_count: '', items: {} });
      }

    }).catch(err => {
      setErrStat(1);
    });
  }
  console.log(searchStr);
  console.log(reps);
  return (
    <div className="wrap">
      <ReposForm search={startNewSearch} />
      <ReposEnd num={reps.total_count} />
      <ReposList err={errStat} reps={reps.items} />

    </div>
  );
}

export default App;
