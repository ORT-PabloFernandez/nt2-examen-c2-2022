import {Button, Row, Table} from "react-bootstrap";

const ListadoDeUsuarios = (params) => {
    return (
        <Row>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Nomber</th>
                    <th>Acción</th>
                </tr>
                </thead>
                <tbody>
                {params.usuarios &&
                    params.usuarios.map((usuario) => {
                        return <tr>
                            <td>{usuario.username}</td>
                            <td>{usuario.name}</td>
                            <td>
                                <Button href={"/customer/" + usuario._id }>Ver info de usuario</Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Row>
    );
};

export default ListadoDeUsuarios;
