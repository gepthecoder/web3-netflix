import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Logo } from '../images/Netflix';
import { ConnectButton, Icon, Tab, TabList } from "web3uikit";
import { movies } from "../helpers/library";

const Home = () => {

return(
  <>
  <div className="logo">
    <Logo />
  </div>

  <div className="connect">
    <Icon
      fill="#ffffff"
      size={24}
      svg="bell"
    />
    <ConnectButton />
  </div>

  <div className="topBanner">
    <TabList defaultActiveKey={1} tabStyle="bar">
      <Tab tabKey={1} tabName={"Movies"}>
        <div className="scene">
          <img src={movies[0].Scene} className="sceneImg"></img>
        </div>
      </Tab>
      <Tab tabKey={2} tabName={"Series"} isDisabled={true}></Tab>
      <Tab tabKey={3} tabName={"MyList"}></Tab>
    </TabList>
  </div>

  </>
)
}

export default Home;
