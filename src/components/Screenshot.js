import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

const ScreenshotComp = styled.button`
  background: transparent;
  border: 5px solid white;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  position: fixed;
  bottom: 25px;
  right: 40px;
  height: 70px;
  width: 70px;

  transition: background 0.5s ease;

  img {
    width: 80%;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export class Screenshot extends Component {
  state = { animation: "" };
  handleClick = () => {
    this.setState(() => ({ animation: "clicked" }));
    setTimeout(() => {
      this.setState(() => ({ animation: "" }));
    }, 600);

    const fileName =
      this.props.teamName.replace(/ /g, "_") || "Line_me_up_dream_team";
    const pitchHTML = document.querySelector("#pitch");

    html2canvas(pitchHTML, {
      backgroundColor: "#134e5e"
    }).then(pitchCanvas => {
      const pngURI = pitchCanvas.toDataURL("image/png;base64");
      downloadjs(pngURI, fileName);
    });
  };

  render() {
    return (
      <ScreenshotComp
        onClick={this.handleClick}
        className={this.state.animation}
      >
        <img src="images/camera.svg" alt="take a screenshot !" />
      </ScreenshotComp>
    );
  }
}

const mapStateToProps = state => ({
  teamName: state.team.currentTeam.name
});

export default connect(mapStateToProps)(Screenshot);
