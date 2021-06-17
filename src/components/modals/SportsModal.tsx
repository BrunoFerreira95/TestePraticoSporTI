import { useContext, useEffect, useState } from "react"
import { SportsContext } from "../../contexts/SportsContexts"


import { Container } from '../../styles/components/modals/SportsModal'

interface SportItemProps {
        ID: number;
}

interface Sport {
    Descricao: string;
    ID: number;
    Nome: string;
    Ordem: number;
}

const SportsModal = (props: SportItemProps): JSX.Element => {
    const { SportsCloseModal, sports, updateListSport } = useContext(SportsContext)

    const [editSport, setEditSport] = useState<Sport>({
        Descricao: '',
        ID: 0,
        Nome: '',
        Ordem: 0
    })

    useEffect(() => {
        const response = sports.find(sport => sport.ID === props.ID)
        setEditSport(response)

    }, []) 

    function updateSport(ev) {
        console.log(ev)
        const { name, value } = ev.target
        setEditSport({
            ...editSport,
            [name]: value
        })

    }

    function onSubmit(ev) {
        ev.preventDefault()
        console.log('salvo')
        updateListSport(editSport)
        SportsCloseModal()
    }

    return (
        <Container>
            <form onSubmit={onSubmit}>
                
                <div>
                    <button onClick={SportsCloseModal}>
                        <img  src="icons/close.png" alt="Fechar" />
                    </button>

                    <strong>Editar Sport</strong>
                    <label htmlFor="Descricao">Descrição</label>
                    <input 
                        type="text" 
                        name="Descricao" 
                        value={editSport?.Descricao}
                        onChange={updateSport}
                    />
                    <label htmlFor="Nome">Nome</label>
                    <input 
                        type="text" 
                        name="Nome" 
                        value={editSport?.Nome}
                        onChange={updateSport}
                    />
                    <label htmlFor="Ordem">Ordem</label>
                    <input 
                        type="text" 
                        name="Ordem" 
                        value={editSport?.Ordem}
                        onChange={updateSport}
                    /><br/>
                    <br/>
                    <button type="submit">
                        Atualizar
                    </button>
                </div>
            </form>
        </Container>
    )
}

export default SportsModal