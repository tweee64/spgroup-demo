import Link from 'next/link';
import Image from 'next/image';
import { Listing } from '@/types/listing';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 bg-white dark:bg-gray-900 px-3 py-1 rounded-full">
            <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
              £{listing.price.toLocaleString()}/mo
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {listing.title}
          </h3>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {listing.location.area}, {listing.location.city}
          </div>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 capitalize">
              {listing.roomType.replace('-', ' ')}
            </span>
            {listing.size && (
              <span className="ml-2 text-xs">
                {listing.size}m²
              </span>
            )}
          </div>

          {/* Facilities */}
          <div className="flex flex-wrap gap-1">
            {listing.facilities.slice(0, 3).map((facility) => (
              <span
                key={facility}
                className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
              >
                {facility}
              </span>
            ))}
            {listing.facilities.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{listing.facilities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
