'use client';

import { useState } from 'react';
import { Listing } from '@/types/listing';

interface BookingPanelProps {
  listing: Listing;
}

export function BookingPanel({ listing }: BookingPanelProps) {
  const [checkIn, setCheckIn] = useState('');
  const [leaseDuration, setLeaseDuration] = useState(listing.leaseDuration.min);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalPrice = listing.price * leaseDuration;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking request
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="lg:sticky lg:top-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Request Booking
        </h3>

        {submitted ? (
          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Booking request sent!</span>
            </div>
            <p className="text-sm text-teal-700 dark:text-teal-300 mt-2">
              The landlord will review your request and get back to you soon.
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Move-in Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Lease Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Lease Duration
            </label>
            <select
              value={leaseDuration}
              onChange={(e) => setLeaseDuration(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value={1}>1 month</option>
              <option value={3}>3 months</option>
              <option value={6}>6 months</option>
              <option value={9}>9 months</option>
              <option value={12}>12 months</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message (optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Introduce yourself or ask any questions..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">
                £{listing.price.toLocaleString()} × {leaseDuration} month{leaseDuration !== 1 ? 's' : ''}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                £{totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                <span className="font-bold text-xl text-teal-600 dark:text-teal-400">
                  £{totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!listing.available}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
              listing.available
                ? 'bg-teal-600 text-white hover:bg-teal-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {listing.available ? 'Request Booking' : 'Not Available'}
          </button>

          {/* Contact Button */}
          <button
            type="button"
            className="w-full px-6 py-3 rounded-lg font-semibold border-2 border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
          >
            Message Landlord
          </button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          You won&apos;t be charged yet. Payment is handled offline after confirmation.
        </p>
      </div>
    </div>
  );
}
