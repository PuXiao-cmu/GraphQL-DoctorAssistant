import doctors from "../data/doctors";
import appointments from "../data/appointments";
import patients from "../data/patients";

const appointmentResolver = {
  Mutation: {
    bookAppointment: (
      _: any,
      { doctorId, patientId, timeSlot }: { doctorId: string; patientId: string; timeSlot: string }
    ) => {
      const doctor = doctors.find((doc) => doc.id === doctorId);
      if (!doctor) {
        throw new Error("Invalid doctor ID.");
      }
      if (!doctor.availableSlots.includes(timeSlot)) {
        throw new Error("Timeslot unavailable.");
      }
      const patient = patients.find((pat) => pat.id === patientId);
      if (!patient) {
        throw new Error("Patient not found.");
      }

      doctor.availableSlots = doctor.availableSlots.filter((slot) => slot !== timeSlot);

      const newAppointment = { id: `${Date.now()}`, doctor, patient, timeSlot };
      appointments.push(newAppointment);

      return {
        message: "Appointment booked successfully!",
        appointment: newAppointment,
      };
    },
    cancelAppointment: (_: any, { appointmentId }: { appointmentId: string }) => {
      const index = appointments.findIndex((app) => app.id === appointmentId);
      if (index === -1) {
        throw new Error("Appointment not found.");
      }

      const [removed] = appointments.splice(index, 1);
      const doctor = removed.doctor;
      if (doctor) {
        doctor.availableSlots.push(removed.timeSlot);
      }

      return {
        message: "Appointment cancelled successfully!",
      };
    },
    updatePatientName: (
      _: any,
      { appointmentId, newPatientName }: { appointmentId: string; newPatientName: string }
    ) => {
      const appointment = appointments.find((app) => app.id === appointmentId);
      if (!appointment) {
        throw new Error("Appointment not found.");
      }

      appointment.patient.name = newPatientName;
      return {
        message: "Patient name updated successfully!",
        appointment: appointment,
      };
    },
  },
};

export default appointmentResolver;
