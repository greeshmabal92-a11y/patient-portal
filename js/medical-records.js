const table = document.getElementById("recordsTable");

const recordModal = document.getElementById("recordModal");

const closeView = document.querySelector(".close-view");

if (table && recordModal) {

    document.addEventListener("click", function (e) {

        // View Record
        if (e.target.classList.contains("view-btn")) {

            const row = e.target.closest("tr");

            document.getElementById("recordPatient").textContent =
                "Greeshma";

            document.getElementById("recordDoctor").textContent =
                row.cells[1].textContent;

            document.getElementById("recordDiagnosis").textContent =
                row.cells[2].textContent;

            document.getElementById("recordTreatment").textContent =
                row.cells[3].textContent;

            document.getElementById("recordDate").textContent =
                row.cells[0].textContent;

            document.getElementById("recordStatus").textContent =
                row.cells[4].textContent.trim();

            let notes = "";

            switch (row.cells[2].textContent.trim()) {

                case "Hypertension":
                    notes =
                        "Patient advised to reduce salt intake, exercise regularly and return for follow-up after 3 months.";
                    break;

                case "Eczema":
                    notes =
                        "Apply topical cream twice daily and keep the affected skin moisturized.";
                    break;

                case "Migraine":
                    notes =
                        "Take prescribed pain relief medication and avoid known migraine triggers.";
                    break;

                default:
                    notes =
                        "No additional notes available.";
            }

            document.getElementById("recordNotes").textContent = notes;

            recordModal.style.display = "flex";
        }

    });

    closeView.onclick = function () {

        recordModal.style.display = "none";

    };

    window.onclick = function (e) {

        if (e.target === recordModal) {

            recordModal.style.display = "none";

        }

    };

    // Download Button
    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Report download will be available in a future version.");

        });// ==========================
// Search Medical Records
// ==========================

const searchRecord = document.getElementById("searchRecord");

if (searchRecord) {

    searchRecord.addEventListener("keyup", function () {

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

    });

}