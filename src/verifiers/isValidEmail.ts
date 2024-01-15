
export function isValidEmail(email: string) {
    // Regular expression for a simple email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

}