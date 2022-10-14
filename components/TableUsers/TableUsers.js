import React from "react";
import "./TableUsers.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

// import { Container, Form, Modal, Row } from 'react-bootstrap';



function TableUsers() {


    const url = "https://hoteliakuepa.herokuapp.com/users/";

    const [list, setList] = useState([]);
    // const [list] = useState([]); 
    const [search, setSearch] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [dataUser, setDataUser] = useState(null)

    
    const initialState = { _id: 0, nombre: ""};     

    // const [upList,setUplist]=useState([false]);

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)
        // console.log(e.target.value)
    }

    // metodo de filtrado 1 

    let results = []
    if (!search) {
        results = list
    } else {
        results = list.filter((dato) =>
            dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    // metodo de filtrado 2

    // const results = !search ? list : list.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))


    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
            // console.log(response.data);
        })
    }, []);


    // const setID = (_id) => {
    //     console.log(_id);
    //     localStorage.setItem('ID', _id);
    // }


    async function getUserById(id) {

        const response = await fetch(url + id)
        const data = await response.json();
        setDataUser(data);
    }



    async function openClose(id) {

        await getUserById(id);

        if (openModal === false) {


            setOpenModal(true)
            console.log(dataUser)

        } else if (openModal === true) {

            setOpenModal(false)

        }


    }


    const handleChange = ({ target }) => {
        //Cada vez que haya un cambio se va a guardar el valor en el estado data
        setDataUser({
            ...dataUser,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${url}/${dataUser._id}`, dataUser);
        //console.log(response);  
        if (response.status === 200) {
            Swal.fire(
                'Cambio Guardado!',
                `El estudiante <strong> ${dataUser.nombre} ${dataUser.apellido}</strong> ha sido actualizado exitosamente!`,
                'success'
            )
            
        }
        else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el estudiante!',
                'error'
            )
        }
    }



    return (


        <div className="fondo-dashboard">




            <div id="container-table-users">
                <div className="buscar-user">
                    <label className="label-buscar">Buscar list</label>
                    <input className="input-buscar" value={search} onChange={searcher} type="text" placeholder='Search' />
                </div>
                <table className="table-users">
                    <thead className="thead-users">
                        <tr>
                            <th className="th-users">ID</th>
                            <th className="th-users">Tipo Doc</th>
                            <th className="th-users">Nombre</th>
                            <th className="th-users">Apellido</th>
                            <th className="th-users">Fecha nacimiento</th>
                            <th className="th-users">Genero</th>
                            <th className="th-users">Email</th>
                            <th className="th-users">Telefono</th>
                            <th className="th-users">Pais</th>
                            <th className="th-users">password</th>
                            <th className="th-users">Rol</th>
                            <th className="th-users">Img</th>
                            <th className="th-users">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {results.map((list, index) => (
                            <tr key={list._id}>
                                <td className="td-users">{list._id}</td>
                                <td className="td-users">{list.tipodoc}</td>
                                <td className="td-users">{list.nombre}</td>
                                <td className="td-users">{list.apellido}</td>
                                <td className="td-users">{list.fnacimiento}</td>
                                <td className="td-users">{list.genero}</td>
                                <td className="td-users">{list.email}</td>
                                <td className="td-users">{list.telefono}</td>
                                <td className="td-users">{list.paisorigen}</td>
                                <td className="td-users">{list.password}</td>
                                <td className="td-users">{list.tipouser}</td>
                                <td className="td-users">{list.img}</td>
                                <td className="td-users-edit">
                                    <i class="fa-solid fa-user-pen edit" onClick={() => { openClose(list._id) }}></i>
                                    {/* <button onClick={() => setID(list._id)} >Editar</button> */}

                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>




            </div>


            <div className={openModal ? 'modal1 abrir' : openModal === false ? 'modal1 cerrar' : 'modal1'}>

                {dataUser != null ? (

                    <form class="contenidoModal" onSubmit={handleSubmit} action="" method="post">

                        <span class="cerrarModal"><i class="fa-solid fa-xmark" onClick={() => { openClose() }}></i></span>
                        <h2>Usuarios</h2>
                        <label>ID</label><br />
                        <input name="_id" type="number" value={dataUser._id}  /><br />
                        <label>Nombre</label><br />
                        <input name="nombre" type="text" value={dataUser.nombre} onChange={handleChange} /><br />
                        <label>Apellido</label><br />
                        <input name="apellido" type="text" value={dataUser.apellido} onChange={handleChange} /><br />
                        <label>email</label><br />
                        <input name="email" type="email" value={dataUser.email} onChange={handleChange} /><br />
                        <label>Telefono</label><br />
                        <input name="telefono" type="number" value={dataUser.telefono} onChange={handleChange} /><br />
                        <label>Pais</label><br />
                        <input name="paisorigen" type="text" value={dataUser.paisorigen} onChange={handleChange} /><br />



                        <button class="btn" type="submit">Guardar cambios</button>


                    </form>

                ) : (<div></div>)}
            </div>





        </div>

    );
}

export default TableUsers;