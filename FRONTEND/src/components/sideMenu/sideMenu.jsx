import React, { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "./settings";
import LeaderBoard from "./leaderboard";
import HistorySvg from "../../plugs/historySvg";
import HamSvg from "../../plugs/hamSvg";
import LeaderboardSvg from "../../plugs/leaderboardSvg";
function SideMenu() {
  const [showSettings, setShowSettings] = useState(false);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  function openSettings() {
    setShowSettings(true);
  }
  function closeSettings() {
    setShowSettings(false);
  }
  function openLeaderBoard() {
    setShowLeaderBoard(true);
  }
  function closeLeaderBoard() {
    setShowLeaderBoard(false);
  }
  // console.log("sideMenu rerendered");

  return (
    <>
      <div className="bottomOptionsMenu">
        <Link to="/type0/history">
          <HistorySvg className="historyIco"></HistorySvg>
        </Link>
        <HamSvg
          className="settingsIco"
          onClick={openSettings}
          title="settings"
        ></HamSvg>
        <LeaderboardSvg
          className="leaderboardIco"
          onClick={openLeaderBoard}
          title="leaderboard"
        ></LeaderboardSvg>
        {showSettings && <Settings closeSettings={closeSettings} />}
        {showLeaderBoard && <LeaderBoard closeLeaderBoard={closeLeaderBoard} />}
      </div>
    </>
  );
}

export default React.memo(SideMenu);
