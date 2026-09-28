-- ====================================================================
-- StudyVerse Supabase Database Schema Migration 001
-- Tables: semesters, categories, subjects, syllabus_units, materials, pyqs
-- Full Relational Integrity, Foreign Keys, Indexes, and Public RLS
-- ====================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Semesters Table
create table if not exists public.semesters (
  id integer primary key,
  number integer not null unique check (number between 1 and 8),
  roman text not null,
  title text not null,
  subtitle text not null,
  tagline text,
  color text not null,
  glow text not null,
  orbit_radius numeric(4,2) not null,
  orbit_speed numeric(4,2) not null,
  planet_size numeric(4,2) not null,
  description text not null,
  subject_count integer not null default 6,
  credits integer not null,
  highlights text[] default '{}',
  created_at timestamptz default now()
);

-- 2. Categories Table
create table if not exists public.categories (
  id text primary key,
  name text not null,
  code text not null,
  description text,
  color text not null,
  created_at timestamptz default now()
);

-- 3. Subjects Table
create table if not exists public.subjects (
  id text primary key,
  code text not null unique,
  name text not null,
  short_name text not null,
  semester_id integer not null references public.semesters(id) on delete restrict,
  category_id text not null references public.categories(id) on delete restrict,
  credits integer not null check (credits > 0),
  description text not null,
  important_topics text[] default '{}',
  related_subject_ids text[] default '{}',
  created_at timestamptz default now()
);

-- 4. Syllabus Units Table
create table if not exists public.syllabus_units (
  id text primary key,
  subject_id text not null references public.subjects(id) on delete cascade,
  unit_number integer not null check (unit_number > 0),
  title text not null,
  hours integer not null default 8,
  weightage integer not null default 20,
  topics text[] default '{}',
  created_at timestamptz default now()
);

-- 5. Academic Materials Table (Notes, Slides, PDFs)
create table if not exists public.materials (
  id text primary key,
  subject_id text not null references public.subjects(id) on delete cascade,
  semester_id integer not null references public.semesters(id) on delete cascade,
  title text not null,
  type text not null check (type in ('pdf', 'ppt', 'notes')),
  author text not null,
  size text not null,
  pages text not null,
  downloads integer default 0,
  rating numeric(3,1) default 4.8,
  uploaded_date date default current_date,
  file_url text not null,
  description text,
  tags text[] default '{}',
  created_at timestamptz default now()
);

-- 6. GTU Previous Year Question Papers (PYQs) Table
create table if not exists public.pyqs (
  id text primary key,
  subject_id text not null references public.subjects(id) on delete cascade,
  semester_id integer not null references public.semesters(id) on delete cascade,
  year integer not null check (year >= 2015),
  season text not null check (season in ('Summer', 'Winter')),
  title text not null,
  paper_code text not null,
  max_marks integer not null default 70,
  duration text not null default '2.5 Hours',
  downloads integer default 0,
  has_solution boolean default true,
  file_url text not null,
  difficulty text default 'Moderate',
  description text,
  created_at timestamptz default now()
);

-- ====================================================================
-- Performance Indexes
-- ====================================================================
create index if not exists idx_subjects_semester on public.subjects (semester_id);
create index if not exists idx_subjects_category on public.subjects (category_id);
create index if not exists idx_syllabus_subject on public.syllabus_units (subject_id);
create index if not exists idx_materials_subject on public.materials (subject_id);
create index if not exists idx_materials_semester on public.materials (semester_id);
create index if not exists idx_materials_type on public.materials (type);
create index if not exists idx_pyqs_subject on public.pyqs (subject_id);
create index if not exists idx_pyqs_semester on public.pyqs (semester_id);
create index if not exists idx_pyqs_year_season on public.pyqs (year, season);

-- ====================================================================
-- Row Level Security (RLS) Policies
-- Public Read Access for All Students
-- ====================================================================
alter table public.semesters enable row level security;
alter table public.categories enable row level security;
alter table public.subjects enable row level security;
alter table public.syllabus_units enable row level security;
alter table public.materials enable row level security;
alter table public.pyqs enable row level security;

create policy "Public read access for semesters" on public.semesters for select using (true);
create policy "Public read access for categories" on public.categories for select using (true);
create policy "Public read access for subjects" on public.subjects for select using (true);
create policy "Public read access for syllabus_units" on public.syllabus_units for select using (true);
create policy "Public read access for materials" on public.materials for select using (true);
create policy "Public read access for pyqs" on public.pyqs for select using (true);
