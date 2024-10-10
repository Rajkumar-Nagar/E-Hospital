import prisma from "./prisma"

const dropTable = async (table: string) => {
  return prisma.$queryRaw`DROP TABLE IF EXISTS ${table}`
}

export async function setup_database() {
  try {
    const Users = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            phoneNumber VARCHAR(15) UNIQUE NOT NULL,
            address TEXT NOT NULL,
            gender VARCHAR(10) NOT NULL,
            email VARCHAR(255),
            password VARCHAR(255) NOT NULL,
            dob DATE NOT NULL,
            role VARCHAR(50) NOT NULL,
            image TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
          );
        `;
    
    const Doctors = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Doctors (
            id SERIAL PRIMARY KEY,
            userId INT NOT NULL,
            jobTitle VARCHAR(255) NOT NULL,
            qualifications JSONB,
            experience JSONB,
            appointments JSONB,
            attendance JSONB,
            position VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES Users(id)
          );
        `;

    const Qualification = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Qualification (
            id SERIAL PRIMARY KEY,
            doctorId INT NOT NULL,
            degree VARCHAR(255),
            college VARCHAR(255),
            passing_year INT,
            percentage DECIMAL(5, 2),
            documents JSONB,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_doctor FOREIGN KEY (doctorId) REFERENCES Doctors(id)
          );
        `;

    const Experience = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Experience (
            id SERIAL PRIMARY KEY,
            doctorId INT NOT NULL,
            jobTitle VARCHAR(255),
            startDate DATE,
            endDate DATE,
            hospital VARCHAR(255),
            offerLetter TEXT,
            experienceLetter TEXT,
            other TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_doctor FOREIGN KEY (doctorId) REFERENCES Doctors(id)
          );
        `;

    const Appointments = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Appointments (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            address TEXT,
            aadhar_no VARCHAR(12),
            father_name VARCHAR(255),
            mobile_no VARCHAR(15),
            disease VARCHAR(255),
            doctor_name VARCHAR(255),
            age INT,
            appointment_date DATE,
            time_slot VARCHAR(50),
            gender VARCHAR(10),
            appointment_type VARCHAR(50),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
          );
        `;

    const Attendance = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Attendance (
            id SERIAL PRIMARY KEY,
            doctorId INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_doctor FOREIGN KEY (doctorId) REFERENCES Doctors(id)
          );
        `;

    const Medicine = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Medicine (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            expiry DATE,
            manufactured DATE,
            image TEXT,
            disease JSONB,
            description TEXT,
            price DECIMAL(10, 2),
            discount DECIMAL(5, 2),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
          );
        `;

    const StoreHistory = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS StoreHistory (
            id SERIAL PRIMARY KEY,
            medicineId INT NOT NULL,
            userId INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_medicine FOREIGN KEY (medicineId) REFERENCES Medicine(id),
            CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES Users(id)
          );
        `;

    const Feedback = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Feedback (
            id SERIAL PRIMARY KEY,
            userId INT NOT NULL,
            doctorId INT NOT NULL,
            medicineId INT,
            feedback TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES Users(id),
            CONSTRAINT fk_doctor FOREIGN KEY (doctorId) REFERENCES Doctors(id),
            CONSTRAINT fk_medicine FOREIGN KEY (medicineId) REFERENCES Medicine(id)
          );
        `;

    await prisma.$transaction([
      Users,
      Doctors,
      Experience,
      Qualification,
      Medicine,
      Feedback,
      Appointments,
      Attendance,
      StoreHistory,

    ])
    console.log("Tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}
