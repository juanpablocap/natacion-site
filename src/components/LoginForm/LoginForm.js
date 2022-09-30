import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../config/axiosconfig";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const {setUser} = useContext(UserContext) // solo traemos el seteador, el user no lo usamos por ahora

  const handleKeyUp = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  // es un hook asi que se usa en una constante

  const checkData = async () => {
    const response = await axiosClient.get("http://localhost:3500/users");
    const { data } = response;
    const userFound = data.find((user) => user.email === values.email);
    if (userFound) {
      if (userFound.password === values.password) {
        localStorage.setItem("user", JSON.stringify(userFound));
        console.log("el usuario:", userFound.email, "se logeo con exito!");
        setUser(userFound)
        
        navigate("/home");
      } else {
        alert("Password Incorrecta!");
      }
    } else {
      alert("Email invalido");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkData();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onKeyUp={(e) => handleKeyUp(e)}
          type="email"
          placeholder="Enter email"
          name="email"
        />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onKeyUp={(e) => handleKeyUp(e)}
          type="password"
          placeholder="Password"
          name="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className="text-muted">
        <Link to="/registro">Registro</Link>
        
      </Form.Text>
    </Form>
  );
};

export default LoginForm;
