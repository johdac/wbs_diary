import { useParams, useLoaderData } from 'react-router';

export const EntryPage = () => {
  const entry = useLoaderData();
  return (
    <>
      <div className="customContainer">
        <img className="mb-6 rounded" src={entry.imageUrl} alt="" />
        <h1>{entry.title}</h1>
        <p className="pb-20">{entry.content}</p>
      </div>
    </>
  );
};
