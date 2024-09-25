import {useEffect} from 'react';
import i18n from '@Language/i18n';
import {useNavigation, NavigationProp} from '@react-navigation/native';

import {RoutesEnum} from '@Enum/RoutesEnum';

export default function useSplashViewModel() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const loadingMessage = i18n.t('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(RoutesEnum.Login);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return {loadingMessage};
}
