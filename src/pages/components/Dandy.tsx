import { useState } from 'react';
import { Gentleman } from '../../core/components/gentleman/gentleman';
import { Info } from './info';
import { GentlemanType } from '../../core/types/gentlemanType';
import { gentlemenData } from '../../core/models/gentlemen.models';

export function Dandy() {
    const [gentlmen, setGentlemen] = useState(gentlemenData);
    const totalSelected = gentlmen.filter(
        (gentleman: GentlemanType) => gentleman.selected
    ).length;
    const handleSelectAll = () => {
        const newGentlArray = gentlmen.map((gentleman: GentlemanType) => {
            return {
                ...gentleman,
                selected: true,
            };
        });
        setGentlemen(newGentlArray);
    };
    function handleDelete(gentleManId: number) {
        const newGentlArray = gentlmen.filter(
            (gentleman: GentlemanType) => gentleman.id !== gentleManId
        );
        setGentlemen(newGentlArray);
    }
    function handleSelect(gentleManId: number) {
        const newGentlArray = gentlmen.map((gentleman: GentlemanType) => {
            if (gentleman.id === gentleManId) {
                return {
                    ...gentleman,
                    selected: !gentleman.selected,
                };
            }
            return gentleman;
        });
        setGentlemen(newGentlArray);
    }

    return (
        <>
            <Info
                totalSelected={totalSelected}
                handleSelectAll={handleSelectAll}
            ></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlmen.map((gentleman: GentlemanType) => {
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
}
