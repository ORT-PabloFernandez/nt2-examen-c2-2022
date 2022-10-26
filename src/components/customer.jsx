import {Button, Container, Row, Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import ApiClient from "../apiClient/apiClient";
import {useParams} from "react-router-dom";

const Customer = () => {
    const [usuario, setUsuario] = useState([]);
    const [loading, setLoading] = useState(true);

    let { userId } = useParams()
    useEffect(() => {
        ApiClient.getCustomersPaginated(0).then((response) => {
            setUsuario(response.data.find(usuario => usuario._id === userId));
            setLoading(false);
        });
    }, []);

    return        (
        <Container>
            {!loading ? (
                <>
                    <h1>{usuario.name}</h1>
                    <p><b>UserName: </b>{usuario.username}</p>
                    <p><b>Nomber: </b>{usuario.name}</p>
                    <p><b>Dirección: </b>{usuario.address}</p>
                    <p><b>Fecha de nacimiento: </b>{usuario.birthdate}</p>
                    <p><b>Email: </b>{usuario.email}</p>
                    <p><b>Cuentas: </b>{usuario.accounts.join(", ")}</p>
                </>
        ) : (
            <Row className="justify-content-md-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row>
        )}
            <hr />
            <Button href="/">Ver todos los usuarios</Button>
    </Container>

    )
}

export default Customer;