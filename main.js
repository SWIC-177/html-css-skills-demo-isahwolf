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
