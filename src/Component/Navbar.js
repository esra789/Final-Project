import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from "../assets/EmcqWArUcAAPm6G-removebg-preview (1).png"
import { useEffect, useState } from 'react';


function Navbar1({ setSearch }) {
  const list=JSON.parse(localStorage.getItem("list"))||[];
  const [listlength,setListlength]=useState(0)
  useEffect(() => {
    
    setListlength(list.length)
  }, [list])
  
  return (
    <Navbar expand="lg" className="bg-body-dark" bg='dark'  style={{position:"sticky"}}>
      <Container fluid  >
        <img src={image} width="100px" height="50px" />
        <Navbar.Brand href="/" style={{ color: "LightPink", fontVariant: "small-caps", fontWeight: "900", marginLeft: "10px", fontSize: "1.5rem" }}>Anime World</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: "60px" }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>Home</Nav.Link>
            <Nav.Link href="/topanime" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>Top Anime</Nav.Link>
            <Nav.Link href="/seasonnow" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>Season Now</Nav.Link>
            <Nav.Link href="/mylist" style={{ color: "LightPink", fontVariant: "small-caps", fontSize: "1.2rem" }}>My List <span style={{border:"2px solid white",borderRadius:"30%",color:"LightPink",padding:"5px",fontSize:"0.5rem"}}>{listlength}</span> </Nav.Link>
          </Nav>
          <Form className="d-flex"  >
            <Form.Control
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar1;