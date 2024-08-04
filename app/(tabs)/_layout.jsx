import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs

      screenOptions={{
        tabBarActiveTintColor: "#f2c94c",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1f2d3a",
          borderBlockColor: "#1f2d3a",
          height: 55
          
        }

      }}>
      
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: 'scan',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'scan' : 'scan-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />



      {/* {[



      ].map((pathname, index) => (
        <Tabs.Screen
          key={index}
          name={pathname}
          options={{
            href: null,
          }}
        />
      ))} */}

    </Tabs>
  );
}
