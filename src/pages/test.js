import React, {useEffect,useState} from "react";

import "./app.css";

import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import LinearProgress from '@material-ui/core/LinearProgress'

import {Modal} from 'antd'

import 'antd/dist/antd'
import 'antd/dist/antd.css'

const Test = ({history}) => {

    const imgs = [
        require('../img/sneeze.png'),
        require('../img/sorethroat.png'),
        require('../img/cough.png'),
        require('../img/fever.png'),
        require('../img/difficulty.png')
    ]
    
    const [score,setScore]  = useState(0);
    const [Scene,setScene] = useState(0);

    const ImageCovid = require("../img/covid.png");

    const [showModalPrevent,setModalPrevent] = useState(false);

    return (
    <div className="Application">
            <h3>Probably: {score}%</h3>
      <nav className="ApplicationMain">
        {Scene == 0 && (
            <div className="Scene">
                <h1>Are you sneezing all the time?</h1>
                <img src={imgs[0]} width="120" height="120"/>
                <Divider/>
                <Button variant="contained" onClick={()=> {
                    let scoreX = score;
                    scoreX+= 10;
                    setScore(scoreX);
                    setScene(1);
                }}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={() => {
                      setScene(1);
                }}>No</Button>
            </div>
        )}
        {Scene == 1 && (
            <div className="Scene">
                <h1>Did you get sore throat?</h1>
                <img src={imgs[1]} width="120" height="120"/>
                <Divider/>
                <Button variant="contained" onClick={()=> {
                    let scoreX = score;
                    scoreX+= 10;
                    setScore(scoreX);
                    setScene(3);
                }}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={() => {
                      setScene(3);
                }}>No</Button>
            </div>
        )}
        {Scene == 3 && (
            <div className="Scene">
                <h1>Are you coughing  a lot?</h1>
                <img src={imgs[2]} width="120" height="120"/>
                <Divider/>
                <Button variant="contained" onClick={()=> {
                    let scoreX = score;
                    scoreX+= 10;
                    setScore(scoreX);
                    setScene(4);
                }}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={() => {
                      setScene(4);
                }}>No</Button>
            </div>
        )}
        {Scene == 4 && (
            <div className="Scene">
                <h1>You had fever or are you with it?</h1>
                <img src={imgs[3]} width="120" height="120"/>
                <Divider/>
                <Button variant="contained" onClick={()=> {
                    let scoreX = score;
                    scoreX+= 10;
                    setScore(scoreX);
                    setScene(5);
                }}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={() => {
                      setScene(5);
                }}>No</Button>
            </div>
        )}
        {Scene == 5 && (
            <div className="Scene">
                <h1>Are you with breathing difficulties?</h1>
                <img src={imgs[4]} width="120" height="120"/>
                <Divider/>
                <Button variant="contained" onClick={()=> {
                    let scoreX = score;
                    scoreX+= 30;
                    setScore(scoreX);
                    setScene(6);
                }}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={() => {
                      setScene(6);
                }}>No</Button>
            </div>
        )}
        {Scene == 6 && (
            <div className="Scene">
            <h3>Probably {score}%</h3>
            <p>If you think that u got covid You must go to the hospital to check your health!</p>
            <Button onClick={() => {
                history.push('/')
            }}>Back</Button>
          </div>
           
        )}

      </nav>
    
    </div>
  );
};

export default Test;
