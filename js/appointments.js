const form = document.getElementById("appointmentForm");
const table = document.getElementById("appointmentsTable");

const viewModal = document.getElementById("viewAppointmentModal");
const closeView = document.querySelector(".close-view");

let editingIndex = -1;

let appointments = loadAppointments();

if (appointments.length === 0) {

    appointments = [

        {
            patient: "Patient",
            doctor: "Dr. Smith",
            department: "Cardiology",
            date: "2026-07-12",
            time: "10:30",
            status: "Confirmed",
            notes: "No notes available."
        },

        {
            patient: "Patient",
            doctor: "Dr. Wilson",
            department: "Dermatology",
            date: "2026-07-20",
            time: "14:00",
            status: "Pending",
            notes: "No notes available."
        },

        {
            patient: "Patient",
            doctor: "Dr. Johnson",
            department: "Neurology",
            date: "2026-07-28",
            time: "11:15",
            status: "Confirmed",
            notes: "No notes available."
        }

    ];

    saveAppointments(appointments);

}

renderAppointments();

function renderAppointments() {

    table.innerHTML = "";

    appointments.forEach(function (appointment, index) {

        const row = document.createElement("tr");

        const badgeClass =
            appointment.status === "Confirmed"
                ? "badge-success"
                : appointment.status === "Pending"
                    ? "badge-warning"
                    : "badge-danger";

        row.innerHTML = `

<td data-date="${appointment.date}">
${new Date(appointment.date).toLocaleDateString("en-GB",{
day:"2-digit",
month:"short",
year:"numeric"
})}
</td>

<td>${appointment.doctor}</td>

<td>${appointment.department}</td>

<td data-time="${appointment.time}">
${new Date("1970-01-01T"+appointment.time).toLocaleTimeString("en-US",{
hour:"numeric",
minute:"2-digit"
})}
</td>

<td>
<span class="badge ${badgeClass}">
${appointment.status}
</span>
</td>

<td>

<button
class="btn btn-secondary view-btn"
data-index="${index}">
View
</button>

<button
class="btn btn-primary reschedule-btn"
data-index="${index}">
Reschedule
</button>

<button
class="btn btn-danger cancel-btn"
data-index="${index}"
${appointment.status === "Cancelled" ? "disabled" : ""}>

${appointment.status === "Cancelled"
    ? "Cancelled"
    : "Cancel"}
</button>

</td>

`;

        table.appendChild(row);

    });

}
if (form && table) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const patient =
            document.getElementById("patientName").value;

        const doctor =
            document.getElementById("doctor").value;

        const department =
            document.getElementById("department").value;

        const date =
            document.getElementById("appointmentDate").value;

        const time =
            document.getElementById("appointmentTime").value;

        const notes =
            document.getElementById("notes").value || "No notes available.";

        if (
            patient === "" ||
            doctor === "" ||
            department === "" ||
            date === "" ||
            time === ""
        ) {

            alert("Please fill all fields.");
            return;

        }

        const appointment = {

            patient,
            doctor,
            department,
            date,
            time,
            status: "Confirmed",
            notes

        };

        if (editingIndex >= 0) {

            appointments[editingIndex] = {

                ...appointments[editingIndex],

                doctor,
                department,
                date,
                time,
                notes

            };

            editingIndex = -1;

        }

        else {

            appointments.push(appointment);

        }

        saveAppointments(appointments);

        renderAppointments();

        form.reset();

        document.getElementById("appointmentModal").style.display = "none";

    });

    document.addEventListener("click", function (e) {

        if (e.target.classList.contains("view-btn")) {

            const index =
                e.target.dataset.index;

            const appointment =
                appointments[index];

            document.getElementById("viewPatient").textContent =
                appointment.patient;

            document.getElementById("viewDoctor").textContent =
                appointment.doctor;

            document.getElementById("viewDepartment").textContent =
                appointment.department;

            document.getElementById("viewDate").textContent =
                new Date(appointment.date).toLocaleDateString("en-GB");

            document.getElementById("viewTime").textContent =
                new Date("1970-01-01T" + appointment.time)
                    .toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit"
                    });

            document.getElementById("viewNotes").textContent =
                appointment.notes;

            viewModal.style.display = "flex";

        }

        if (e.target.classList.contains("cancel-btn")) {

            const confirmCancel = confirm(
                "Are you sure you want to cancel this appointment?"
            );

            if (!confirmCancel) return;

            const index =
                e.target.dataset.index;

            appointments[index].status = "Cancelled";

            saveAppointments(appointments);

            renderAppointments();

        }

        if (e.target.classList.contains("reschedule-btn")) {

            const index =
                e.target.dataset.index;

            editingIndex = index;

            const appointment =
                appointments[index];

            document.getElementById("patientName").value =
                appointment.patient;

            document.getElementById("doctor").value =
                appointment.doctor;

            document.getElementById("department").value =
                appointment.department;

            document.getElementById("appointmentDate").value =
                appointment.date;

            document.getElementById("appointmentTime").value =
                appointment.time;

            document.getElementById("notes").value =
                appointment.notes;

            document.getElementById("appointmentModal").style.display =
                "flex";

        }

    });

    closeView.onclick = function () {

        viewModal.style.display = "none";

    };

}
// ==========================
// Search Appointments
// ==========================

const searchAppointment =
    document.getElementById("searchAppointment");

if (searchAppointment) {

    searchAppointment.addEventListener("keyup", function () {

        const filter =
            this.value.toLowerCase();

        const rows =
            table.querySelectorAll("tr");

        rows.forEach(function (row) {

            const text =
                row.textContent.toLowerCase();

            row.style.display =
                text.includes(filter)
                    ? ""
                    : "none";

        });

    });

}

// ==========================
// Close View Modal
// ==========================

window.addEventListener("click", function (e) {

    if (e.target === viewModal) {

        viewModal.style.display = "none";

    }

});