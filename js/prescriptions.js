const table = document.getElementById("prescriptionsTable");

const prescriptionModal = document.getElementById("prescriptionModal");

const closeView = document.querySelector(".close-view");

if (table && prescriptionModal) {

    document.addEventListener("click", function (e) {

        // ==========================
        // View Prescription
        // ==========================

        if (e.target.classList.contains("view-btn")) {

            const row = e.target.closest("tr");

            document.getElementById("viewPatient").textContent =
                "Greeshma";

            document.getElementById("viewDoctor").textContent =
                row.cells[1].textContent;

            document.getElementById("viewMedicine").textContent =
                row.cells[2].textContent;

            document.getElementById("viewDosage").textContent =
                row.cells[3].textContent;

            document.getElementById("viewDuration").textContent =
                row.cells[4].textContent;

            let instructions = "";

            switch (row.cells[2].textContent.trim()) {

                case "Amlodipine":
                    instructions =
                        "Take one tablet once daily after breakfast.";
                    break;

                case "Hydrocortisone Cream":
                    instructions =
                        "Apply a thin layer to the affected area twice daily.";
                    break;

                case "Sumatriptan":
                    instructions =
                        "Take one tablet at the first sign of a migraine. Do not exceed the prescribed dose.";
                    break;

                default:
                    instructions =
                        "Follow your doctor's instructions.";

            }

            document.getElementById("viewInstructions").textContent =
                instructions;

            prescriptionModal.style.display = "flex";

        }

    });

    // ==========================
    // Close Modal
    // ==========================

    closeView.onclick = function () {

        prescriptionModal.style.display = "none";

    };

    window.onclick = function (e) {

        if (e.target === prescriptionModal) {

            prescriptionModal.style.display = "none";

        }

    };

    // ==========================
    // Download Prescription
    // ==========================

    const downloadButtons =
        document.querySelectorAll(".download-btn");

    downloadButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Prescription download will be available in a future version.");

        });

    });

}
// ==========================
// Search Prescriptions
// ==========================

const searchPrescription =
    document.getElementById("searchPrescription");

if (searchPrescription) {

    searchPrescription.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        const rows = table.querySelectorAll("tr");

        rows.forEach(function (row) {

            const text = row.textContent.toLowerCase();

            row.style.display = text.includes(filter)
                ? ""
                : "none";

        });

    });

}