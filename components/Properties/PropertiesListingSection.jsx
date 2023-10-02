// pages/listings.js
import React from 'react';
import Link from 'next/link';

const listings = [
    {
        id: 1,
        title: 'Beautiful Condo in the City',
        description:
            'A modern condo located in the heart of the city. Close to all amenities.',
        price: '$300,000',
        image: '/images/listing1.jpg'
    },
    {
        id: 2,
        title: 'Spacious Family Home',
        description:
            'A spacious family home with a large backyard and beautiful views.',
        price: '$500,000',
        image: '/images/listing2.jpg'
    }
    // Add more listings as needed
];

const PropertiesListing = () => {
    return (
        <section>
            <h1>Real Estate Listings</h1>
            <div className={styles['properties-listing-container']}>
                {listings.map((listing) => (
                    <div key={listing.id} className="listing">
                        <img src={listing.image} alt={listing.title} />
                        <h3>{listing.title}</h3>
                        <p>{listing.description}</p>
                        <p>{listing.price}</p>
                        <Link href={`/listing/${listing.id}`}>
                            <a>View Details</a>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PropertiesListing;
