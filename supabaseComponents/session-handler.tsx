import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Session} from '@supabase/supabase-js';
import {supabase} from '../lib/supabase';
import Auth from './auth';

export default function SessionHandler() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      {session && session.user ? (
        <View style={{padding: 20}}>
          <Text>Logged in as: {session.user.email}</Text>
          <Text
            style={{color: '#0284c7', marginTop: 10}}
            onPress={() => supabase.auth.signOut()}>
            Sign Out
          </Text>
        </View>
      ) : (
        <Auth />
      )}
    </View>
  );
}
