import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage.jsx';
import SemestersPage from '../pages/SemestersPage.jsx';
import SemesterDetailPage from '../pages/SemesterDetailPage.jsx';
import SubjectDetailPage from '../pages/SubjectDetailPage.jsx';
import MaterialsPage from '../pages/MaterialsPage.jsx';
import SyllabusPage from '../pages/SyllabusPage.jsx';
import PYQsPage from '../pages/PYQsPage.jsx';
import SearchPage from '../pages/SearchPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
      <div className="text-xs font-mono text-space-text-muted animate-pulse">
        Traversing Academic Orbit...
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/semesters" element={<SemestersPage />} />
        <Route path="/semester/:id" element={<SemesterDetailPage />} />
        <Route path="/subject/:id" element={<SubjectDetailPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/materials/pdfs" element={<MaterialsPage />} />
        <Route path="/materials/ppts" element={<MaterialsPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/pyqs" element={<PYQsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
