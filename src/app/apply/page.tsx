"use client";
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod Schema Definition
const qualificationSchema = z.object({
    degree: z.string().optional(), // Optional for 10th and 12th, required for college and others
    board: z.string().min(1, 'Board/University name is required'),
    passing_year: z.number().min(1900).max(new Date().getFullYear(), 'Invalid year'),
    percentage: z.number().min(0).max(100, 'Percentage must be between 0 and 100'),
    document: z.string().optional(),
});
export type IQualificationSchema = z.infer<typeof qualificationSchema>

const schema = z.object({
    userId: z.string(),
    jobTitle: z.string().min(1, 'Job title is required'),
    position: z.string().min(1, 'Position is required'),
    status: z.enum(['Pending', 'Accepted', 'Rejected']),
    qualifications: z.record(qualificationSchema),
    additionalQualifications: z.array(qualificationSchema), // For additional qualifications
    experience: z.array(
        z.object({
            jobTitle: z.string().min(1, 'Job title is required'),
            startDate: z.string(),
            endDate: z.string(),
            hospital: z.string().min(1, 'Hospital name is required'),
            //   offerLetter: z.string().url().optional(),
            //   experienceLetter: z.string().url().optional(),
            //   other: z.string().optional(),
        })
    ),
});

export type IFormData = z.infer<typeof schema>;
export default function DoctorApplicationPage() {
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm<IFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            userId: '2',
            jobTitle: 'df',
            position: 'sdf',
            status: 'Pending',
            qualifications: {
                tenth: { degree: '10', board: 'dg', passing_year: new Date().getFullYear(), percentage: 70, document: '' },
                twelfth: { degree: '12', board: 'dfg', passing_year: new Date().getFullYear(), percentage: 70, document: '' },
                college: { degree: 'B.Sc', board: 'dfg', passing_year: new Date().getFullYear(), percentage: 80, document: '' },
            },
            additionalQualifications: [],
            experience: [],
        },
    });

    const { fields: experienceFields, append: addExperience, remove: removeExperience } = useFieldArray({
        control,
        name: 'experience',
    });

    const { fields: additionalQualificationFields, append: addQualification, remove: removeQualification } = useFieldArray({
        control,
        name: 'additionalQualifications',
    });

    const onSubmit = async (data: IFormData) => {
        console.log(JSON.stringify(data, null, 2))
        
        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Application submitted successfully!');
            } else {
                console.log('Failed to submit the application.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, path: string) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setValue(path, fileURL);
        }
    };
    console.log(errors)
    const qualificationFields = [
        { label: '10th', name: 'tenth' },
        { label: '12th', name: 'twelfth' },
        { label: 'College', name: 'college' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Apply for a Doctor Position</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6">
                {/* Job Title */}
                <div>
                    <label className="block text-lg font-semibold mb-2">Job Title</label>
                    <input
                        {...register('jobTitle')}
                        placeholder="Enter job title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>}
                </div>

                {/* Position */}
                <div>
                    <label className="block text-lg font-semibold mb-2">Position</label>
                    <input
                        {...register('position')}
                        placeholder="Enter position"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
                </div>

                {/* Qualifications */}
                {qualificationFields.map(({ label, name }) => (
                    <div key={name} className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{label} Qualification</h2>
                        <input
                            {...register(`qualifications.${name}.board`)}
                            placeholder={`${label} Board/University`}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            {...register(`qualifications.${name}.degree`)}
                            placeholder="Degree (optional for 10th/12th)"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            {...register(`qualifications.${name}.passing_year`, { valueAsNumber: true })}
                            type="number"
                            placeholder="Passing Year"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            {...register(`qualifications.${name}.percentage`, { valueAsNumber: true })}
                            type="number"
                            placeholder="Percentage"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            type="file"
                            accept=".pdf,.jpg,.png"
                            onChange={(e) => handleFileUpload(e, `qualifications.${name}.document`)}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                ))}

                {/* Additional Qualifications */}
                {additionalQualificationFields.map((field, index) => (
                    <div key={field.id} className="mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Additional Qualification #{index + 1}</h2>
                        <input
                            {...register(`additionalQualifications.${index}.board`)}
                            placeholder="Board/University"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            {...register(`additionalQualifications.${index}.degree`)}
                            placeholder="Degree"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            {...register(`additionalQualifications.${index}.passing_year`, { valueAsNumber: true })}
                            type="number"
                            placeholder="Passing Year"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            {...register(`additionalQualifications.${index}.percentage`, { valueAsNumber: true })}
                            type="number"
                            placeholder="Percentage"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                        />
                        <input
                            type="file"
                            accept=".pdf,.jpg,.png"
                            onChange={(e) => handleFileUpload(e, `additionalQualifications.${index}.document`)}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <button
                            type="button"
                            onClick={() => removeQualification(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-2"
                        >
                            Remove Qualification
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() => addQualification({ degree: '', board: '', passing_year: new Date().getFullYear(), percentage: 0, document: '' })}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition mt-4"
                >
                    Add More Qualification
                </button>

                {/* Experience Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Experience</h2>
                    {experienceFields.map((field, index) => (
                        <div key={field.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
                            <input
                                {...register(`experience.${index}.jobTitle`)}
                                placeholder="Job Title"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                            />
                            <input
                                {...register(`experience.${index}.startDate`)}
                                type="date"
                                placeholder="Start Date"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                            />
                            <input
                                {...register(`experience.${index}.endDate`)}
                                type="date"
                                placeholder="End Date"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                            />
                            <input
                                {...register(`experience.${index}.hospital`)}
                                placeholder="Hospital"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                            />
                            <button
                                type="button"
                                onClick={() => removeExperience(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                            >
                                Remove Experience
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addExperience({ jobTitle: '', startDate: '', endDate: '', hospital: '', offerLetter: '', experienceLetter: '', other: '' })}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Add Experience
                    </button>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
}
