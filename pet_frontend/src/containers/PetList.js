import Pet from "./Pet";

const PetList = ({pets}) => {

    const petComponents = pets.map(pet => {
        // sending down the whole pet object to Pet.js
        return <Pet key={pet.id} pet={pet}/>
    });

    return (
        <>
        <h3>Pet List</h3>
        {/* add in a line break */}
        <hr /> 
        {petComponents}
        </>
    )

};

export default PetList;