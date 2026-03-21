'use client';

import { RoomType } from '@/types/listing';

interface FilterSidebarProps {
  location: string;
  setLocation: (location: string) => void;
  priceMin: number;
  setPriceMin: (price: number) => void;
  priceMax: number;
  setPriceMax: (price: number) => void;
  roomTypes: RoomType[];
  toggleRoomType: (type: RoomType) => void;
  facilities: string[];
  toggleFacility: (facility: string) => void;
  availableFacilities: string[];
  clearFilters: () => void;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const ROOM_TYPES: { value: RoomType; label: string }[] = [
  { value: 'studio', label: 'Studio' },
  { value: 'shared', label: 'Shared Apartment' },
  { value: 'student-housing', label: 'Student Housing' },
  { value: 'co-living', label: 'Co-Living' },
];

export function FilterSidebar({
  location,
  setLocation,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  roomTypes,
  toggleRoomType,
  facilities,
  toggleFacility,
  availableFacilities,
  clearFilters,
  onClose,
  showCloseButton,
}: FilterSidebarProps) {
  return (
    <div className="lg:w-64 lg:flex-shrink-0">
      <div className="lg:sticky lg:top-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City or area"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price Range (per month)
          </label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="number"
                  value={priceMin}
                  onChange={(e) => setPriceMin(Number(e.target.value))}
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              £{priceMin.toLocaleString()} - £{priceMax.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Room Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Room Type
          </label>
          <div className="space-y-2">
            {ROOM_TYPES.map(({ value, label }) => (
              <label key={value} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={roomTypes.includes(value)}
                  onChange={() => toggleRoomType(value)}
                  className="w-4 h-4 text-teal-600 border-gray-300 dark:border-gray-600 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Facilities
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableFacilities.map((facility) => (
              <label key={facility} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={facilities.includes(facility)}
                  onChange={() => toggleFacility(facility)}
                  className="w-4 h-4 text-teal-600 border-gray-300 dark:border-gray-600 rounded focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {facility}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            clearFilters();
            if (onClose) onClose();
          }}
          className="w-full px-4 py-2 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 border border-teal-600 dark:border-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
