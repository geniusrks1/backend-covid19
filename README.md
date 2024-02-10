# COVID-19 API for Hospital Management

This project provides an API for managing doctors, patients, and patient reports in a hospital allocated by the government for COVID-19 testing, quarantine, and well-being.

## Setup Instructions

1. Clone or download the repository.
2. Navigate to the project directory in your terminal: `covid19`.
3. Start MongoDB by running `mongod`.
4. Start the project by running `npm start`.
5. Use Postman or any other API testing tool to interact with the API.

## Routes

### Register a Doctor
- **[POST]** `/doctors/register`
  - Register a new doctor.

### Login 
- **[POST]** `/login`
  - Authenticate a  for login.

### Register a Patient
- **[POST]** `/patients/register`
  - Register a new patient.

### Create Patient Report
- **[POST]** `/patients/:id/create_report`
  - Create a report for a specific patient.

### Fetch All Reports of a Patient
- **[GET]** `/patients/:id/all_report`
  - Fetch all reports of a specific patient.

### Fetch All Reports Based on a Status
- **[GET]** `/reports/:status`
  - Fetch all reports based on a specified status.


