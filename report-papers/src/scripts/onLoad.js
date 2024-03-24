const onLoad = (labsArray) => {
    const view = document.querySelector("main .view");
    const navigation = document.querySelector("main .navigation");

    let clickedLabBtn = null;
    let clickedComponentButton = null;

    const updateClickedLabButton = (newLabBtn) => {
        updateClickedComponentButton(null);

        if (clickedLabBtn) {
            clickedLabBtn.classList.replace("clicked", "finish");
        };

        clickedLabBtn = newLabBtn;
        clickedLabBtn.classList.replace("finish", "clicked");
    };

    const updateClickedComponentButton = (newComponentBtn) => {
        if (clickedComponentButton) {
            clickedComponentButton.classList.replace("clicked", "btn");
        };

        if (!newComponentBtn) {
            view.innerHTML = ""; // clear the view because no button is pressed
            clickedComponentButton = null;
            return;   
        }; 

        clickedComponentButton = newComponentBtn;
        clickedComponentButton.classList.replace("btn", "clicked");
    };

    const generateComponentButtons = (components) => {
        return components.map(component => `<div class="btn">${component.displayName}</div>`).join('');
    };

    const setupComponentButtons = (components) => {
        navigation.innerHTML = generateComponentButtons(components);

        const buttons = navigation.querySelectorAll(".btn");
        buttons.forEach((btn, i) => {
            btn.onclick = () => {
                view.innerHTML = components[i].html;
                updateClickedComponentButton(btn);
            };
        });
    };

    labsArray.forEach(labObj => {
        if (!labObj.isFinished) return;

        const labBtn = document.getElementById(labObj.btnId);
        labBtn.classList.add("finish");

        labBtn.onclick = () => {
            updateClickedLabButton(labBtn);
            setupComponentButtons(labObj.components);
        };
    });
};