import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";


export default function Card() {
  return (
    <div>

        <Container className=' mt-5 mb-5'  style={{backgroundColor:'#6610f2',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} fluid>


        <Row  style={{display:'fex',justifyContent:'center'}}>

          <div>

          <div className='text-white mt-5' >
            <h1>Start building your resume today, land your dream job tomorrow</h1>

            
            </div>


            <div className='mt-5 mb-5' style={{display:'flex',justifyContent:'center'}} >
               <Button variant="contained">Choose Templets</Button>
 
             </div>



          </div>

        </Row>

        <Row >
            <Col xs={4} > <Image src="images/4.jpg" rounded /></Col>
            <Col xs={4} > <Image src="images/4.jpg" rounded /></Col>
            <Col xs={4} > <Image src="images/4.jpg" rounded /></Col>

        </Row>



        </Container>








    </div>
  )
}
