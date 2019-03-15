export const isAdult = (age) => age >= 18 ? true : false;
export const canDrink = (age) => age >= 21;

export default (age) => age >= 65;

// or remove export before each function and add
// export { isAdult, canDrink };

// export default subtract;
// export default (a, b) => a - b;