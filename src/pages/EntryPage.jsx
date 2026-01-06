import { useParams, useLoaderData } from 'react-router';

export const EntryPage = () => {
  const entry = useLoaderData();
  return <>Entry for ID {entry.id}</>;
};
