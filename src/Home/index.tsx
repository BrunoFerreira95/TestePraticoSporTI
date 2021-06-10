import { useEffect, useState } from "react";
import SportItem from "../SportItem";

import { SportList } from './styles';

interface Sport {
    Descricao: string;
    ID: number;
    Nome: string;
    Ordem: number;
}

const Home = (): JSX.Element => {
    const [sports, setSports] = useState<Sport[]>([])

    useEffect(() => {

        fetch('http://tst.sportibrasil.com.br/Services/CategoriaService.svc/ObterTodasCategorias')
        .then(response => response.json())
        .then(data => setSports(data.ObterTodasResult))
            
        
    }, [])
    return ( 
    
    <SportList>

        {sports.map(sport => {
            return <SportItem key={sport.ID} sport={sport}/>
        })}
    </SportList>
    )
}

export default Home;