const modal = document.getElementById("appointmentModal");

const openBtn = document.getElementById("openAppointmentModal");

const closeBtn = document.querySelector(".close");

if (modal && openBtn && closeBtn) {

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

}