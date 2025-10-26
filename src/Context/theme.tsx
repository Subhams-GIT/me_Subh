'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export const Providers=({children}:{children:React.ReactNode})=>{
    const [mounted,setmounted]=useState(false)

    useEffect(()=>{
        setmounted(true)
    },[])

    if(!mounted){
        return <>{!children}</>
    }
    else return <ThemeProvider>{children}</ThemeProvider>
}