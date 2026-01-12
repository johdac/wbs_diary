import { Icon } from './Icon';
import { useState } from 'react';

export const Dock = ({ searchParams, setSearchParams }) => {
  // Message
  const [filterMessage, setFilterMessage] = useState('');

  // Filter data
  const [filterData, setFilterData] = useState({
    from: '',
    until: '',
  });

  const updateFilterData = (event) => {
    setFilterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Filter Modal State Management
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filtering = () => {
    if (filterData.from && filterData.until && filterData.from > filterData.until)
      setFilterMessage('Until Date must be after From Date');
    else {
      setFilterMessage('');
      setSearchParams((prev) => {
        if (filterData.from) prev.set('from', filterData.from);
        if (filterData.until) prev.set('until', filterData.until);
        return prev;
      });
    }
  };

  const clearFilter = () => {
    setSearchParams((prev) => {
      prev.delete('from');
      prev.delete('until');
      return prev;
    });
  };

  return (
    <>
      <div className="fixed z-60 left-5 right-5 bottom-5">
        <div
          className={`${
            isFilterOpen ? '' : 'hidden'
          } absolute -top-70 w-2xs left-1/2 -ml-[144px] dark:bg-base-100 bg-gray-200 p-4 rounded`}
        >
          <div>
            <label className="floating-label mb-4">
              <span>From Date</span>
              <input
                className="border w-full rounded p-2 mb-2"
                type="date"
                name="from"
                value={filterData.from}
                onChange={updateFilterData}
              />
            </label>
          </div>
          <div>
            <label className="floating-label mb-4">
              <span>Until Date</span>
              <input
                className="border w-full rounded p-2 mb-2"
                type="date"
                name="until"
                value={filterData.until}
                onChange={updateFilterData}
              />
            </label>
          </div>
          <div className="text-warning mb-2 text-xs">{filterMessage}</div>
          <button className="btn mr-2" onClick={clearFilter}>
            Clear Filter
          </button>
          <button className="btn btn-primary" onClick={filtering}>
            Filter
          </button>
        </div>
        <div className="dock mb-2 dark:bg-dock-darkmode bg-dock-lightmode text-gray-300 rounded-md w-[calc(100%-2.5rem)] max-w-96 m-auto p-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer mb-0"
          >
            <Icon svg="first_page" />
            <span className="dock-label">Start</span>
          </button>
          <button
            onClick={() => document.getElementById('my_modal_1').showModal()}
            className="cursor-pointer mb-0 border-l border-slate-700 border-r rounded-none "
          >
            <Icon svg="stylus" />
            <span className="dock-label">Add Entry</span>
          </button>
          <button onClick={() => setIsFilterOpen((prev) => !prev)} className="cursor-pointer mb-0">
            <Icon svg="filter" />
            <span className="dock-label">Filter</span>
          </button>
        </div>
      </div>
    </>
  );
};
