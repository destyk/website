import clsx from 'clsx';

import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className="d-flex w-100 h-100">
      <div className={clsx(styles['loader'], 'mx-auto', 'my-auto')}></div>
    </div>
  );
};

export default Loader;
