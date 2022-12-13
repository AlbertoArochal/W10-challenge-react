import { Gentleman } from "../types/gentlemenType";

export const App = () => {
    const gentlemen: Array<Gentleman> = [
        {
            id: 1,
            name: "Bertin Osborne",
            status: "Alive",
            profession: "Youtuber",
            twitter: "@osbourne",
            picture: "bertin.jpg",
            alternativeText: "Osbourne pointing at you",
            selected: true,
        },
        {
            name: "The Farytale",
            status: "RIP",
            profession: "Influencer",
            twitter: "pending",
            picture: "fary.jpg",
            alternativeText: "The Fary pointing at you",
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: "Julius Churchs",
            status: "Alive",
            profession: "Java developer",
            twitter: "@julius_churchs",
            picture: "julio.jpg",
            alternativeText: "Churchs pointing at you",
            selected: true,
        },
    ];

    return (
        <main className="main">
            <ul className="gentlemen-list">
                {gentlemen.map((gentleman) => (
                    <li className="gentlemen-list__item" key={gentleman.id}>
                        <div className="gentleman">
                            <img
                                className="gentleman__picture"
                                src={gentleman.picture}
                                alt={gentleman.alternativeText}
                            />
                            <div className="gentleman__info">
                                <h2 className="gentleman__name">
                                    {gentleman.name}
                                </h2>
                                <p className="gentleman__status">
                                    {gentleman.status}
                                </p>
                                <p className="gentleman__profession">
                                    {gentleman.profession}
                                </p>
                                <p className="gentleman__twitter">
                                    {gentleman.twitter}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};
