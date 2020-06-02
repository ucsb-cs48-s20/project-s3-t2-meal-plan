export const calculateCalories = (calory) => {
  if (Math.round(calory) == 0) return 0;
  if (calory < 0) return 0;
  if (calory > 0) return Math.round(calory);
  else throwError("calories should be numbers");
};

function throwError(text) {
  throw new Error(text);
}

export default calculateCalories;
