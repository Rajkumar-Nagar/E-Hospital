import { IFormData } from "@/app/apply/page";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const req = await request.json() as IFormData;
  const { additionalQualifications, experience, jobTitle, position, qualifications, status, userId } = req;
  const { tenth, twelfth, college } = qualifications;
  try {
    await prisma.users.upsert({
      where: { id: 1 }, update: {},
      create: { name: 'asdf', email: '', id: 1, phone_number: '1234567890', address: '123', gender: 'Male', dob: new Date('2024-10-23T00:00:00.000Z'), image: null, created_at: new Date('2024-10-23T19:47:27.216Z'), password: "$2b$10$hibRIIWeiTxMnbKctRSHfu9lqKBeXn4b3D.zphamuOS6S.HYcIW6O", },
    })

    // Insert doctor information into the Doctors table
    const doctor: any = await prisma.$queryRaw`
        INSERT INTO Doctors (user_id, job_title, position, status)
        VALUES (1, ${jobTitle}, ${position}, ${status})
        RETURNING id;
      `;
    const doctorId = doctor[0]?.id;

    if (!doctorId) throw new Error("Doctor ID not returned");
    const doc = {
      name: 'dfsdsf',
      url: "asd",
      size: 20
    }
    // Insert 10th qualification
    const qualification_10 = prisma.$queryRaw`
        INSERT INTO Qualification (doctor_id, degree, college, passing_year, percentage, documents, created_at)
        VALUES (${doctorId}, '10th', ${tenth.board}, ${tenth.passing_year}, ${tenth.percentage}, ${doc}, CURRENT_TIMESTAMP);
      `;

    // Insert 12th qualification
    const qualification_12 = prisma.$queryRaw`
        INSERT INTO Qualification (doctor_id, degree, college, passing_year, percentage, documents, created_at)
        VALUES (${doctorId}, '12th', ${twelfth.board}, ${twelfth.passing_year}, ${twelfth.percentage}, ${doc}, CURRENT_TIMESTAMP);
      `;

    // Insert college qualification
    const qualification3 = prisma.$queryRaw`
        INSERT INTO Qualification (doctor_id, degree, college, passing_year, percentage, documents, created_at)
        VALUES (${doctorId}, ${college.degree}, ${college.board}, ${college.passing_year}, ${college.percentage}, ${doc}, CURRENT_TIMESTAMP);
      `;

    // Insert additional qualifications
    const additionalQualification = additionalQualifications.map((additional) => {
      return prisma.$queryRaw`
          INSERT INTO Qualification (doctor_id, degree, college, passing_year, percentage, documents, created_at)
          VALUES (${doctorId}, ${additional.degree}, ${additional.board}, ${additional.passing_year}, ${additional.percentage}, ${doc}, CURRENT_TIMESTAMP);
        `;
    });

    // Insert experience
    const experiences = experience.map((exp) => {
      return prisma.$queryRaw`
          INSERT INTO Experience (doctor_id, job_title, start_date, end_date, hospital, offer_letter, experience_letter, other, created_at)
          VALUES (${doctorId}, ${exp.jobTitle}, ${exp.startDate}, ${exp.endDate}, ${exp.hospital}, ${exp.offerLetter}, ${exp.experienceLetter}, ${exp.other}, CURRENT_TIMESTAMP);
        `;
    });
    console.time('transaction')
    await prisma.$transaction([
      qualification_10,
      qualification_12,
      qualification3,
      ...additionalQualification,
      ...experiences,
    ]);
    console.timeEnd('transaction')
    // console.log(await prisma.doctors.findFirst({
    //   where: {
    //     id: doctorId
    //   },
    //   include: {
    //     users: true,
    //     qualification: true,
    //     experience: true,
    //   }
    // }))
    return NextResponse.json({ message: "Doctor application submitted successfully" });
  } catch (error) {
    console.error("Error saving doctor application:", error);
    return NextResponse.json({ error: "Error saving doctor application" }, { status: 500 });
  }
};
