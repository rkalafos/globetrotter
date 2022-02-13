import { createContext, useContext, useState } from "react";
import { Race } from "../types/dto";

const RaceContext = createContext<{
    currentRace: Race | undefined,
    setCurrentRace: (race: Race) => void;
}>({
    currentRace: undefined,
    setCurrentRace: () => {}
});
export const useRaceContext = () => useContext(RaceContext);

export const RaceProvider: React.FC = ({ children }) => {
    const [currentRace, setCurrentRace] = useState<Race | undefined>();
    return (
        <RaceContext.Provider value={{
            currentRace,
            setCurrentRace
        }}>
            {children}
        </RaceContext.Provider>
    );
};


