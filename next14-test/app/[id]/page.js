'use client'
import { useEffect, useState } from 'react';

export default function Page( { params }) {

    const [getIDFetchData, setIDFetchData] = useState();

    async function getIDData(){
        const idFetchData = await fetch(`/${params.id}/id`)
            .then( (response) => response.text() )
        
        console.log('idFetchData', idFetchData);
        setIDFetchData(idFetchData);
    }

    useEffect( ()=> {
        getIDData();        
    }, [])

    return (
        <section>
            <h2>{params.id} Page</h2>
            <p>{getIDFetchData}</p>
        </section>
    )
}