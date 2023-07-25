import { createContext, useContext, useState } from "react";

export const DuneContext = createContext()

export function useDuneContext() {
    return useContext(DuneContext)
}

export function DuneProvider(props) {


    return(
        <DuneContext.Provider value={null}>
            {props.children}
        </DuneContext.Provider>

    )

}