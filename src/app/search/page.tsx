'use client';

import { useState } from 'react';
import { searchListings } from '@/lib/mockData';
import { Listing, RoomType } from '@/types/listing';
import { ListingCard } from '@/app/_components/ListingCard';
import { SearchBar } from './_components/SearchBar';
import { FilterSidebar } from './_components/FilterSidebar';

const FACILITIES = ['Wi-Fi', 'Gym', 'Laundry', 'Parking', 'Furnished', 'Air Conditioning', 'Garden', 'Co-working Space'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(3000);
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([]);
  const [facilities, setFacilities] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const results = searchListings(query, {
    location,
    priceMin,
    priceMax,
    roomTypes,
    facilities,
  });

  const toggleRoomType = (type: RoomType) => {
    setRoomTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleFacility = (facility: string) => {
    setFacilities(prev =>
      prev.includes(facility)
        ? prev.filter(f => f !== facility)
        : [...prev, facility]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setLocation('');
    setPriceMin(0);
    setPriceMax(3000);
    setRoomTypes([]);
    setFacilities([]);
  };

  const activeFilterCount = [
    query && 1,
    location && 1,
    (priceMin > 0 || priceMax < 3000) && 1,
    roomTypes.length,
    facilities.length,
  ].filter(Boolean).reduce((a, b) => (a as number) + (b as number), 0) as number;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Search Accommodations
          </h1>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden fixed bottom-4 right-4 z-10">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-white text-teal-600 px-2 py-0.5 rounded-full text-sm font-semibold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Filter Sidebar */}
          <div className={`lg:block ${showFilters ? 'fixed inset-0 z-20 bg-white dark:bg-gray-800 overflow-y-auto' : 'hidden'}`}>
            <FilterSidebar
              location={location}
              setLocation={setLocation}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              roomTypes={roomTypes}
              toggleRoomType={toggleRoomType}
              facilities={facilities}
              toggleFacility={toggleFacility}
              availableFacilities={FACILITIES}
              clearFilters={clearFilters}
              onClose={() => setShowFilters(false)}
              showCloseButton={showFilters}
            />
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Showing {results.length} accommodation{results.length !== 1 ? 's' : ''}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No results found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-teal-600 hover:text-teal-700 dark:text-teal-400 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {results.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
