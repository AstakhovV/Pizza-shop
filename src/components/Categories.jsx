import React, {useState} from 'react'

export const Categories = ({items}) => {

    const [activeItem, setActiveItem] = useState(null)

    const setItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => setItem(null)}>Все</li>
                {items &&
                    items.map((item, index) => (
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => setItem(index)}
                        key={`${item}_${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )

}