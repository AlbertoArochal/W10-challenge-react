import { useState } from 'react';
import { Gentleman } from '../gentleman/gentleman';
import { DandyInfo } from '../GentleInfo/info';
import { GentlemanType } from '../../types/gentlemanType';
import { gentlemenData } from '../../models/gentlemen.models';

export const Dandies = () => {
    const [gentlemen, setGentlemen] = useState(gentlemenData);
    const totalSelected = gentlemen.filter(({ selected }) => selected).length;
    const handleSelectAll = () => {
        const DandiesArray = gentlemen.map((gentleman) => ({
            ...gentleman,
            selected: true,
        }));
        setGentlemen(DandiesArray);
    };
    function handleDelete(gentleManId: number) {
        const DandiesArray = gentlemen.filter(({ id }) => id !== gentleManId);
        setGentlemen(DandiesArray);
    }
    function handleSelect(gentleManId: number) {
        const DandiesArray = gentlemen.map((gentleman) => {
            const { id, selected } = gentleman;
            if (id === gentleManId) {
                return {
                    ...gentleman,
                    selected: !selected,
                };
            }
            return gentleman;
        });
        setGentlemen(DandiesArray);
    }

    return (
        <>
            <DandyInfo
                totalSelected={totalSelected}
                handleSelectAll={handleSelectAll}
            ></DandyInfo>
            <main className="main">
                <ul className="gentlemen">
                    {gentlemen.map((gentleman: GentlemanType) => {
                        return (
                            <Gentleman
                                key={gentleman.id}
                                gentleman={gentleman}
                                handleDelete={handleDelete}
                                handleSelect={handleSelect}
                            ></Gentleman>
                        );
                    })}
                </ul>
            </main>
        </>
    );
};
