const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let maxMarks = 400;

    let input1 = this.querySelector("#input1");
    let input2 = this.querySelector("#input2");
    let input3 = this.querySelector("#input3");
    let input4 = this.querySelector("#input4");
    let totalMarks = (Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value));
    let percentage = (totalMarks / maxMarks) * 100;
    let newp = document.createElement("p");

    newp.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;


    let existingP = document.querySelector('.newp_font');
    if (existingP) {
        existingP.innerText = newp.innerText;
    } else {
        let body = document.querySelector('form');
        body.insertAdjacentElement("beforeend", newp);
        newp.classList.add('newp_font');
    }
})
