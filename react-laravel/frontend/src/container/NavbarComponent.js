import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
// import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const NavbarComponent = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <img src={logo} style={{ height: "40px" }} /> */}
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/student">Student</Nav.Link>
                        <Nav.Link href="/dosen">Dosen</Nav.Link>
                        {/* <Nav.Link href="/daftar">Daftar Buku</Nav.Link>
                        <Nav.Link href="/peminjaman">Peminjaman</Nav.Link>
                        <Nav.Link href="/sukses">Sukses</Nav.Link>
                        <Nav.Link href="/edit">Edit</Nav.Link> */}
                        {/* <li><Link to="/" className='nav-link'>Beranda</Link></li> */}
                        {/* <li><Link to="/buku" className='nav-link'>Manajemen Buku</Link></li> */}
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent