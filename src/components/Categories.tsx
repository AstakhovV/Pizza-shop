import * as React from 'react'

type PropTypes = {
    items: Array<string>,
    activeCategory: null | number,
    onClickItem: (index: number | null) => void
}

export const Categories: React.FC<PropTypes> = React.memo(function Categories({items, onClickItem, activeCategory}) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все
                </li>
                {items &&
                items.map((item, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickItem(index)}
                        key={`${item}_${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
})
