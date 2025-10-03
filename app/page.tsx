"use client"

import { useState } from "react"
import { ApplicationSidebar } from "@/components/application-sidebar"
import LoginScreen from "@/components/login-screen"
import { ContactSection } from "@/components/contact-section"
import { RegisteredTrainingSection } from "@/components/registered-training-section"
import { FullTitleCourseSection } from "@/components/full-title-course-section"
import { AimCourseSection } from "@/components/aim-course-section"
import { ObjectivesCourseSection } from "@/components/objectives-course-section"
import { CourseCurriculumSection } from "@/components/course-curriculum-section"
import { EntryStandardsSection } from "@/components/entry-standards-section"
import { ConductTrainingSection } from "@/components/conduct-training-section"
import { StudentAssessmentProceduresSection } from "@/components/student-assessment-procedures-section"
import { QualityStandardsSection } from "@/components/quality-standards-section"
import { CourseCompletionDocumentationSection, TimeConstraintsSection, ElearningSection1, ElearningSection2, ElearningSection3, ElearningSection4, ElearningSection5, ElearningSection6, ElearningSection7, ElearningSection8, ElearningSection9, ContinuedCompetenceSection } from "@/components/course-completion-documentation-section"

export default function ApplicationPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState("welcome")
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const goBack = () => {
    setActiveSection("welcome")
    setSelectedDocument(null)
  }

  const handleSectionChange = (sectionId: string, documentName?: string, anchorId?: string) => {
    setActiveSection(sectionId)
    setSelectedDocument(documentName || null)
    
    // Scroll to anchor after a short delay to allow the section to render
    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  const renderContent = () => {
    switch (activeSection) {
      case "contact-details":
        return <ContactSection onBack={goBack} />
      case "registered-training-organisation":
        return <RegisteredTrainingSection onBack={goBack} selectedDocument={selectedDocument} />
      case "full-title-course":
        return <FullTitleCourseSection onBack={goBack} />
      case "aim-course":
        return <AimCourseSection onBack={goBack} />
      case "objectives-course":
        return <ObjectivesCourseSection onBack={goBack} />
      case "course-curriculum":
        return <CourseCurriculumSection onBack={goBack} />
      case "entry-standards":
        return <EntryStandardsSection onBack={goBack} />
      case "conduct-training":
        return <ConductTrainingSection onBack={goBack} selectedDocument={selectedDocument} />
      case "student-assessment-procedures":
        return <StudentAssessmentProceduresSection onBack={goBack} selectedDocument={selectedDocument} />
      case "quality-standards":
        return <QualityStandardsSection selectedDocument={selectedDocument} />
      case "course-completion-documentation":
        return <CourseCompletionDocumentationSection selectedDocument={selectedDocument} />
      case "time-constraints":
        return <TimeConstraintsSection />
      case "e-learning-section-1":
        return <ElearningSection1 />
      case "e-learning-section-2":
        return <ElearningSection2 />
      case "e-learning-section-3":
        return <ElearningSection3 />
      case "e-learning-section-4":
        return <ElearningSection4 />
      case "e-learning-section-5":
        return <ElearningSection5 />
      case "e-learning-section-6":
        return <ElearningSection6 />
      case "e-learning-section-7":
        return <ElearningSection7 />
      case "e-learning-section-8":
        return <ElearningSection8 />
      case "e-learning-section-9":
        return <ElearningSection9 />
      case "continued-competence":
        return <ContinuedCompetenceSection />
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
              <p className="text-lg text-gray-800 mb-6">
                Please accept this submission as our formal application to deliver the Certificate of Safety Training (MARSS00033 Safety Training Certification Skill Set), issued by AMSA.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                Club Sail Pty Ltd, trading as Superyacht Crew Academy and Sydney Maritime Institute, is a Registered Training Organisation (RTO) with over 25 years of experience delivering high-quality training to students pursuing careers in the maritime industry. We currently deliver the STCW 95+10 and are now seeking approval to offer the AMSA Certificate of Safety Training (CoST). This addition will enable our students to gain both the Australian units of competency and internationally recognised certification, significantly enhancing their employability in the maritime sector.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                This submission has been structured in accordance with AMSA’s policies and requirements outlined in document MT05, as provided on the AMSA website.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                We have prepared this secure portal as a clear and organised visual representation of Superyacht Crew Academy’s AMSA CoST application. The navigation bar on the left contains 12 sections aligned with AMSA’s application questions. Each question has been thoroughly addressed, with supporting reference documents and images included where relevant.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                For convenience, a complete application folder is also available for download at any time.
              </p>

              {/* AMSA Application Sections Reference Table */}
              <div className="mt-8 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">AMSA Application Sections & Relevant MT Documents</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">AMSA Application Section</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Relevant MT Document</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">1. Contact details</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">2. Registered Training Organisation</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">3. Full title of the course</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">4. Aim of the course</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">5. Objectives of the course</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">6. Course curriculum</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">7. Entry standards</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT03</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">8. Conduct of the training</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02, MT07</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">9. Student assessment procedures</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">10. Quality standards</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">11. Course completion documentation</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">12. Time constraints</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* E-learning Application Relevant MT Document Table */}
              <div className="mt-8 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">E-learning Application Relevant MT Document Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">AMSA Application Section</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Relevant MT Document</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">1. Access to Lecturers</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02, MT07</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">2. Student Support</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">3. Course Intake Limitations</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">4. Course Notes & Reference Documents</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">5. Textbooks</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">6. Facilities & Equipment</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">7. Class Attendance</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05, MT02</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">8. Time Constraints</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">MT05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Full Application Folders
                </button>
              </div>
            </div>
          </div>
        )
    }
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return (
    <div className="flex h-screen bg-gray-50">
        <ApplicationSidebar onSectionChange={handleSectionChange} />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">{renderContent()}</div>
      </main>
    </div>
  )
}
