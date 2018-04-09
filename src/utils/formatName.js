export default name => {
  const splitName = name.split(" ");
  if (splitName.length !== 1) {
    const firstNameInitial = splitName[0][0] + ".";
    return [firstNameInitial, ...splitName.slice(1, splitName.length)]
      .join(" ")
      .toUpperCase();
  }
  return splitName.join(" ").toUpperCase();
};
