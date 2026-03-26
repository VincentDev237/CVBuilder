"use client";
import { Eye, RotateCw } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./components/PersonnalDetailsForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import LanguageForm from "./components/LanguageForm";
import { Experience, PersonalDetails, Education, Language } from "@/type";
import { useState } from "react";
import { educationsPreset, experiencesPreset, languagesPreset, personalDetailsPreset } from "@/presets";
import CVPreview from "./components/CVPreview";

export default function Home() {
  const [personalDetails, setPersonnalDetails] = useState<PersonalDetails>(personalDetailsPreset)
  const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>('cupcake')
  const [zoom, setZoom] = useState<number>(163)
  const [experiences, setExperience] = useState<Experience[]>(experiencesPreset)
  const [educations, setEducations] = useState<Education[]>(educationsPreset)
  const [languages, setLanguages] = useState<Language[]>(languagesPreset)

  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
    'caramellatte',
    'abyss',
    'silk'
  ]

  const handleResetPersonalDetails = () => setPersonnalDetails({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    photoUrl: '',
    postSeeking: '',
    description: ''
  })

  const handleResetExperience = () => setExperience([])
  const handleResetEducations = () => setEducations([])
  const handleResetLanguages = () => setLanguages([])


  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          {/* // Formulaire du CV */}
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                Générateur de
                <span className="text-primary">CV</span>
              </h1>
              <button className="btn btn-primary">
                Prévisualiser
                <Eye className="w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Qui êtes-vous</h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleResetPersonalDetails}>
                  <RotateCw className="w-4" />
                </button>
              </div>
              <PersonalDetailsForm
                personalDetails={personalDetails}
                setPersonnalDetails={setPersonnalDetails}
                setFile={setFile}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Expériences</h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleResetExperience}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <ExperienceForm
                experience={experiences}
                setExperience={setExperience}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Educations</h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleResetEducations}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <EducationForm 
                educations={educations}
                setEducations={setEducations}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Langues</h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleResetLanguages}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <LanguageForm 
                languages={languages}
                setLanguages={setLanguages}
              />

            </div>
          </div>

          {/* Previsualisation du CV */}
          <div className="w-2/3 h-full bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview relative">

            <div className="flex items-center justify-center fixed z-[9999] top-5 right-5">
              <input
                type="range"
                min={50}
                max={200}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-primary"
              />
              <p className="ml-4 text-sm text-primary">{zoom}%</p>
            </div>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered fixed z-[9999] select-sm top-12 right-5 "
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>

            <div
              className="flex justify-center items-center"
              style={{ transform: `scale(${zoom / 200})` }}
            >
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme}
                experiences={experiences}
                educations={educations}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Désolé le Générateur de CV n'est que disponible sur ordinateur</h1>
              <Image
                src="/sorry.gif"
                alt="Computer"
                width={300}
                height={200}
                className="mx-auto my-6"
              />
              <p className="py-6">
                Pour créer votre CV, veuillez utiliser votre ordinateur.
                Nous vous remercions pour votre compréhension
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
