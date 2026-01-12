import { Link } from 'react-router';
import { DateBadge } from './DateBadge';

export const Card = ({ entry, isLast }) => {
  const croppedContent = entry.content.trim().split(/s+/).slice(0, 10).join(' ');
  return (
    <div className={`card bg-base-100 max-w-full relative w-lg shadow-sm m-auto mb-8 ${isLast ? 'mb-20' : ''}`}>
      <Link to={entry.id}>
        <DateBadge date={entry.date} />
        <figure>
          <img className="rounded-t" src={entry.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2>{entry.title}</h2>
          <p>{croppedContent}... </p>
          <div className="mt-4 card-actions justify-end">
            <button className="btn btn-primary">Read more</button>
          </div>
        </div>
      </Link>
    </div>
  );
};
