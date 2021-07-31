import React from 'react'

import PropTypes from "prop-types";

export const Categories = React.memo(function Categories({items, onClickItem,activeCategory}) {
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

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func.isRequired
}
Categories.defaultProps = {
    activeCategory: null,
    items: [],
    onClickItem: [],
}