import { Elastic, Sine, TimelineMax } from 'gsap/all';
import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoonRock } from './moonrock.svg';
import { ReactComponent as Shadow } from './shadow.svg';

const Main = styled.div`
  height:100vh;
  width:100%;
  overflow:none;
  display:grid;
  align-items:center;
  justify-content:center;
  background: linear-gradient(180deg, #1A1A1A, #eee 60%, #717171 100%);
`
const Animation = styled.div``

const Controls = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  position:fixed;
  left: 0;
  right: 0;
  @media(max-width:700px){
    bottom:25px;
  }
`
const Button = styled.button`
  font-size:1em;
  margin:1em;
  padding:0.2em .5em;
  background-color: transparent;
  border: 2px solid #414141;
  border-radius:1em;
  cursor:pointer;
  color:#414141;
  outline:none;
  :hover{
    color:white;
    border: 2px solid white;
    transition-duration:150ms;
  }
  :focus{
    color:white;
    border: 2px solid white;
    transition-duration:300ms;
  }
`
const Play = styled(Button)`
  :focus{
    background:#23611E
  }
`
const Pause = styled(Button)`
  :focus{
    background:#7C0F0F
  }
`
const Reverse = styled(Button)`
  :focus{
    background:#C58915
  }
`
const Restart = styled(Button)`
  :focus{
    background:#6841BA
  }
`

class App extends Component {
  constructor(){
    super();
    this.tl = new TimelineMax({paused: true});
  }

  componentDidMount(){
    this.tl
    .to(this.Shadow, 0, {transformOrigin:"top left", x:-75 , y:35, width:200}, 0)
    .from(this.Shadow, .9, {transformOrigin:"center right",scale:0,ease: Sine.easeInOut}, 1)
    .from(this.Rock, 2, {ease: Elastic.easeOut.config(1,.9), y:-1000},1)
  }

  render() {
    return (
      <Main>  
        <Animation>
          <div ref={div => this.Rock = div}>
            <MoonRock />
          </div>
          <div ref={div => this.Shadow = div}>
            <Shadow />
          </div>
        </Animation>
        <Controls>
          <Play onClick={()=>this.tl.play()}>Play</Play>
          <Pause onClick={()=>this.tl.pause()}>Pause</Pause>
          <Reverse onClick={()=>this.tl.reverse()}>Reverse</Reverse>
          <Restart onClick={()=>this.tl.restart()}>Restart</Restart>
        </Controls>
      </Main>
    );
  }
}

export default App;