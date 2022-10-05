import { useEffect, useState } from "react";
import PetForm from "../containers/PetForm";
import PetList from "../containers/PetList";


const PetContainer = () => {

    // declare as state
    const [pets, setPets] = useState([]);

    // get data from pets_api
    const fetchPetsData = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const data = await response.json();
        setPets(data);
    }

    useEffect(() => {
        fetchPetsData();
    },[]); //will be on the page already 

    // post request to database 
    const postPet = async (newPet) => {
        // console.log(newPet);
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newPet)
        });
        const savedPet = await response.json();
        setPets([...pets, savedPet]);
    }

    return (
        <>
            <h1>Pets!</h1>
            <PetForm onSubmit={postPet} />
            <PetList pets={pets} />
        </>
    )

};

export default PetContainer;