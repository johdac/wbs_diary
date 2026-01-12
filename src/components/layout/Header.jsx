import { Link } from 'react-router';
import logo from '/logo-diary.svg';

export const Header = () => {
  return (
    <>
      <div className="text-center m-auto mb-5 flex justify-center">
        <Link to={'/'} className="m-5">
          <img className="w-60" src={logo} alt="" />
        </Link>
      </div>
    </>
  );
};
