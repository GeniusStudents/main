import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
    

        <Container className='mt-5 ' fluid>


            <Row  className='bg-light'>

                <Col style={{display:'flex',flexDirection:'column'}} >
                 <h1>Links</h1> <hr/>
                 <Link component="button"variant="body2">Resume</Link>
                 <Link component="button"variant="body2">Resume</Link>
                 <Link component="button"variant="body2">Resume</Link>
                 <Link component="button"variant="body2">Resume</Link>
                 <Link component="button"variant="body2">Resume</Link>
                </Col>




                <Col style={{display:'flex',flexDirection:'column'}}>

                <h1>Courses</h1> <hr></hr><h1/>

                <Link component="button"variant="body2">Resume</Link>
                <Link component="button"variant="body2">Resume</Link>
                <Link component="button"variant="body2">Resume</Link>
                <Link component="button"variant="body2">Resume</Link>
                <Link component="button"variant="body2">Resume</Link>
                

                </Col>



                <Col><h1>Links</h1><hr/></Col>
                <Col><h1>About <hr/> </h1>  

                <p>
                    Rest assured that the templates you find on Resume.com 
                    are the best around. Based on data from what employers 
                    want to see in candidates, we’ve created our templates with hiring in mind.
               </p>
                
                
                 </Col>






            </Row>


            <Row >
                <p style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}> copy right 2023 reserved by @cs-team</p>
            </Row>





        </Container>




    </div>
  )
}
