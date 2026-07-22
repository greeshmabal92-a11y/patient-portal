const editButton = document.getElementById("editProfileBtn");

let editing = false;

// Load saved profile
const savedProfile = loadProfile();

if (savedProfile) {

    document.getElementById("name").textContent = savedProfile.name;
    document.getElementById("dob").textContent = savedProfile.dob;
    document.getElementById("gender").textContent = savedProfile.gender;
    document.getElementById("blood").textContent = savedProfile.blood;
    document.getElementById("email").textContent = savedProfile.email;
    document.getElementById("phone").textContent = savedProfile.phone;
    document.getElementById("address").textContent = savedProfile.address;
    document.getElementById("emergency").textContent = savedProfile.emergency;
    document.getElementById("insurance").textContent = savedProfile.insurance;

}

editButton.addEventListener("click", function () {

    const fields = [
        "name",
        "dob",
        "gender",
        "blood",
        "email",
        "phone",
        "address",
        "emergency",
        "insurance"
    ];

    if (!editing) {

        fields.forEach(function (id) {

            const cell = document.getElementById(id);

            cell.contentEditable = true;

            cell.style.backgroundColor = "#f9fafb";
            cell.style.border = "1px solid #2563eb";
            cell.style.padding = "6px";
            cell.style.borderRadius = "4px";

        });

        editButton.textContent = "Save Profile";

        editing = true;

    } else {

        fields.forEach(function (id) {

            const cell = document.getElementById(id);

            cell.contentEditable = false;

            cell.style.backgroundColor = "";
            cell.style.border = "";
            cell.style.padding = "";
            cell.style.borderRadius = "";

        });

        const profile = {

            name: document.getElementById("name").textContent,
            dob: document.getElementById("dob").textContent,
            gender: document.getElementById("gender").textContent,
            blood: document.getElementById("blood").textContent,
            email: document.getElementById("email").textContent,
            phone: document.getElementById("phone").textContent,
            address: document.getElementById("address").textContent,
            emergency: document.getElementById("emergency").textContent,
            insurance: document.getElementById("insurance").textContent

        };

        saveProfile(profile);

        alert("Profile updated successfully.");

        editButton.textContent = "Edit Profile";

        editing = false;

    }

});