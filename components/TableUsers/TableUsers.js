import React from "react";
import "./TableUsers.css";

import axios from 'axios';
import { useEffect, useState } from "react";


function TableUsers() {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const [list, setList] = useState([]);
    const [search, setSearch] = useState("")

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



    return (

        <body className="fondo-dashboard">

            <input value={search} onChange={searcher} type="text" placeholder='Search' />

            <div id="container-table-users">

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
                            <th className="th-users">telefono</th>
                            <th className="th-users">Pais</th>
                            <th className="th-users">password</th>
                            <th className="th-users">Rol</th>
                            <th className="th-users">img</th>

                        </tr>
                    </thead>
                    <tbody>
                        {results.map((list, index) => (
                            <tr>
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

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </body>

    );
}

export default TableUsers;