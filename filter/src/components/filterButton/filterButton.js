import React, {useRef, useEffect, useState, useMemo} from 'react'
import "./filterButton.css"

export const FilterButton = ({ isShowing, hide }) =>  {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    const filterRef = useRef();

    const filteredData = useMemo(() => {
        return data.filter(item => {
          return item.toLowerCase().includes(query.toLowerCase())
        })
      }, [data, query])

    useEffect(() => {
        if (isShowing) {
            filterRef.current.focus();
        }
    }, [isShowing]);

    useEffect(()=>{
        fetch("https://api-eu.okotoki.com/coins").then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data)
            setData(data);
          });
    }, [])

    return (
        <div className='filter-wrap'>
            <div className='filter-input-box'>
                    <input 
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        ref={ filterRef } 
                        type="text" 
                        placeholder="Filter quotes" 
                        className='filter-input'
                    />
            </div>
            <div className='filter-box'>
                <div className='filter-names'>
                    { filteredData.length > 1 ? filteredData.map((item) => (
                        <div> { item } </div> 
                    )) : null}

                </div>
            </div>
        </div>
    )
}
