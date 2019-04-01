import React from 'react';
import { Button } from 'react-native';

export function MenuButton({ title, onPress }: any) {
  return <Button title={title} onPress={onPress} />
}
