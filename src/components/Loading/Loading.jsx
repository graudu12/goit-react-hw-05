import css from '../Loading/Loading.module.css';
import { Oval } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className={css.loader}>
      <Oval
        visible={true}
        height="40"
        width="40"
        color="blue"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
