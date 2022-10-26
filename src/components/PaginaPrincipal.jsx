import { useEffect, useState } from "react";
import ApiClient from "../apiClient/apiClient";
import ListadoDeUsuarios from "./listadoDeUsuarios";
import {Button, Container, Row, Spinner} from "react-bootstrap";

const PaginaPrincipal = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiClient.getCustomersPaginated(0).then((response) => {
            setUsuarios(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            <h1>Usuarios</h1>

            <Button href="/goldcustomers">Ver Gold Customers</Button>
            <hr />
            {!loading ? (
                <ListadoDeUsuarios usuarios={usuarios}  />
            ) : (
                <Row className="justify-content-md-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            )}

        </Container>
    );

};


export default PaginaPrincipal;