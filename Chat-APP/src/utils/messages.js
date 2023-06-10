const genrtationMessage = (text) => {
  return {
    text,
    createdAt: new Date().getTime(),
  };
};

module.exports = {
  genrtationMessage,
};
