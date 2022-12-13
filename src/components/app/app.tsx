import { Gentleman } from '../types/gentlemenType';

export const App = () => {
    const gentlemen: Array<Gentleman> = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: './img/bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: true,
        },
        {
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: './img/fary.jpg',
            alternativeText: 'The Fary pointing at you',
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Barely Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: './img/julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: true,
        },
    ];

    return (
        <main className="main">
            <ul className="gentlemen">
                {gentlemen.map((gentleman) => (
                    <li className="gentleman" key={gentleman.id}>
                        <div className="gentleman__avatar-container">
                            <img
                                className="gentleman__avatar"
                                src={gentleman.picture}
                                alt={gentleman.alternativeText}
                            />
                            <span className="gentleman__initial">
                                {gentleman.name[0]}
                            </span>
                            <div className="gentleman__data-container">
                                <h2 className="gentleman__name">
                                    {gentleman.name}
                                </h2>
                                <ul className="gentleman__data-list">
                                    <li className="gentleman__data"></li>{' '}
                                    <span className="gentleman__data-label">
                                        Status: {gentleman.status}
                                    </span>
                                    <li className="gentleman__data">
                                        <span className="gentleman__data-label">
                                            Profesion: {gentleman.profession}
                                        </span>
                                    </li>
                                    <li className="gentleman__data">
                                        <span className="gentleman__data-label">
                                            {' '}
                                            Twitter: {gentleman.twitter}{' '}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <i className="icon gentleman__icon fas fa-check"></i>
                        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
                    </li>
                ))}
            </ul>
        </main>
    );
};
