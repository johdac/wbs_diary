import { Link } from 'react-router';

export const Footer = () => {
  return (
    <>
      <div className="text-center">
        <Link to={'/imprint'}>Imprint</Link>
      </div>
    </>
  );
};
