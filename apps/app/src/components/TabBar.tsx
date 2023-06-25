import { Tabs } from 'expo-router';
import React from 'react';

import { tw } from '@ng-bike/twrnc';

import FeedIcon from '@assets/icons/feed.svg';
import HomeIcon from '@assets/icons/home.svg';
import UserIcon from '@assets/icons/user.svg';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const ICON_SIZE = 28;
const TAB_BAR_SHOW_LABEL = false;

const MapTabBarIcon = ({ color }: TabBarIconProps) => (
  <HomeIcon color={color} width={ICON_SIZE} height={ICON_SIZE} />
);

const ActivityTabBarIcon = ({ color }: TabBarIconProps) => (
  <FeedIcon color={color} width={ICON_SIZE} height={ICON_SIZE} />
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
        headerShown: false,
        tabBarShowLabel: TAB_BAR_SHOW_LABEL,
        tabBarLabel: 'Home',
        tabBarTestID: 'map-tab',
        tabBarIcon: MapTabBarIcon,
      }}
    />
    <Tabs.Screen
      name="feed"
      options={{
        tabBarShowLabel: TAB_BAR_SHOW_LABEL,
        tabBarLabel: 'Feed',
        headerTitle: 'Feed',
        tabBarTestID: 'feed-tab',
        tabBarIcon: ActivityTabBarIcon,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarShowLabel: TAB_BAR_SHOW_LABEL,
        tabBarLabel: 'Settings',
        headerTitle: 'Settings',
        tabBarTestID: 'settings-tab',
        tabBarIcon: UserTabBarIcon,
      }}
    />
  </Tabs>
);
