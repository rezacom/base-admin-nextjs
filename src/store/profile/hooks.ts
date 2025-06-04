import { useSelector } from 'react-redux';
import { AppState } from '@/store/types';

export function useReduxWallet() {
  return useSelector<AppState, AppState['wallet']>((select) => select.wallet);
}
