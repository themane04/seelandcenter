export const validateName = (name: string): boolean => {
    const re = /^[A-ZÀ-ÿ][a-zà-ÿ'-]+(\s[A-ZÀ-ÿ][a-zà-ÿ'-]+)*$/;
    return re.test(name) && name.length <= 150;
};

export const validateEmail = (email: string): boolean => {
    const re =
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
