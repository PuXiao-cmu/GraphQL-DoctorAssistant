import doctors from "../data/doctors";

const doctorResolver = {
  Query: {
    doctorDetails: (_: any, { doctorId }: { doctorId: string }) => {
      const doctor = doctors.find((doctor) => doctor.id === doctorId);
      if (!doctor) {
        throw new Error("Doctor not found.");
      }
      const { name, clinicName, specialty } = doctor;
      return { name, clinicName, specialty };
    },
    availableSlots: (_: any, { doctorId }: { doctorId: string }) => {
      const doctor = doctors.find((doctor) => doctor.id === doctorId);
      if (!doctor) {
        throw new Error("Doctor not found.");
      }
      return doctor.availableSlots;
    },
  },
};

export default doctorResolver;
