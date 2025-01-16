import { gql } from "apollo-server";

const typeDefs = gql`
  type Doctor {
    id: ID!
    name: String!
    clinicName: String!
    specialty: String!
    availableSlots: [String]!
  }

  type Appointment {
    id: ID!
    doctor: Doctor!
    patient: Patient!
    timeSlot: String!
  }

  type Patient {
    id: ID!
    name: String!
    contact: String
  }

  type AppointmentResponse {
    message: String!
    appointment: Appointment
  }

  type Query {
    doctorDetails(doctorId: ID!): Doctor
    availableSlots(doctorId: ID!): [String]
  }

  type Mutation {
    bookAppointment(doctorId: ID!, patientId: String!, timeSlot: String!): AppointmentResponse
    cancelAppointment(appointmentId: ID!): AppointmentResponse
    updatePatientName(appointmentId: ID!, newPatientName: String!): AppointmentResponse
  }
`;

export default typeDefs;
