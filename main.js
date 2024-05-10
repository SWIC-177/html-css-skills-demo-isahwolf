/**
 * 1. The name field must not be empty. Let's assume a minimum of 6 characters with at least one space. It should be a full name. The message will say, "Please enter your full name."
* 2. The email field must not be empty and must be a valid email address. The message will say, "Please enter a valid email address."
* 3. The phone number field must not be empty and must be a valid phone number. The message will say, "Please enter a valid phone number."
* 4. The message field must be between 10 and 100 characters. The message will say, "Please enter a message between 10 and 100 characters."
* 5. The 'Submit' button should be disabled until all fields have been touched and are valid.
 */

/**
 * TODO:
 * 1. 'Select' all of the input fields.
 * 2. 'Select' the submit button.
 * 3. Add event listeners to each input field, such that
 *  upon losing focus (`blur` event) on the input fields, we will
 * show the error. For now, we are not validating the input fields.
 */
import { ERRORS, hideError, renderError } from "./src/utils";

console.log(ERRORS);

const formEls = [
    ...Array.from(document.querySelectorAll("input, textarea")),
    document.querySelector("#message"),
];
console.log(formEls);

const formBtn = [
    ...Array.from(document.querySelectorAll("button[type='submit]")),
];
console.log(formBtn);

formEls.forEach((el) => {
    el.addEventListener("blur", (e) => {
        const error = ERRORS.find((error) => error.id === e.target.id);
        if (!error.validate(e.target.value)) {
            renderError(e.target, error.msg);
        } else {
            hideError(e.target);
        }
    });
});
