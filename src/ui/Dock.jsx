import { Icon } from "./Icon";

export const Dock = ({ data }) => {
  return (
    <>
      <div className="dock rounded-md left-5 right-5 bottom-5 w-[calc(100%-2.5rem)] max-w-96 m-auto p-2">
        <button className="cursor-pointer mb-0">
          <Icon svg="first_page" />
          <span className="dock-label">Start</span>
        </button>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="cursor-pointer mb-0 border-l border-slate-700 border-r rounded-none "
        >
          <Icon svg="stylus" />
          <span className="dock-label">Add Entry</span>
        </button>
        <button className="cursor-pointer mb-0">
          <Icon svg="filter" />
          <span className="dock-label">Filter</span>
        </button>
      </div>
    </>
  );
};
