import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import { Button} from "@mui/material";


export default function Header() {
  return(
     
  <div>
 
       <Container  className="mt-5">
         <Row>
           <Col  style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
             <h1> Build a professional resume for free</h1>
             <br></br>
             <h3 className="mb-5">
            
               Create your resume easily with our free builder and professional
               templates.
             </h3>
 
             <div >
               
                     <Button variant="contained">Create Resume</Button>
               
             </div>
 
 
 
           </Col>
 
           {/* second column */}
           <Col>
                <Image src="2.jpg" rounded />
                   
           </Col>
         </Row>
       </Container>
     
  </div>

  ) 
}
