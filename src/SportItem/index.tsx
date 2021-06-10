interface SportItemProps {
    sport: {
        Descricao: string;
        ID: number;
        Nome: string;
        Ordem: number;
    }
}

const SportItem =  (props: SportItemProps): JSX.Element => {
    return ( 
        <li key={props.sport.ID}>
            <strong>{props.sport.Descricao}</strong>
            <span>{props.sport.Nome}</span>
            <span>{props.sport.Ordem}</span>
            <button>Editar</button>
        </li>
    )
}

export default SportItem;