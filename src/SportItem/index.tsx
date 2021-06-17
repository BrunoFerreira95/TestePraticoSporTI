import { useContext } from "react";
import { SportsContext } from "../contexts/SportsContexts";

interface SportItemProps {
    sport: {
        Descricao: string;
        ID: number;
        Nome: string;
        Ordem: number;
    }
}

interface Sport {
    Descricao: string;
    ID: number;
    Nome: string;
    Ordem: number;
}

const SportItem =  (props: SportItemProps): JSX.Element => {
    const { SportsOpenModal } = useContext(SportsContext)

    function OpenEdit() {
        SportsOpenModal(props.sport.ID)
    }

    return ( 
        <li key={props.sport.ID}>
            <div>
                <strong>{props.sport.Descricao}</strong>
                <span>{props.sport.Nome}</span>
                <span>{props.sport.Ordem}</span>
            </div>
            <button onClick={OpenEdit}>
                <img  src="icons/editar-arquivo.png" alt="Editar" />
            </button>
        </li>
    )
}

export default SportItem;