import { useState } from "react";

export const Form = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    date: "",
    content: "",
    imageUrl: "",
  });

  const updateForm = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  const submitForm = (event) => {
    setData((prev) => {
      /**
       * We add an id to the form data object
       */
      const newFormData = {
        ...formData,
        ["id"]: crypto.randomUUID(),
      };

      /**
       * We create the new entries array within our data object by first
       * constructing a new array, consistinng of the old array content
       * spread out + the new entry via formData
       */
      const newEntries = [...prev.entries, newFormData];

      // Then we sort the newEntries array by the date values
      newEntries.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Then we spread the complete prev data object but replace the entries array
      return {
        ...prev,
        entries: newEntries,
      };
    });
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Entry</h3>
        <div className="modal-action">
          <form onSubmit={submitForm} className="w-full">
            <label className="floating-label mb-4">
              <span>Entry Date</span>
              <input
                required
                type="date"
                name="date"
                className="input w-full"
                value={formData.date}
                onChange={updateForm}
              />
            </label>
            <label className="floating-label mb-4">
              <span>Entry Text</span>
              <textarea
                required
                name="content"
                className="textarea h-24 w-full"
                placeholder="Entry Text"
                value={formData.content}
                onChange={updateForm}
              ></textarea>
            </label>
            <label className="input validator floating-label w-full mb-4">
              <span>Image URL</span>
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                value={formData.imageUrl}
                name="imageUrl"
                onChange={updateForm}
                className="w-full"
                type="url"
                required
                placeholder="Image URL"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <div className="flex justify-end mt-4 gap-2">
              <button type="button" className="btn" onClick={() => document.getElementById("my_modal_1").close()}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
