// ==========================
// Appointments
// ==========================

function saveAppointments(appointments) {

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

}

function loadAppointments() {

    const appointments =
        localStorage.getItem("appointments");

    return appointments
        ? JSON.parse(appointments)
        : [];

}

// ==========================
// Profile
// ==========================

function saveProfile(profile) {

    localStorage.setItem(
        "profile",
        JSON.stringify(profile)
    );

}

function loadProfile() {

    const profile =
        localStorage.getItem("profile");

    return profile
        ? JSON.parse(profile)
        : null;

}