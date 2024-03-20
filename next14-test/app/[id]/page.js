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

    async function postIDData(){
        const postEmptyData = await fetch(`/${params.id}/id`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log('postEmptyData', postEmptyData);
    }

    useEffect( ()=> {
        getIDData();  
        postIDData();      
    }, [])

    return (
        <section>
            <h2>{params.id} Page</h2>
            <p>{getIDFetchData}</p>
        </section>
    )
}