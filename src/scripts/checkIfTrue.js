const checkIfTrue = function(id) {
    if (questionMap.get(id)) {
        console.log('true');
    } else console.log('false');
};

const buttons = Array.from(document.getElementsByClassName('button'));
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        checkIfTrue(button.id);
    });
});
