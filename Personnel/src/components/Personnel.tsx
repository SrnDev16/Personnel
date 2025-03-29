import { createContext, useState } from "react"
import  Body  from "./Body"
import NavBar from "./NavBar"

export interface DataContextType {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}


export const DataContext = createContext<DataContextType | undefined>(undefined)
const Personnel = () => {
const [text, setText] = useState<string>("บุคลากร")

  return (
    <DataContext.Provider value={{data : text , setData: setText}}>
        <NavBar/>
        <Body/>
    </DataContext.Provider>
  )
}

export default Personnel