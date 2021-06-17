import { createContext, ReactNode, useEffect, useState } from "react";
import SportsModal from "../components/modals/SportsModal";

interface StoreContextData {
    SportsCloseModal: () => void,
    SportsOpenModal: (id: number) => void,
    sports: Sport[],
    updateListSport: (Sport: Sport) => void,
}

interface SportsProviderProps {
    children: ReactNode;
}

interface Sport {
    Descricao: string;
    ID: number;
    Nome: string;
    Ordem: number;
}

export const SportsContext = createContext({} as StoreContextData)

export function SportsProvider({children, ...rest}:SportsProviderProps) {
    const [sports, setSports] = useState<Sport[]>([])
    const [sportEdit, setSportEdit] = useState<number>(0)
    const [isModalActive, setIsModalActive] = useState(false)

    useEffect(() => {

        fetch('http://tst.sportibrasil.com.br/Services/CategoriaService.svc/ObterTodasCategorias')
        .then(response => response.json())
        .then(data => setSports(data.ObterTodasResult))
            
        
    }, [])

    function SportsCloseModal() {
        setIsModalActive(false)
    }

    function SportsOpenModal(id: number) {
        setIsModalActive(true)
        setSportEdit(id)
    }

    function updateListSport(Sport: Sport) {
        console.log('cheguei')
        for (const positionSport in sports) {
            console.log(positionSport)
            if(sports[positionSport].ID === Sport.ID) {
                sports[positionSport] = Sport
            }
        }
    }
    return (
        <SportsContext.Provider
            value= {{
                SportsCloseModal,
                SportsOpenModal,
                sports,
                updateListSport
            }}
        >
            {children}
            { isModalActive && <SportsModal ID={sportEdit}/>}
        </SportsContext.Provider>
    )
}