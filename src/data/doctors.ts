export interface Doctor {
  id: string;
  name: string;
  clinicName: string;
  specialty: string;
  availableSlots: string[];
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Smith",
    clinicName: "HealthFirst Clinic",
    specialty: "General Physician",
    availableSlots: ["9:00", "9:30", "10:00", "10:30"],
  },
  {
    id: "2",
    name: "Dr. Johnson",
    clinicName: "CareNow Clinic",
    specialty: "Orthopedic",
    availableSlots: ["11:00", "11:30", "12:00"],
  },
];

export default doctors;
