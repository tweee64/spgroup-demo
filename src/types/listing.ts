export type RoomType = 'studio' | 'shared' | 'student-housing' | 'co-living';

export interface Location {
  city: string;
  area: string;
  postcode: string;
  lat: number;
  lng: number;
}

export interface LeaseDuration {
  min: number; // months
  max?: number;
}

export interface Landlord {
  id: string;
  name: string;
  responseRate: number;
  memberSince: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: Location;
  roomType: RoomType;
  leaseDuration: LeaseDuration;
  facilities: string[];
  images: string[];
  available: boolean;
  landlord: Landlord;
  size?: number; // square meters
}

export interface SearchFilters {
  query: string;
  location: string;
  priceMin: number;
  priceMax: number;
  roomTypes: RoomType[];
  leaseDuration: string;
  facilities: string[];
}
