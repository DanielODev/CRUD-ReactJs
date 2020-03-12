import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewGenre = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = evt => {
        // console.log('Evento ==> ', evt.target.value)
        setName(evt.target.value)
    }

    const save = () => {
        axios
            .post('/api/genres', {
                name: name
        })
        .then(res => {
            setSuccess(true)
            //console.log('resposta do then' , res)
        })
    }

    if (success) {
      return <Redirect to='/genre' /> 
    }

    return (
        <div className='container'>
            <h1>Novo gênero</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do gênero' />
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}

export default NewGenre