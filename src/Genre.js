import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Genre = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios
            .get('/api/genres')
            .then(res => {
               setData(res.data.data) //Wrapper- data.data para vir o vetor
            })
    }, []) // useEffect não possui nenhuma dependencia, vai rodar uma vez apenas

    const deleteGenre = id => {
        //console.log('id',id)
        axios
            .delete('/api/genres/' + id)
            .then(res => {
                const filtered = data.filter(item => item.id !== id)
                setData(filtered)
                //console.log('res', res)
            })
    }

    const renderRow = record => {
        return(
            <tr Key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteGenre(record.id)}>Remover</button>
                <Link to={'/genre/edit/' + record.id} className='btn btn-warning'>Editar</Link>
                </td>
            </tr>
        )
    }

    if(data.length === 0) {
        return (
            <div className='container'>
                <h1>Gêneros</h1>
                <div className="alert alert-warning" role="alert">
                    Você não possui gêneros criados
                </div>
            </div>
        )
    }

    return ( // os parenteses transforma esses elementos em uma expressão (reactCreateElement)
        <div className='container'>
            <h1>Gêneros</h1>
            <div><Link to='/genre/new'>Novo Gênero</Link></div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map(renderRow)}
                </tbody>
            </table>
            {/* <pre>{JSON.stringify(data)}</pre> */}
        </div>
    )
  }

  export default Genre
  