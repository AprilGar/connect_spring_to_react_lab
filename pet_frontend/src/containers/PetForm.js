import { useState } from "react";


const PetForm = ({onSubmit}) => {

    const [newPet, setNewPet] = useState(
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    );

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const updatedNewPet = {...newPet};
        updatedNewPet[propertyName] = event.target.value;
        setNewPet(updatedNewPet);
    }

    const handleSubmit = (event) => {
        // prevent page from reloading
        event.preventDefault();
        onSubmit(newPet);
        setNewPet({
            name:"",
            type: "",
            breed: "",
            age: 0
        });
    }

    return(

        <>
            <h3>Add a new pet</h3>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Pet name"
                    onChange={handleChange}
                    value={newPet.name}
                />

                <label htmlFor="type">Type:</label>
                <input
                    id="type"
                    type="text"
                    name="type"
                    placeholder="Pet type"
                    onChange={handleChange}
                    value={newPet.type}
                />
                <label htmlFor="breed">Breed:</label>
                <input
                    id="breed"
                    type="text"
                    name="breed"
                    placeholder="Pet breed"
                    onChange={handleChange}
                    value={newPet.breed}
                />
                <label htmlFor="age">Age:</label>
                <input
                    id="age"
                    type="text"
                    name="age"
                    placeholder="Pet name"
                    onChange={handleChange}
                    value={newPet.age}
                />

                <input type="submit" value="Add Pet" />

            </form>
        </>
    )


};

export default PetForm; 