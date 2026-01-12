export const DateBadge = ({ date }) => {
  const dateObject = new Date(date);
  return (
    <div className="absolute indicator left-12">
      <div className="py-1 px-3 mt-8 w-15 indicator-item indicator-start badge badge-secondary block h-auto">
        <div className="text-[10px] leading-4">{dateObject.toLocaleDateString('en-US', { weekday: 'short' })}</div>
        <div className="text-[32px] font-bold leading-none">
          {dateObject.toLocaleDateString('en-US', { day: '2-digit' })}
        </div>
        <div className="text-[11px]">
          {dateObject.toLocaleDateString('en-US', { month: 'short' })}&nbsp;
          {dateObject.toLocaleDateString('en-US', { year: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
