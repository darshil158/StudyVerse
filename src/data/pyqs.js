import { SUBJECTS } from './subjects.js';

export const PYQS = SUBJECTS.flatMap((subject) => {
  return [
    {
      id: `pyq-${subject.code}-2024-s`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      year: 2024,
      season: 'Summer',
      title: `${subject.name} - Summer 2024 Exam Paper`,
      paperCode: `${subject.code}-S24`,
      maxMarks: 70,
      duration: '2.5 Hours',
      downloads: Math.floor(950 + Math.random() * 2100),
      hasSolution: true,
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      difficulty: 'Moderate',
      description: `Official GTU Summer 2024 end-semester university examination paper with complete marking scheme and step-by-step solutions.`
    },
    {
      id: `pyq-${subject.code}-2023-w`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      year: 2023,
      season: 'Winter',
      title: `${subject.name} - Winter 2023 Exam Paper`,
      paperCode: `${subject.code}-W23`,
      maxMarks: 70,
      duration: '2.5 Hours',
      downloads: Math.floor(1100 + Math.random() * 1900),
      hasSolution: true,
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      difficulty: 'Moderate',
      description: `Official GTU Winter 2023 regular examination paper including question-wise weightage and model answer guide.`
    },
    {
      id: `pyq-${subject.code}-2023-s`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      year: 2023,
      season: 'Summer',
      title: `${subject.name} - Summer 2023 Exam Paper`,
      paperCode: `${subject.code}-S23`,
      maxMarks: 70,
      duration: '2.5 Hours',
      downloads: Math.floor(820 + Math.random() * 1600),
      hasSolution: false,
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      difficulty: 'Challenging',
      description: `GTU Summer 2023 question paper emphasizing algorithm proofs, circuit derivations, and analytical problems.`
    },
    {
      id: `pyq-${subject.code}-2022-w`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      year: 2022,
      season: 'Winter',
      title: `${subject.name} - Winter 2022 Exam Paper`,
      paperCode: `${subject.code}-W22`,
      maxMarks: 70,
      duration: '2.5 Hours',
      downloads: Math.floor(750 + Math.random() * 1400),
      hasSolution: true,
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      difficulty: 'Easy-Moderate',
      description: `Official GTU Winter 2022 end-semester examination paper with annotated answers and recurrent question highlights.`
    }
  ];
});
