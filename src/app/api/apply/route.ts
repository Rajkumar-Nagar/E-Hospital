import { IFormData } from "@/app/apply/page";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const req = await request.json() as IFormData;
    const { additionalQualifications, experience, jobTitle, position, qualifications, status, userId } = req;
    const { tenth, twelfth, college } = qualifications;
    try {
        // Insert doctor information into the Doctors table
        const doctor = await prisma.$queryRaw`
        INSERT INTO Doctors (userId, jobTitle, position, status)
        VALUES (${+userId}, ${jobTitle}, ${position}, ${status})
        RETURNING id;
      `;
        const doctorId = doctor[0]?.id;

        if (!doctorId) throw new Error("Doctor ID not returned");
        const doc = {
            name:'dfsdsf',
            url:"asd",
            size:20
        }
        // Insert 10th qualification
        await prisma.$queryRaw`
        INSERT INTO Qualification (doctorId, degree, college, passing_year, percentage, documents, created_at)
        VALUES (${doctorId}, '10th', ${tenth.board}, ${tenth.passing_year}, ${tenth.percentage}, ${doc}, CURRENT_TIMESTAMP);
      `;

        // Insert 12th qualification
        await prisma.$queryRaw`
        INSERT INTO Qualification (doctorId, degree, college, passing_year, percentage, documents, created_at)
        VALUES (${doctorId}, '12th', ${twelfth.board}, ${twelfth.passing_year}, ${twelfth.percentage}, ${doc}, CURRENT_TIMESTAMP);
      `;

        // Insert college qualification
        await prisma.$queryRaw`
        INSERT INTO Qualification (doctorId, degree, college, passing_year, percentage, documents, created_at)
        VALUES (${doctorId}, ${college.degree}, ${college.board}, ${college.passing_year}, ${college.percentage}, ${doc}, CURRENT_TIMESTAMP);
      `;

        // Insert additional qualifications
        for (const additional of additionalQualifications) {
            await prisma.$queryRaw`
          INSERT INTO Qualification (doctorId, degree, college, passing_year, percentage, documents, created_at)
          VALUES (${doctorId}, ${additional.degree}, ${additional.board}, ${additional.passing_year}, ${additional.percentage}, ${doc}, CURRENT_TIMESTAMP);
        `;
        }

        // Insert experiences
        for (const exp of experience) {
            await prisma.$queryRaw`
          INSERT INTO Experience (doctorId, jobTitle, startDate, endDate, hospital, offerLetter, experienceLetter, other, created_at)
          VALUES (${doctorId}, ${exp.jobTitle}, ${exp.startDate}, ${exp.endDate}, ${exp.hospital}, ${exp.offerLetter}, ${exp.experienceLetter}, ${exp.other}, CURRENT_TIMESTAMP);
        `;
        }

        return NextResponse.json({ message: "Doctor application submitted successfully" });
    } catch (error) {
        console.error("Error saving doctor application:", error);
        return NextResponse.json({ error: "Error saving doctor application" }, { status: 500 });
    }
};
