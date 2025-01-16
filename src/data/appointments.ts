import doctors from "./doctors";
import patients from "./patients";

export interface Appointment {
  id: string;
  doctor: typeof doctors[0];
  patient: typeof patients[0];
  timeSlot: string;
}

const appointments: Appointment[] = [
  {
    id: "1",
    doctor: doctors[0],
    patient: patients[0],
    timeSlot: "9:00",
  },
];

export default appointments;
