import styles from './useFadeIn.module.css';
import useStyleOnMount from '../useStyleOnMount';

const useFadeIn = () => {
  const fadeIn = useStyleOnMount(styles.fadeIn);
  return fadeIn;
};

export default useFadeIn;
