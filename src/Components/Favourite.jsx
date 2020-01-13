/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Favourite = props => {
	const fav = useSelector(state => state.Meal.favorite);
	console.log('TEST : ', fav[0]);
	const renderFavs = () => {
		return (
			fav &&
			fav[0].map((el, i) => {
				return (
					<Link className='card' key={i} to={`/detail/${el.id}`}>
						<div className='image'>
							<img src={el.imageUrl} alt={el.title} title={el.title} />
						</div>
						<div className='content'>
							{/* <div className="header">{el.title}</div> */}
							{/* <div className="description">
                Matthew is an interior designer living in New York.
              </div> */}
							<div>{el.duration}</div>
							<div>{el.affordability}</div>
							<div>{el.complexity}</div>
						</div>
					</Link>
				);
			})
		);
	};
	return (
		<div className='CompF'>
			Hello Favourite
			<div className='ui link cards'>{renderFavs()}</div>
		</div>
	);
};
export default Favourite;
