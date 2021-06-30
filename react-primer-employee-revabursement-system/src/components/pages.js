import { Link, Outlet } from 'react-router-dom';
import GetAllUsers from './getallusers';
import GetUserById from './getuser';
import {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export function Menu() {
    return(
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href='/'>Home</NavDropdown.Item>
                            <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
                            <NavDropdown.Item href='/users'>Users</NavDropdown.Item>
                            <NavDropdown.Item href='/user'>User</NavDropdown.Item>
                            <NavDropdown.Item href='/register'>Register</NavDropdown.Item>
                            <NavDropdown.Item href='/forms'>Forms</NavDropdown.Item>
                            <NavDropdown.Item href='/submit'>Submit</NavDropdown.Item>
                            <NavDropdown.Item href='/resolve'>Resolve</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
            </Navbar>
            <Outlet />
        </>
    );
}

export function Home() {
    return(
        <h1>[Welcome]</h1>
    );
}

export function Login() {
    return(
        <h1>Login</h1>
    );
}

export function Register() {
    return(
        <>
            <label>Username:
                <input id = "username" ></input>
            </label>
            <label>Password:
                <input id = "password" ></input>
            </label>
            <label>Email:
                <input id = "email" ></input>
            </label>
            <label>First Name:
                <input id = "firstname" ></input>
            </label>
            <label>Last Name:
                <input id = "lastname" ></input>
            </label>
            <label>Authority:
                <input id = "authority" ></input>
            </label>
            <button>Submit</button>
        </>
    );
}

export function GetUsers() {
    return(
        <GetAllUsers/>
    );
}

export function GetUser() {
    const [submitted, updatesubmitted] = useState(false);
    const [userid, updateuserid] = useState(1);

    if(submitted)
        return(
            <>
                <GetUserById userid = {userid}/>
                <button onClick = {() => updatesubmitted(false)}>Back</button>
            </>
        );
    else
        return(
            <>
                <label>User Id:
                    <input id = "userId" onChange={e => updateuserid(e.target.value)}></input>
                </label>
                <button onClick = {() => updatesubmitted(true)}>Submit</button>
            </>
        );
}

export function GetForms() {
    return(
        <h1>Login</h1>
    );
}

export function Submit() {
    return(
        <h1>Login</h1>
    );
}

export function Resolve() {
    return(
        <h1>Login</h1>
    );
}