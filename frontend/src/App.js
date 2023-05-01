import styled from "styled-components";
import bg from "./img/bg.png";
import {MainLayout} from "./styles/Layout";
import Orb from "./Components/Ob/Orb";
import Navigation from "./Components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Incomes/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {

  const [active,setActive] = useState(1);
  const OrbMemo = useMemo(() => {
    return <Orb />
  },[]);


  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  const global =  useGlobalContext();
  console.log(global);

  return (
    <AppStyled bg={bg} className="App">
      {OrbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}


const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position : relative;
main{
  flex:1;
  background: rgba(251,246,249,0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter : blur(4.5px);
  border-radius : 32px;
  overflow:  auto;
  overflow-x : hidden;
  &::-webkit-scrollbar{
    width:0;
  }
}
`;

export default App;
