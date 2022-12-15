import { GentlemanType } from '../../types/gentlemanType';
import { Button } from '../button/button';

export function Gentleman({
    gentleman,
    handleDelete,
    handleSelect,
}: {
    gentleman: GentlemanType;
    handleDelete: (gentleManId: number) => void;
    handleSelect: (gentleManId: number) => void;
}) {
    return (
        <li className="gentleman">
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={'src/img/' + gentleman.picture}
                    alt={gentleman.alternativeText}
                />
                <span className="gentleman__initial">{gentleman.name[0]}</span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentleman.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentleman.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>{' '}
                        {gentleman.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>{' '}
                        {gentleman.twitter}
                    </li>
                </ul>
            </div>
            <Button
                buttonClassName={
                    gentleman.selected
                        ? 'icon gentleman__icon fas fa-check gentleman__icon--selected'
                        : 'icon gentleman__icon fas fa-check'
                }
                handleClick={handleDelete}
                id={gentleman.id}
            ></Button>
            <Button
                buttonClassName="icon gentleman__icon gentleman__icon--delete fas fa-times"
                handleClick={handleSelect}
                id={gentleman.id}
            ></Button>
        </li>
    );
}
