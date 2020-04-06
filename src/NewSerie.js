import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewSerie = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = evt => {
        // console.log('Evento ==> ', evt.target.value)
        setName(evt.target.value)
    }

    const save = () => {
        axios
            .post('/api/series', {
                name: name
        })
        .then(res => {
            setSuccess(true)
            //console.log('resposta do then' , res)
        })
    }

    if (success) {
      return <Redirect to='/series' /> 
    }

    return (
        <div className='container'>
            <h1>Nova série</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da série' />
                </div>
                {/* <div className='form-group'>
                    <label htmlFor='name'>Gênero</label>
                    <select class='form-control' onChange={onChangeGenre} value={genreId}>
                        { genres.map(genre => <option key={genre.id} value={genre.id} >{genre.name}</option>)}
                    </select>
                </div> */}
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}

export default NewSerie