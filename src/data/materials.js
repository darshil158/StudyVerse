import { SUBJECTS } from './subjects.js';

export const MATERIALS = SUBJECTS.flatMap((subject) => {
  return [
    {
      id: `mat-${subject.code}-pdf-1`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      title: `${subject.name} Complete Handwritten Master Notes`,
      type: 'pdf',
      author: 'GTU Toppers Circle & Prof. Dave',
      size: '5.8 MB',
      pages: '84 pages',
      downloads: Math.floor(1200 + Math.random() * 2500),
      rating: +(4.6 + Math.random() * 0.4).toFixed(1),
      uploadedDate: '2024-02-15',
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      description: `Comprehensive chapter-wise lecture notes covering all units of ${subject.name} with solved GTU numericals and clean diagrams.`,
      tags: ['Comprehensive', 'Exam Oriented', 'Solved Examples']
    },
    {
      id: `mat-${subject.code}-ppt-1`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      title: `${subject.shortName} Visual Lecture Slide Deck`,
      type: 'ppt',
      author: 'GTU Faculty Resource Portal',
      size: '12.4 MB',
      pages: '62 slides',
      downloads: Math.floor(800 + Math.random() * 1400),
      rating: +(4.5 + Math.random() * 0.4).toFixed(1),
      uploadedDate: '2024-01-20',
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      description: `High-resolution classroom presentation deck illustrating architectural diagrams, algorithms, and key paradigms of ${subject.name}.`,
      tags: ['Classroom Slides', 'Visual Diagrams', 'Quick Review']
    },
    {
      id: `mat-${subject.code}-notes-1`,
      subjectId: subject.id,
      semesterId: subject.semesterId,
      title: `${subject.shortName} Quick Formula Sheet & Revision Summary`,
      type: 'notes',
      author: 'Dept. of Computer Engineering',
      size: '2.1 MB',
      pages: '24 pages',
      downloads: Math.floor(1800 + Math.random() * 3200),
      rating: +(4.8 + Math.random() * 0.2).toFixed(1),
      uploadedDate: '2024-03-10',
      fileUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf',
      description: `Rapid one-night revision sheet with essential mathematical formulas, algorithm summaries, and theorem definitions for ${subject.shortName}.`,
      tags: ['Quick Revision', 'Formula Sheet', 'Last-Minute Prep']
    }
  ];
});
