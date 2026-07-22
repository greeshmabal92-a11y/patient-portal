const table = document.getElementById("labResultsTable");

const labResultModal = document.getElementById("labResultModal");

const closeView = document.querySelector(".close-view");

if (table && labResultModal) {

    document.addEventListener("click", function (e) {

        // ==========================
        // View Lab Result
        // ==========================

        if (e.target.classList.contains("view-btn")) {

            const row = e.target.closest("tr");

            document.getElementById("viewPatient").textContent =
                "Greeshma";

            document.getElementById("viewDoctor").textContent =
                row.cells[2].textContent;

            document.getElementById("viewTest").textContent =
                row.cells[1].textContent;

            document.getElementById("viewDate").textContent =
                row.cells[0].textContent;

            document.getElementById("viewResult").textContent =
                row.cells[3].textContent;

            document.getElementById("viewStatus").textContent =
                row.cells[4].textContent.trim();

            let remarks = "";

            switch (row.cells[1].textContent.trim()) {

                case "Complete Blood Count":
                    remarks =
                        "All blood cell counts are within the normal range.";
                    break;

                case "Blood Sugar":
                    remarks =
                        "Blood sugar level is above the normal range. Follow dietary recommendations and consult your doctor.";
                    break;

                case "Lipid Profile":
                    remarks =
                        "Borderline cholesterol level detected. Regular exercise and a healthy diet are recommended.";
                    break;

                default:
                    remarks =
                        "No additional remarks available.";

            }

            document.getElementById("viewRemarks").textContent =
                remarks;

            labResultModal.style.display = "flex";

        }

    });

    // ==========================
    // Close Modal
    // ==========================

    closeView.onclick = function () {

        labResultModal.style.display = "none";

    };

    window.onclick = function (e) {

        if (e.target === labResultModal) {

            labResultModal.style.display = "none";

        }

    };

    // ==========================
    // Download Button
    // ==========================

    const downloadButtons =
        document.querySelectorAll(".download-btn");

    downloadButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Lab report download will be available in a future version.");

        });

    });

}
// ==========================
// Search Lab Results
// ==========================

const searchLab = document.getElementById("searchLab");

if (searchLab) {

    searchLab.addEventListener("keyup", function () {

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