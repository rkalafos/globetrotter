import { createContext, useContext, useState } from "react";
import { Race } from "../types/dto";

const RaceContext = createContext({});
const useTwitterFeedContext = () => useContext(RaceContext);

export const RaceProvider: React.FC = ({ children }) => {
    const [currentRace, setCurrentRace] = useState<Race>();
    return (
        <RaceContext.Provider value={{
            currentRace,
            setCurrentRace
        }}>
            {children}
        </RaceContext.Provider>
    );
};


