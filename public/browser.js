console.log("frontend js ishga tushd");

let createField = document.getElementById("create-field");

function itemTemplate (item) {
    return `
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm me-1">
                Ogartirish
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
        </div>
    </li>
    `;
}

document
    .getElementById("create-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        axios
            .post("/create-item", { reja: createField.value })
            .then((response) => {
                document.getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
                createField.value = "";
                createField.focus();

            } ) 
            .catch((errr) => {
                console.log("iltimos qaytadan harakat qiling")
            } )
    });

    document.addEventListener("click", function (e) {
        // delete op
        if (e.target.classList.contains("delete-me")) {
            if (confirm("aniq ochirmoqchimisiz")) {
                axios
                .post("/delete-item", {id: e.target.getAttribute("data-id")})
                .then((response) => {
                    console.log(response.data)
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    alert("please try again")
                });
            }
        }
        // edit op
        if (e.target.classList.contains("edit-me")) {
            alert("edit")
        }

    });