import { Card } from "./Card";

export const Diary = ({ entries }) => {
  if (entries.length === 0)
    return <p className="m-auto text-3xl text-center max-w-2xs pt-20">No entries created yet</p>;
  else {
    return entries.map((entry) => {
      return <Card entry={entry} />;
    });
  }
};
