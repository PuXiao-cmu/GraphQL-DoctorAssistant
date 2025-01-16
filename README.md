# GraphQL Doctor Assistant API (TypeScript Implementation)

## Overview

This repository contains the implementation of a GraphQL API for **Doctor’s Assistant Inc (DAI)**. The API is developed using **TypeScript** and **Apollo GraphQL Server**. It provides functionalities for managing doctor details, booking and canceling appointments, and updating patient information for medical practices.

## Features

- **Get Doctor Details**: Retrieve a doctor's name, clinic name, and specialty.
- **Get Available Timeslots**: Retrieve a list of available timeslots for a doctor on the current day (9:00 AM to 5:00 PM, 30-minute intervals).
- **Book Appointment**: Book an appointment for a specific timeslot.
- **Cancel Appointment**: Cancel a booked appointment.
- **Update Patient Name**: Update the patient name associated with an appointment.

## Technology Stack

- **Language**: TypeScript
- **GraphQL Server**: Apollo Server
- **Testing**: Apollo Studio and custom test scripts

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/17-625-API-Design-F24/a3-graphql-PuXiao-cmu.git
   cd a3-graphql-PuXiao-cmu/ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Access the GraphQL Playground:
   Visit `http://localhost:4000` in your browser to interact with the API.

## Project Structure

```
├── src/
│   ├── index.ts           # Entry point of the application
│   ├── schema.ts          # GraphQL schema definitions
│   ├── resolvers.ts       # Resolver functions for queries and mutations
│   ├── data.ts            # Hardcoded data for doctors and appointments
├── tests/
│   ├── queries.test.ts    # Tests for GraphQL queries
│   ├── mutations.test.ts  # Tests for GraphQL mutations
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## API Documentation

### Queries

- **doctorDetails**
  - **Inputs**: `doctorId: ID!`
  - **Outputs**:
    ```json
    {
      "id": "1",
      "name": "Dr. Smith",
      "clinicName": "HealthFirst Clinic",
      "specialty": "General Physician"
    }
    ```
  - **Description**: Retrieves detailed information about a specific doctor.

- **availableSlots**
  - **Inputs**: `doctorId: ID!`
  - **Outputs**:
    ```json
    ["9:00", "9:30", "10:00"]
    ```
  - **Description**: Returns a list of available time slots for a specific doctor.

### Mutations

- **bookAppointment**
  - **Inputs**:
    ```json
    {
      "doctorId": "1",
      "patientId": "1",
      "timeSlot": "9:00"
    }
    ```
  - **Outputs**:
    ```json
    {
      "message": "Appointment booked successfully!",
      "appointment": {
        "id": "12345",
        "doctor": { "id": "1", "name": "Dr. Smith" },
        "patient": { "id": "1", "name": "Alice" },
        "timeSlot": "9:00"
      }
    }
    ```
  - **Description**: Books a new appointment.

- **cancelAppointment**
  - **Inputs**: `appointmentId: ID!`
  - **Outputs**:
    ```json
    {
      "message": "Appointment cancelled successfully!"
    }
    ```
  - **Description**: Cancels an existing appointment.

- **updatePatientName**
  - **Inputs**:
    ```json
    {
      "appointmentId": "12345",
      "newPatientName": "Charlie"
    }
    ```
  - **Outputs**:
    ```json
    {
      "message": "Patient name updated successfully!",
      "appointment": {
        "id": "12345",
        "doctor": { "id": "1", "name": "Dr. Smith" },
        "patient": { "id": "1", "name": "Charlie" },
        "timeSlot": "9:00"
      }
    }
    ```
  - **Description**: Updates the patient name for an appointment.

## Testing

### Test Cases

| Test Case ID | Description                                  | Inputs                                     | Expected Output                              |
|--------------|----------------------------------------------|-------------------------------------------|---------------------------------------------|
| TC1          | Retrieve doctor details (Happy Path)        | `doctorId: "1"`                          | Doctor details                              |
| TC2          | Retrieve doctor details (Error Case)        | `doctorId: "999"`                        | Error: "Doctor not found."                  |
| TC5          | Book an appointment (Happy Path)            | `doctorId: "1", patientId: "1", timeSlot: "9:00"` | Appointment successfully booked         |

Run tests:
```bash
npm test
```

## Reflection

- **Best Practices Followed**:
  1. **Use Object Types**: Queries return objects instead of IDs to minimize round trips.
  2. **Avoid Overfetching**: Clients fetch only the data they need.

- **Future Compatibility**:
  Schema and resolvers can accommodate new fields while maintaining backward compatibility.

## License

This project is licensed under the [MIT License](LICENSE).

