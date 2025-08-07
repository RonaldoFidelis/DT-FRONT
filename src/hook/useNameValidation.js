const useNameValidation = () => {
  return (name) => {
    if (name.length <= 10) return false;
    const allCharsSame = name.split('').every((char) => char === name[0]);
    return !allCharsSame;
  };
};
export default useNameValidation;
