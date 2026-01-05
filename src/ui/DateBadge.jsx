export const DateBadge = ({ date }) => {
  const dateObject = new Date(date);
  return (
    <div className="indicator -right-12">
      <div className="p-1 mt-8 w-15 text-center indicator-item indicator-start badge badge-secondary block h-auto">
        <div className="text-[10px] leading-4">
          {dateObject.toLocaleDateString("en-US", { weekday: "short" })},&nbsp;
          {dateObject.toLocaleDateString("en-US", { month: "short" })}
        </div>
        <div className="text-[32px] font-bold leading-none">
          {dateObject.toLocaleDateString("en-US", { day: "2-digit" })}
        </div>
        <div className="text-[16px]">{dateObject.toLocaleDateString("en-US", { year: "numeric" })}</div>
      </div>
    </div>
  );
};
