export const ERRORS = [ 
{
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
        return val.length > 6 && val.includes(" ");
    },
},
{id: "email", msg: "Please enter a valid email address.(must include '@' and '.com')",
validate(val) {
    return val.includes("@") && val.includes(".com");
},
},
{id: "phone", msg: "Please enter a phone number (xxxxxxxxxx).",
validate(val) {
    return val.length == 10;
},
},
{
    id: "message",
    msg: "Please enter a message between 10 and 100 characters.",
    validate(val) {
        return val.length > 10 && val.length < 100;
    },
},
];

export const hideError = (el) => {
    el.parentNode.querySelector(".error").classList.remove("is-error");
};

export const renderError = (el, msg) => {
    const errorEl = el.parentNode.querySelector(".error");

    if (errorEl) errorEl.classList.add("is-error");
    else {
        const errorElement = document.createElement("p");
        errorElement.className = "error is-error";
        errorElement.textContent = msg;
        el.parentNode.appendChild(errorElement);
    }
};