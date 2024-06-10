import React, {useRef, useEffect, useState} from 'react'
import "./filterButton.css"

export const FilterButton = ({ isShowing, hide }) =>  {
    const filterRef = useRef();

    useEffect(() => {
        if (isShowing) {
            filterRef.current.focus();
        }
    }, [isShowing]);

    if (!isShowing) return null;

    return (
        <div className='filter-wrap'>
            <div className='filter-box'>
                <div className='filter-names'>
                    <input ref={ filterRef } type="text" placeholder="Focus me on load" />
                    <h3>Filter</h3>
                    <h3>Bilter</h3>
                </div>
            </div>
        </div>
    )
}
