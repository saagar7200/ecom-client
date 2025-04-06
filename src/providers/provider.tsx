'use client'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react';

interface IProps {
    children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient()

const Provider: React.FC<IProps> = ({ children }) => {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}


export default Provider

