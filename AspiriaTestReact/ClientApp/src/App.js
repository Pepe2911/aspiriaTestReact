import "bootstrap/dist/css/bootstrap.min.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useEffect, useState } from "react";



const App = () => {
    const [juguetes, setJuguetes] = useState([])
    const [item, setItem] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const abrirModalEditar = () => {
        handleShow()
    }
    const guardarJuguete = async(e) => {
        e.preventDefault()

        const response = await fetch("api/juguetes/SaveToy", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ID: 0,
                Nombre: 'Nuevo',
                Descripcion: 'Nuevo',
                RestriccionEdad: 3,
                Marca: 'Msrasd',
                Precio: 854
            })
        })

        if (response.ok) {
            mostrarJuguetes();
            handleClose()
        }
    }

    const mostrarJuguetes = async () => {
        const response = await fetch("api/juguetes/GetJuguetes");

        if (response.ok) {
            const data = await response.json();
            setJuguetes(data);
        } else {
            console.log("Estatus Code: " + response.status);
        }
    }

    useEffect(() => {
        mostrarJuguetes();
    }, [])
    return (
        <div className="container bg-dark p-4 vh-100">

            <Button variant="primary" onClick={handleShow}>
                Agregar
            </Button>

            <table className="table table-striped text-white">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Restricción de edad</th>
                        <th scope="col">Compañia</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        juguetes.map(
                            (item) => (
                                <tr key="{item.id}">
                                    <th scope="row" className="text-white">{ item.id }</th>
                                    <td className="text-white">{ item.nombre }</td>
                                    <td className="text-white">{ item.descripcion }</td>
                                    <td className="text-white">{ item.restriccionEdad } Años</td>
                                    <td className="text-white">{ item.marca }</td>
                                    <td className="text-white">{ item.precio }</td>
                                    <td className="text-white">
                                        <button className="btn btn-sm btn-outline-warning" onClick={abrirModalEditar}>Editar</button>
                                        <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    
            </tbody>
            </table>





            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Form onSubmit={guardarJuguete}>
                <Modal.Body>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={item.Nombre}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="text"
                                value={item.Precio}
                                placeholder="Precio"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control
                                type="text"
                                value={item.Marca}
                                placeholder="Marca"
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Restriccion de edad</Form.Label>
                            <Form.Control
                                type="text"
                                value={item.Restriccion}
                                placeholder="Restriccion"
                                
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-2"
                            value={item.Descripcion}
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
            </Modal>
        </div>


    )

}

export default App;