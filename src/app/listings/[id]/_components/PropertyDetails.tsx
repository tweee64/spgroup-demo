import { Listing } from '@/types/listing';

interface PropertyDetailsProps {
  listing: Listing;
}

export function PropertyDetails({ listing }: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 capitalize">
            {listing.roomType.replace('-', ' ')}
          </span>
          {listing.size && (
            <span className="text-gray-600 dark:text-gray-300">
              {listing.size}m²
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {listing.title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {listing.location.area}, {listing.location.city} {listing.location.postcode}
        </div>
      </div>

      {/* Price */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-teal-600 dark:text-teal-400">
            £{listing.price.toLocaleString()}
          </span>
          <span className="text-xl text-gray-600 dark:text-gray-300">/ month</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Description
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {listing.description}
        </p>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Amenities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {listing.facilities.map((facility) => (
            <div key={facility} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{facility}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lease Terms */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Lease Terms
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Minimum lease:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {listing.leaseDuration.min} month{listing.leaseDuration.min !== 1 ? 's' : ''}
            </span>
          </div>
          {listing.leaseDuration.max && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Maximum lease:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {listing.leaseDuration.max} months
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Availability:</span>
            <span className="font-medium text-teal-600 dark:text-teal-400">
              {listing.available ? 'Available now' : 'Not available'}
            </span>
          </div>
        </div>
      </div>

      {/* Landlord Info */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          About the Landlord
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {listing.landlord.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {listing.landlord.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Member since {new Date(listing.landlord.memberSince).getFullYear()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Response rate:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {listing.landlord.responseRate}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
