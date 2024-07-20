import React, { useState } from "react";
import Perfil from "./assets/components/Perfil";
import ReposList from "./assets/components/ReposList";
import NameRequest from "./assets/components/NameRequest";

function App() {
  const [userName, setUserName] = useState('');
  console.log(userName.length)

  return (
    <>
    {userName.length === 0 && (
      <NameRequest setUserName={setUserName}/>
    )} 

      {/* <NameRequest setUserName={setUserName} /> */}
      {userName.length > 1 && (
        <>
          <Perfil userName={userName} />
          <NameRequest setUserName={setUserName}/>
          <ReposList userName={userName} />
        </>
      )}
    </>
  );
}

export default App;
