import { createContext } from "react"


export const ChatContext = createContext({

    loading : false,

    setLoading : () => {},
   
    sidebar : false,

    setSidebar : () => {}


})