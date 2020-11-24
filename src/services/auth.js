import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = "@ioasys:token";

export const isAuthenticated = async () => await AsyncStorage.getItem(TOKEN_KEY) !== null;

export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY);

export const setToken = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

