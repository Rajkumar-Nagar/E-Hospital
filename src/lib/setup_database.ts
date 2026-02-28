import prisma from "./prisma"

export async function setup_database() {
  return
  try {
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Feedback`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Qualification`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Experience`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Appointments`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Attendance`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS StoreHistory`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Doctors`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Medicine`;
    // await prisma.$executeRaw`DROP TABLE IF EXISTS Users`;

    // return

    const Users = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            phone_number VARCHAR(15) UNIQUE NOT NULL,
            address TEXT NOT NULL,
            gender VARCHAR(10) NOT NULL,
            email VARCHAR(255),
            password VARCHAR(255) NOT NULL,
            dob DATE NOT NULL,
            role VARCHAR(50) NOT NULL DEFAULT 'user',
            image TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
          );
        `;

    const Doctors = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Doctors (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            job_title VARCHAR(255) NOT NULL,
            position VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(id)
          );
        `;

    const Qualification = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Qualification (
            id SERIAL PRIMARY KEY,
            doctor_id INT NOT NULL,
            degree VARCHAR(255),
            college VARCHAR(255),
            passing_year INT,
            percentage DECIMAL(5, 2),
            documents JSONB,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES Doctors(id) ON DELETE CASCADE
          );
        `;

    const Experience = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Experience (
            id SERIAL PRIMARY KEY,
            doctor_id INT NOT NULL,
            job_title VARCHAR(255),
            start_date DATE,
            end_date DATE,
            hospital VARCHAR(255),
            offer_letter TEXT,
            experience_letter TEXT,
            other TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES Doctors(id) ON DELETE CASCADE
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
            doctor_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES Doctors(id)  ON DELETE CASCADE
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
            medicine_id INT NOT NULL,
            user_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_medicine FOREIGN KEY (medicine_id) REFERENCES Medicine(id),
            CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(id)
          );
        `;

    const Feedback = prisma.$queryRaw`
          CREATE TABLE IF NOT EXISTS Feedback (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            doctor_id INT NOT NULL,
            medicine_id INT,
            feedback TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
            CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES Doctors(id) ON DELETE CASCADE,
            CONSTRAINT fk_medicine FOREIGN KEY (medicine_id) REFERENCES Medicine(id) ON DELETE CASCADE
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
