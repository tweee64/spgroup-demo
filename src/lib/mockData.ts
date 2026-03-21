import { Listing } from '@/types/listing';

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Modern Studio near King\'s Cross',
    description: 'A beautifully designed studio apartment in the heart of London, perfect for students and young professionals. Features include high-speed Wi-Fi, modern kitchen, and excellent transport links.',
    price: 1200,
    location: {
      city: 'London',
      area: 'King\'s Cross',
      postcode: 'N1 9AG',
      lat: 51.5309,
      lng: -0.1233
    },
    roomType: 'studio',
    leaseDuration: {
      min: 3,
      max: 12
    },
    facilities: ['Wi-Fi', 'Laundry', 'Furnished', 'Air Conditioning'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800'
    ],
    available: true,
    landlord: {
      id: 'l1',
      name: 'Sarah Johnson',
      responseRate: 95,
      memberSince: '2020-01-15'
    },
    size: 25
  },
  {
    id: '2',
    title: 'Spacious Shared Apartment - Manchester City Centre',
    description: 'Share this amazing 3-bedroom apartment with two other professionals. Your private room is spacious with a large window. Shared kitchen, living room, and bathroom are modern and well-maintained.',
    price: 650,
    location: {
      city: 'Manchester',
      area: 'City Centre',
      postcode: 'M1 1AE',
      lat: 53.4808,
      lng: -2.2426
    },
    roomType: 'shared',
    leaseDuration: {
      min: 6,
      max: 12
    },
    facilities: ['Wi-Fi', 'Gym', 'Laundry', 'Parking', 'Furnished'],
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
    ],
    available: true,
    landlord: {
      id: 'l2',
      name: 'Michael Chen',
      responseRate: 88,
      memberSince: '2019-06-20'
    },
    size: 15
  },
  {
    id: '3',
    title: 'Student Housing near University of Edinburgh',
    description: 'Purpose-built student accommodation with excellent facilities. All-inclusive rent covers utilities and high-speed internet. Perfect for students who want a hassle-free living experience.',
    price: 850,
    location: {
      city: 'Edinburgh',
      area: 'Newington',
      postcode: 'EH9 1PL',
      lat: 55.9375,
      lng: -3.1833
    },
    roomType: 'student-housing',
    leaseDuration: {
      min: 9,
      max: 12
    },
    facilities: ['Wi-Fi', 'Gym', 'Laundry', 'Study Room', 'Common Room', 'Furnished'],
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'
    ],
    available: true,
    landlord: {
      id: 'l3',
      name: 'Edinburgh Student Lets',
      responseRate: 92,
      memberSince: '2018-03-10'
    },
    size: 18
  },
  {
    id: '4',
    title: 'Co-Living Space with Community - Birmingham',
    description: 'Join our vibrant co-living community! Private bedroom in a shared house with young professionals. Regular community events, co-working space, and all amenities included.',
    price: 750,
    location: {
      city: 'Birmingham',
      area: 'Digbeth',
      postcode: 'B5 6AB',
      lat: 52.4747,
      lng: -1.8838
    },
    roomType: 'co-living',
    leaseDuration: {
      min: 1,
      max: 12
    },
    facilities: ['Wi-Fi', 'Co-working Space', 'Gym', 'Laundry', 'Events', 'Furnished', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1565623006069-e86ef7906180?w=800',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    available: true,
    landlord: {
      id: 'l4',
      name: 'Urban Collective',
      responseRate: 96,
      memberSince: '2019-11-05'
    },
    size: 20
  },
  {
    id: '5',
    title: 'Bright Studio with Garden View - Bristol',
    description: 'Charming studio apartment with a lovely garden view. Quiet neighborhood, perfect for someone looking for a peaceful place to study or work remotely. Close to local amenities.',
    price: 950,
    location: {
      city: 'Bristol',
      area: 'Clifton',
      postcode: 'BS8 3JH',
      lat: 51.4638,
      lng: -2.6128
    },
    roomType: 'studio',
    leaseDuration: {
      min: 6
    },
    facilities: ['Wi-Fi', 'Laundry', 'Garden', 'Furnished'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800'
    ],
    available: true,
    landlord: {
      id: 'l5',
      name: 'Emma Watson',
      responseRate: 90,
      memberSince: '2021-02-18'
    },
    size: 28
  },
  {
    id: '6',
    title: 'Luxury Student Accommodation - Glasgow',
    description: 'Premium student housing with top-notch facilities including cinema room, games room, and 24/7 security. Perfect location near University of Glasgow.',
    price: 1100,
    location: {
      city: 'Glasgow',
      area: 'West End',
      postcode: 'G12 8QQ',
      lat: 55.8732,
      lng: -4.2908
    },
    roomType: 'student-housing',
    leaseDuration: {
      min: 9,
      max: 12
    },
    facilities: ['Wi-Fi', 'Gym', 'Cinema Room', 'Games Room', 'Laundry', 'Study Room', 'Furnished', 'Security'],
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800'
    ],
    available: true,
    landlord: {
      id: 'l6',
      name: 'Student Living Group',
      responseRate: 94,
      memberSince: '2017-09-01'
    },
    size: 22
  }
];

export function getAllListings(): Listing[] {
  return mockListings;
}

export function getListingById(id: string): Listing | null {
  return mockListings.find(listing => listing.id === id) || null;
}

export function searchListings(query: string, filters?: Partial<{
  location: string;
  priceMin: number;
  priceMax: number;
  roomTypes: string[];
  facilities: string[];
}>): Listing[] {
  let results = mockListings;

  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(listing =>
      listing.title.toLowerCase().includes(lowerQuery) ||
      listing.description.toLowerCase().includes(lowerQuery) ||
      listing.location.city.toLowerCase().includes(lowerQuery) ||
      listing.location.area.toLowerCase().includes(lowerQuery)
    );
  }

  if (filters?.location) {
    const lowerLocation = filters.location.toLowerCase();
    results = results.filter(listing =>
      listing.location.city.toLowerCase().includes(lowerLocation) ||
      listing.location.area.toLowerCase().includes(lowerLocation)
    );
  }

  if (filters?.priceMin !== undefined) {
    results = results.filter(listing => listing.price >= filters.priceMin!);
  }

  if (filters?.priceMax !== undefined) {
    results = results.filter(listing => listing.price <= filters.priceMax!);
  }

  if (filters?.roomTypes && filters.roomTypes.length > 0) {
    results = results.filter(listing =>
      filters.roomTypes!.includes(listing.roomType)
    );
  }

  if (filters?.facilities && filters.facilities.length > 0) {
    results = results.filter(listing =>
      filters.facilities!.every(facility =>
        listing.facilities.includes(facility)
      )
    );
  }

  return results;
}
