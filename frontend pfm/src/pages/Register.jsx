import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Register()
{
    return (
        <>
        <h1 className="text-white text-center">Welcome to Finance Management App</h1>
        <h2 className="text-white text-center mt-5" >Registration</h2>
          <Form>
            <Form.Group controlId="formBasicName" className="mt-3" >
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control type="text"  name="name" placeholder="Full name" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email"  name="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password"  name="password" placeholder="Password" required />
            </Form.Group>
            <div style={{width: "100%", display: "flex" , alignItems:"center", justifyContent:"center", flexDirection: "column"}} className="mt-4">
              {/* <Link to="/forgotPassword" className="text-white lnk" >Forgot Password?</Link> */}

              <Button
                  type="submit"
                  className=" text-center mt-3 btnStyle"
                > Register
                </Button>

              <p className="mt-3" style={{color: "#9d9494"}}>Already have an account? <Link to="/" className="text-white lnk" >Login</Link></p>
            </div>
          </Form>
        </>
    )
}

export default Register