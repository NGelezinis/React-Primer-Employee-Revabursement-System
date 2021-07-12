import { Link, Outlet } from 'react-router-dom';
import GetAllUsers from './getallusers';
import GetUserById from './getuser';
import {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import RegisterUser from './registeruser';
import LoginUser from './loginuser';
import GetFormById from './getformbyid';
import GetAllForms from './getallforms';
import SubmitForm from './submitform';
import ResolveForm from './resolveform';

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
        <form method="post" onSubmit={LoginUser}>
            <label>Username:
                <input id = "username" ></input>
            </label>
            <label>Password:
                <input id = "password" ></input>
            </label>
            <button>Submit</button>
        </form>
    );
}

export function Register() {
    return(
        <>
            <form method="post" onSubmit={RegisterUser}>
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
            </form>
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
        <GetAllForms/>
    );
}

export function GetForm() {
    const [submitted, updatesubmitted] = useState(false);
    const [formid, updateformid] = useState(1);

    if(submitted)
        return(
            <>
                <GetFormById formid = {formid}/>
                <button onClick = {() => updatesubmitted(false)}>Back</button>
            </>
        );
    else
        return(
            <>
                <label>User Id:
                    <input id = "formId" onChange={e => updateformid(e.target.value)}></input>
                </label>
                <button onClick = {() => updatesubmitted(true)}>Submit</button>
            </>
        );
}

export function Submit() {
    return(
        <>
            <form method="post" onSubmit={SubmitForm}>
                <label>Amount:
                    <input id = "amount" ></input>
                </label>
                <label>Description:
                    <input id = "description" ></input>
                </label>
                <label>Author Username:
                    <input id = "authorUsername" ></input>
                </label>
                <label>Reimbursement Status:
                    <input id = "reimbursementStatus" ></input>
                </label>
                <label>Reimbursement Type:
                    <input id = "reimbursementType" ></input>
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}

export function Resolve() {
    return(
        <>
            <form method="post" onSubmit={ResolveForm}>
                <label>Id:
                    <input id = "id" ></input>
                </label>
                <label>Resolver Username:
                    <input id = "resolverUsername" ></input>
                </label>
                <label>Reimbursement Status:
                    <input id = "reimbursementStatus" ></input>
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}