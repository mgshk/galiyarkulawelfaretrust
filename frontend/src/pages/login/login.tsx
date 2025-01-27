import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import './login.css';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/donation-list');
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='p-0 login-bg'></Col>
                    <Col className="login-form">
                        <h4 className='logo'><img src={logo} /> Galiyar Shri Akkamma Devi Thirukoil Trust</h4>
                        <Form className='mt-4'>
                            <h5>Login</h5>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                            <Button variant="primary" className='button-style' onClick={handleLogin}>
                                Sign in
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;