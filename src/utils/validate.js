export const checkValidate = (email,password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isEmailValid) return "Email ID is Not Valid";
    if(!isPasswordValid) return "Password is Not Valid";

    return null;
}