import Lottie from 'react-lottie';
import animationData from './dods-loader.json';

const Loader = () => {
  return (
    <Lottie
      options={{ loop: true, autoplay: true, animationData: animationData }}
      height={40}
      width={40}
    />
  );
};

export default Loader;
