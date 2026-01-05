import { DateBadge } from "./DateBadge";

export const Card = ({ entry, isLast }) => {
  return (
    <div className={`card bg-base-100 max-w-full w-96 shadow-sm m-auto mb-8 ${isLast ? "mb-20" : ""}`}>
      <DateBadge date={entry.date} />
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>{entry.content}</p>
        <div className="mt-4 card-actions justify-end">
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};
