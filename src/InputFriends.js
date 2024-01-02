import { useState } from "react";

export function InputFriends({
  person,
  setPerson,
  photo,
  setPhoto,
  handleSubmit,
}) {
  return (
    <form className="bg-yellow-300 p-2">
      <div>
        <label htmlFor="friend_name">Friend's name</label>
        <input
          id="friend_name"
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          className="border-2 rounded-sm"
        />
      </div>
      <div>
        <label htmlFor="friend_name">Image URL</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="border-2 rounded-sm"
        />
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Add
      </button>
    </form>
  );
}
