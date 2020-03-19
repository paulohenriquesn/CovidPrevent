import React, {useEffect,useState} from "react";

import "./app.css";

import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import LinearProgress from '@material-ui/core/LinearProgress'

import {Modal} from 'antd'

import 'antd/dist/antd'
import 'antd/dist/antd.css'

const Home = ({history}) => {

    const imgs = [
        require('../img/alcool.png'),
        require("../img/washhands.png"),
        require("../img/mask.png"),
        require("../img/masktwo.png"),
        require("../img/avoidcrowd.png")
    ]
    
    const ImageCovid = require("../img/covid.png");

    const [showInfoModal,setInfoModal] = useState(false);
    const [showModalPrevent,setModalPrevent] = useState(false);

    return (
    <div className="Application">
      <nav className="ApplicationMain">
      <header>
      <h3>Covid19 about {130}.000 cases!</h3>
      <h3 style={{color: 'green'}}>Is there a vaccine?</h3><LinearProgress /><p style={{color:'red'}}>No vaccines!</p>
        <ul className="ApplicationMenuHeader">
          <li><img src={ImageCovid} width="250" height="250" /></li>
          <li><h1>Why should I have to do this test?</h1></li>
          <li><Button variant="contained" onClick={() => {
              setInfoModal(true)
          }}>Read More</Button></li>
        </ul>
      </header>
      <nav id="infos">
      <nav id="buttons">

      <Button variant="contained" color="secondary" style={{
          width:'300px',
          height:'100px',
      }} onClick={() => {
        history.push('/test')
      }}>Start Test</Button>
      <Divider/>
      <Button variant="outlined" color="secondary" style={{
          width:'300px',
          height:'100px'
      }} onClick={() => {
        setModalPrevent(true)
      }}>How to Prevent</Button>
            </nav>
            </nav>
      </nav>

      <Modal
          title="What's Corona Virus? (COVID-19)"
          visible={showInfoModal}
          onOk={() => {setInfoModal(false)}}
          onCancel={() => {setInfoModal(false)}}
        >
        <div className="preventDiv"> 

                <p>
                A contagious respiratory disease that was first detected in China in December 2019 has spread worldwide. The 2019 novel (new) coronavirus has been named SARS-CoV-2 and the disease it causes is called coronavirus disease 2019, or COVID-19.
                </p>
            <p>
            This virus is really transmissible and can spread easily from person to person even before a person develops symptoms. It’s carried on respiratory droplets when we talk, sneeze, and cough and these can land on surfaces or in someone’s mouth or nose.  When it comes to respiratory droplets, 6 feet is the magic distance. That’s how far these tiny, infected droplets can travel.  Being within 6 feet of someone who is sick can get you or your personal space contaminated with COVID-19.  
            </p>
            <p>
            Patients develop symptoms like fever, muscle and body aches, cough, and sore throat about 5-6 days after infection. Most people will feel pretty miserable for a week and get better on their own.  Some people won’t get as sick, but it’s still important not to be out and about, so as not to spread the disease.  A minority of patients will get worse instead of better. This usually happens after 5-7 days of illness and these patients will have more shortness of breath and worsening cough.  If this happens, it’s time to contact your doctor again or even go to an emergency room. Be sure to call first so they know you are coming.  

The numbers of people who have been diagnosed and how many have died are changing daily. As of early March, there have been over 125,000 confirmed cases, with a death toll of about 4,500 (more than 3,000 in mainland China). But these numbers are just estimates; it’s still unclear how many people have actually been infected worldwide. Most of the deaths have been in adults over 60 years old who had other health concerns.
            </p>
            <a href="https://www.uchicagomedicine.org/forefront/prevention-and-screening-articles/wuhan-coronavirus">Font</a>
          </div>
        </Modal>

      <Modal
          title="How to prevent it?"
          visible={showModalPrevent}
          onOk={() => {setModalPrevent(false)}}
          onCancel={() => {setModalPrevent(false)}}
        >
        <div className="preventDiv"> 
        <ul className="listPrevent">
        <li>
        <h3>You have to wash your hands with alcohol gel and water</h3>
        <img src={imgs[1]} width="80" height="80"/>
        <img src={imgs[0]} width="80" height="80"/>
        </li>
        <li>
        <h3>You have to put on a mask to protect you against the air</h3>
        <img src={imgs[3]} width="80" height="80"/>
        <img src={imgs[2]} width="80" height="80"/>
        </li>
        <li>
        <h3>It's really important you stay at home and prevent be near the crowds</h3>
        <img src={imgs[4]} width="80" height="80"/>
        </li>
         
          </ul>
          </div>
        </Modal>

      <h1>By <a href="http://github.com/paulohenriquesn">Paulo Henrique</a></h1>
    </div>
  );
};

export default Home;
