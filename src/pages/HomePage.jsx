import { useEffect, useState } from 'react';
import { IconLibrary } from '../core/IconLibrary';
import { Dock } from '../components/ui/Dock';
import { Diary } from '../components/ui/Diary';
import { FormModal } from '../components/ui/FormModal';
import { useSearchParams } from 'react-router';

export const HomePage = () => {
  // LOCAL STORAGE MANAGEMENT
  /**
   * We use "lazy initialization" with useState by passing a function instead of a value.
   * JavaScript evaluates function arguments on every render, but when the argument is a
   * function, it is only passed by reference and not executed.
   *
   * React detects this and calls the function exactly once on the initial render to
   * compute the initial state. On subsequent renders, the function is ignored and the
   * existing state value is reused.
   */
  const [data, setData] = useState(() => {
    const storageData = localStorage.getItem('data');
    return storageData
      ? JSON.parse(storageData)
      : {
          lastEntry: null,
          entries: [],
        };
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // FILTERED ENRIES
  const [searchParams, setSeachParams] = useSearchParams();
  const from = searchParams.get('from');
  const until = searchParams.get('until');
  const filteredEntries = data.entries.filter((entry) => {
    if (from && until) {
      if (entry.date >= from && entry.date <= until) return true;
      else return false;
    }
    if (from) {
      if (entry.date >= from) return true;
      else return false;
    }
    if (until) {
      if (entry.date <= until) return true;
      else return false;
    }
    return true;
  });

  // FORM MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) document.getElementById('my_modal_1').showModal();
    else document.getElementById('my_modal_1').close();
  });

  return (
    <>
      <IconLibrary />
      <div className="customContainer pb-10">
        <FormModal data={filteredEntries} setData={setData} />
        <Diary entries={filteredEntries ? filteredEntries : []} />
        <Dock searchParams={searchParams} setSearchParams={setSeachParams} />
      </div>
    </>
  );
};
