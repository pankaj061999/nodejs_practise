// const fs = require("fs");

// const getNotes = () => {
//   return "getnotes  function";
// };

// const finalNotes = function (title, body) {
//   const notes = loadNotes();
//   notes.push({
//     title: title,
//     body: body,
//   });
//   savenotes(notes);
//   //   return title + body;
// };

// const savenotes = function (notes) {
//   const T1 = JSON.stringify(notes);
//   fs.writeFileSync("notes.json", T1);
// };

// const loadNotes = function () {
//   try {
//     const loadDatabuffer = fs.readFileSync("01-file.json");
//     const dataJSON = loadDatabuffer.toString();
//     return JSON.parse(dataJSON);
//   } catch {
//     return [];
//   }
// };

// module.exports = {
//   getNotes: getNotes(),
//   finalNotes: finalNotes(),
//   loadNotes: loadNotes(),
// };

const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
