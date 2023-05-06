const middleSwitch = document.querySelectorAll(".switch")[1].querySelector("input");
const otherSwitches = document.querySelectorAll(".switch:not(:nth-of-type(2)) input");

middleSwitch.addEventListener("click", function() {
    for (let i = 0; i < otherSwitches.length; i++) {
        otherSwitches[i].checked = false;
    }
});

