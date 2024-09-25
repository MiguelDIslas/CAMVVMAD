import {Platform} from 'react-native';

/**
 * Verifica si la plataforma es Android
 */
export const isAndroid = Platform.OS === 'android';

/**
 * Verifica si la plataforma es iOS
 */
export const isIOS = Platform.OS === 'ios';
