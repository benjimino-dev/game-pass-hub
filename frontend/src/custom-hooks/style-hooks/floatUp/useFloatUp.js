import styles from './useFloatUp.module.css';
import useStyleOnMount from '../useStyleOnMount';

const useFloatUp = () => {
  const floatUp = useStyleOnMount(styles.floatUp);
  return floatUp;
};

export default useFloatUp;
