import { Tabs } from 'expo-router';
import React from 'react';

import { tw } from '@ng-bike/twrnc';

import ActivityIcon from '@assets/icons/activity.svg';
import MapIcon from '@assets/icons/map.svg';
import UserIcon from '@assets/icons/user.svg';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const ICON_SIZE = 24;

const MapTabBarIcon = ({ color }: TabBarIconProps) => (
  <MapIcon color={color} width={ICON_SIZE} height={ICON_SIZE} />
);

const ActivityTabBarIcon = ({ color }: TabBarIconProps) => (
  <ActivityIcon color={color} width={ICON_SIZE} height={ICON_SIZE} />
);

const UserTabBarIcon = ({ color }: TabBarIconProps) => (
  <UserIcon color={color} width={ICON_SIZE} height={ICON_SIZE} />
);

export const TabBar = () => (
  <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarStyle: tw`border-t-2`,
      tabBarLabelStyle: tw`text-caption2`,
    }}>
    <Tabs.Screen
      name="index"
      options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarTestID: 'map-tab',
        tabBarIcon: MapTabBarIcon,
      }}
    />
    <Tabs.Screen
      name="feed"
      options={{
        tabBarShowLabel: false,
        headerTitle: 'Feed',
        tabBarTestID: 'map-tab',
        tabBarIcon: ActivityTabBarIcon,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarShowLabel: false,
        headerTitle: 'Settings',
        tabBarTestID: 'settings-tab',
        tabBarIcon: UserTabBarIcon,
      }}
    />
  </Tabs>
);
