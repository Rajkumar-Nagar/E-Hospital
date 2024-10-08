'use client';
import DoctorCard from "./doctor_card"

const doctors = [
    {
        id: '1',
        name: 'Dr. A. Sharma',
        degree: 'MBBS, MD',
        age: 45,
        experience: 20,
        location: 'Delhi',
        image: '/doctor1.avif',
        timing: '9 AM - 4 PM',
        available: true,
        bio: 'Dr. A. Sharma is a highly experienced cardiologist with 20 years of medical expertise in treating heart diseases.',
        reviews: [
            { patientName: 'John Doe', review: 'Very professional and caring.' },
            { patientName: 'Jane Smith', review: 'Dr. Sharma provided excellent care during my visit.' },
        ],
    },
    {
        id: '2',
        name: 'Dr. B. Gupta',
        degree: 'MBBS, Neurologist',
        age: 50,
        experience: 25,
        location: 'Mumbai',
        image: '/doctor2.jpg',
        timing: '10 AM - 6 PM',
        available: false,
        bio: 'Dr. B. Gupta is an expert in neurology with over 25 years of experience in treating complex neurological disorders.',
        reviews: [
            { patientName: 'Emily Davis', review: 'Very knowledgeable and empathetic doctor.' },
            { patientName: 'Michael Brown', review: 'Dr. Gupta was very thorough in his diagnosis.' },
        ],
    },
    // Add more doctors here...
];
export default function Doctors() {
    return (
        <section className="py-12 bg-gray-100">
            <h2 className="text-center text-3xl font-bold text-gray-700 mb-10">Our Best Doctors</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor, index) => (
                    <DoctorCard doctor={doctor} key={index} />
                ))}
            </div>
        </section>
    );
}
