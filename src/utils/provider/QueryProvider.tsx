"use client"

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query"



const makeQueryClient = ()=>{
    return new QueryClient({
        defaultOptions:{
            queries:{
                staleTime:60*1000,
            },
        },
    })
}

let browserQueryClient: QueryClient | undefined=undefined;

const getQueryClient=()=>{
    if (typeof window==="undefined"){
        return makeQueryClient();
    }
    else{
        if (!browserQueryClient) browserQueryClient=makeQueryClient();
        return browserQueryClient;
    }
}

const ReactQueryProvider: React.FC<{children:ReactNode}> = ({children})=>{
    const QueryClient= getQueryClient();

    return (
        <QueryClientProvider client = {QueryClient}>{children}</QueryClientProvider>
    );
};

export default ReactQueryProvider;