import {useEffect, useState} from "react";
import ApiClient from "../apiClient/apiClient";
import {Button, Container, Row, Spinner, Table} from "react-bootstrap";

const GoldCustomers = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiClient.getCustomersPaginated(0).then((response) => {
            const result = [];
            const customersWithTier = response.data.filter(customer => customer.tier_and_details);
            for (let customer of customersWithTier) {
                const tierAndDetails = customer.tier_and_details;
                if(tierAndDetails){
                    for (let currentTier in tierAndDetails) {
                        if(tierAndDetails[currentTier].tier === "Gold" && !result.some(customerInResult => customerInResult.name === customer.name)){
                            result.push({
                                username: customer.username,
                                name: customer.name,
                                benefits: tierAndDetails[currentTier].benefits
                            })
                        }
                    }
                }
            }

            setUsuarios(result);
            setLoading(false);
        });
    }, []);


    return (
        <Container>
            <h1>Usuarios Gold</h1>
            <Button href="/">Ver todos los usuarios</Button>
            <hr />
            {!loading ? (
                <Row>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Nomber</th>
                            <th>Beneficios</th>
                        </tr>
                        </thead>
                        <tbody>
                        {usuarios &&
                            usuarios.map((usuario) => {
                                return <tr key={usuario._id}>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.name}</td>

                                    <td>{usuario.benefits.join(", ")}</td>

                                </tr>
                            })}


                        </tbody>
                    </Table>

                </Row>
            ) : (
                <Row className="justify-content-md-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            )}

        </Container>

    )
}

export default GoldCustomers;