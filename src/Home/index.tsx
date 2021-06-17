import { useContext } from "react";
import SportItem from "../SportItem";

import { SportList } from './styles';
import { SportsContext } from "../contexts/SportsContexts";

interface Sport {
    Descricao: string;
    ID: number;
    Nome: string;
    Ordem: number;
}

const Home = (): JSX.Element => {
    const { sports } = useContext(SportsContext)

    return ( 
    
    <SportList>
        {sports.map(sport => {
            return <SportItem key={sport.ID} sport={sport}/>
        })}
    </SportList>
    )
}

export default Home;