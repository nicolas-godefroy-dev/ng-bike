import { Coordinate } from '@ng-bike/utils';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ROUEN_REGION } from '@/constants/map';

export type LocationStore = {
  userLocation: Coordinate;
  isFollowingUser: boolean;
  setUserLocation: (userLocation: Coordinate) => void;
  followUserLocation: () => void;
  unfollowUserLocation: () => void;
};

export const useLocationStore = create<LocationStore, [['zustand/devtools', never]]>(
  devtools((set) => ({
    userLocation: {
      latitude: ROUEN_REGION.latitude,
      longitude: ROUEN_REGION.longitude,
    },
    isFollowingUser: true,
    setUserLocation: (userLocation: Coordinate) => set((_state) => ({ userLocation })),
    followUserLocation: () => set((_state) => ({ isFollowingUser: true })),
    unfollowUserLocation: () => set((_state) => ({ isFollowingUser: false })),
  })),
);
