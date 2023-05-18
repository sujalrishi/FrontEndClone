import React, { useEffect, useState } from 'react'
import "./Tinder_cards.css"
import TinderCard from 'react-tinder-card'
import axios from 'axios';

function Tinder_cards() {

    const [people, setPeople] = useState([]);
        // {
        //     name: 'Elon Musk',
        //     url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        // },
        // {
        //     name: 'Jeff Bezoz',
        //     url: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/03/full/1612372052-5838.jpg",
        // }

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (diretion, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!!!")
    }

    return (
        <div className="tindercards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div className="card" style={{ backgroundImage: `url(${person.imgUrl})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Tinder_cards;
