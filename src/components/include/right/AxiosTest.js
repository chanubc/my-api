import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AxiosTest = () => {
    return (
        <>
            componentDidMount() {
                axios.get('https://reqres.in/api/users?page=1')
                
            
            }

        </>
    )
}