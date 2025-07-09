"use client"

import { useState } from "react"
import { ApplicationSidebar } from "@/components/application-sidebar"
import { ContactSection } from "@/components/contact-section"
import { RegisteredTrainingSection } from "@/components/registered-training-section"
import { FullTitleCourseSection } from "@/components/full-title-course-section"
import { AimCourseSection } from "@/components/aim-course-section"
import { ObjectivesCourseSection } from "@/components/objectives-course-section"
import { CourseCurriculumSection } from "@/components/course-curriculum-section"
import { EntryStandardsSection } from "@/components/entry-standards-section"
import { ConductTrainingSection } from "@/components/conduct-training-section"

export default function ApplicationPortal() {
  const [activeSection, setActiveSection] = useState("welcome")

  const renderContent = () => {
    switch (activeSection) {
      case "contact-details":
        return <ContactSection />
      case "registered-training-organisation":
        return <RegisteredTrainingSection />
      case "full-title-course":
        return <FullTitleCourseSection />
      case "aim-course":
        return <AimCourseSection />
      case "objectives-course":
        return <ObjectivesCourseSection />
      case "course-curriculum":
        return <CourseCurriculumSection />
      case "entry-standards":
        return <EntryStandardsSection />
      case "conduct-training":
        return <ConductTrainingSection />
      default:
        return (
          <div className="mb-6">
            <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Welcome</h1>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                This is a secure portal and a visual representation of Superyacht Crew Academy's AMSA CoST application.
                The left navigation bar has 12 sections each for the AMSA application questions. Every question has been
                covered and reference documents and images have been included in relevant sections.
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <ApplicationSidebar onSectionChange={setActiveSection} />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">{renderContent()}</div>
      </main>
    </div>
  )
}
