import React from 'react';
import './TeamCard.css';
import founder from "../../assets/Images/tech.jpg";

const Persons = [
    { id: 1, name: "Sridhar Natrajan", description: "Founder and CEO", image: founder },
    { id: 2, name: "Santhosh", description: "Full Stack Developer", image: founder },
    { id: 3, name: "Naresh", description: "React Developer", image: founder },
    { id: 4, name: "Ravi Kumar", description: "UI/UX Specialist", image: founder }
];

function TeamCard() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {Persons.map(person => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={person.id}>
                        <div className="card">
                            <div className="cover-photo">
                                <img src={person.image} alt={person.name} className="img-fluid" />
                            </div>
                            <div className="card-title">
                                <h3>{person.name}</h3>
                                <p>{person.description}</p>
                            </div>
                            <div className="columns">
                                <div className="column"></div>
                                <div className="column"></div>
                                <div className="column"></div>
                                <div className="column"></div>
                                <div className="column"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamCard;
