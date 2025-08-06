const useEmailValidation = () => {

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  return validateEmail;
};

export default useEmailValidation;
