let handlePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Pankaj");
  }, 2000);
  // Resolve the promise
  resolve();
  reject();
});

handlePromise
  .then(() => {
    console.log("Promise resolved");
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

const handleA = async () => {
  await new Promise((resolve, reject) => {
    console.log("apnkaj");
    // Resolve the promise
    resolve();
    // Or reject the promise if needed
    // reject(new Error("Promise rejected"));
  });

  console.log("Promise resolved");
};

handleA().catch((error) => {
  console.error("Promise rejected:", error);
});
