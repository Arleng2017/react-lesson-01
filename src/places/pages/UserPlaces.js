import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State Bulding',
		description: 'One of the most famous sky scrapers in the world!',
		imageUrl:
			'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8971cdaba74c9a2e/65ede43f56de6830a6aa22b3/BCC-2023-EXPLORER-NEW_YORK-EMPIRE_STATE_BUILDING-HEADER_MOBILE.jpg?format=webp&auto=avif&width=860&quality=80',

		address: '20 W 34th St., New York, NY 10001, United States',
		locations: {
			lat: 40.7484404,
			lng: -73.9905353,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Empire State Bulding',
		description: 'One of the most famous sky scrapers in the world!',
		imageUrl:
			'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8971cdaba74c9a2e/65ede43f56de6830a6aa22b3/BCC-2023-EXPLORER-NEW_YORK-EMPIRE_STATE_BUILDING-HEADER_MOBILE.jpg?format=webp&auto=avif&width=860&quality=80',

		address: '20 W 34th St., New York, NY 10001, United States',
		locations: {
			lat: 40.7484404,
			lng: -73.9905353,
		},
		creator: 'u2',
	},
];

const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter(
		(place) => place.creator === userId
	);

	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
