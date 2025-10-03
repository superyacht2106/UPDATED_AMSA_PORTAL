"use client"

import { useState } from "react"
import { FileText, BookOpen, Clock, Users, CheckSquare, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GoogleSheetViewer } from "@/components/ui/google-sheet-viewer"

const lessonPlanUrls = {
  HLTAID011: {
    single: "/docs/HLTAID011_Provide_First_Aid_Lesson_Plan.pdf",
  },
  MARF035: {
    theory: "https://drive.google.com/file/d/1xD7_nYYnLNBdHRBr-35gmAf8LtCZ_hKf/preview",
    practical: "/docs/MARF035_Firefighting_Practical_Lesson_Plan_V1.pdf",
  },
  MARF037: {
    single: "/docs/MARF037_Lesson_Plan_Online Course-2.pdf",
  },
  MARF041: {
    single: "/docs/MARF041_PSSR_Online&Practical_Lesson_Plan.pdf", // Updated to local PDF
  },
  MARF046: {
    theory: "/docs/MARF046_PST_Theory_Lesson_Plan_V1.pdf",
    practical: "/docs/MARF046_PST_Practical_Lesson_Plan_V1.pdf",
  },
}

interface CourseCurriculumSectionProps {
  onBack: () => void
}

export function CourseCurriculumSection({ onBack }: CourseCurriculumSectionProps) {
  const [selectedLessonPlan, setSelectedLessonPlan] = useState<string | null>(null)

  const handleViewLessonPlan = (unitCode: string, type = "single") => {
    const unitUrls = lessonPlanUrls[unitCode as keyof typeof lessonPlanUrls]
    const url = unitUrls[type as keyof typeof unitUrls]

    if (url) {
      setSelectedLessonPlan(url)
    } else {
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} lesson plan for ${unitCode} will be available soon.`)
    }
  }

  const closeLessonPlan = () => {
    setSelectedLessonPlan(null)
  }

  const openImage = (url: string) => {
    setSelectedLessonPlan(url)
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Course curriculum</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              The course curriculum is to be based on the Maritime training package units of competency and where
              clarification is required, referenced to the appropriate IMO Model Course. Details are to also include a
              Lesson Plan that includes:
            </p>
            <ul className="list-disc list-inside text-green-800 mt-3 space-y-1">
              <li>Weekly hours - time spent on each subject/element</li>
              <li>
                Total course duration (if the proposed teaching hours differ greatly from the nominal hours given in the
                IMO Model Course, the methodology to achieve the objectives is also to be substantiated)
              </li>
              <li>The methodology of learning and teaching techniques employed to meet the learning outcomes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="border border-gray-200 rounded-md p-4 mb-6">
          <p className="text-gray-800">
            We intend to run via blended learning, a mix of online learning and in classroom & practical training. Our online training will be run through our LMS called Axcelerate, students will be given a student portal log in to complete online course components. Our classroom training will be conducted at our office facility.
          </p>
        </div>
        <h3 className="font-medium text-gray-900 mb-6">Curriculum Structure & Lesson Plans</h3>
        <p className="text-gray-700 mb-6">
          Please find below lesson plans for each unit of competency which includes the required information.
        </p>

        {/* Horizontal Tiles */}
        <div className="space-y-6">
          {/* Course Duration Overview Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Total Course Duration</h4>

                {/* Duration breakdown sub-tiles */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-center">
                    <div className="font-medium text-lg text-gray-900">48.5 Hours</div>
                    <div className="text-xs text-gray-600">Total Training Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Units of Competency Breakdown Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-4">Units of Competency & Hours Breakdown</h4>

                {/* Unit breakdown sub-tiles */}
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-sm text-gray-900 mb-1">HLTAID011 – Provide first aid</div>
                        <div className="text-xs text-gray-600">6 hours theory, 2 hours practical</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">8 Hours</div>
                    </div>
                    <Button
                      onClick={() => handleViewLessonPlan("HLTAID011", "single")}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Lesson Plan</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-sm text-gray-900 mb-1">
                          MARF035 – Contribute to fire prevention and firefighting
                        </div>
                        <div className="text-xs text-gray-600">8 hours theory, 8 hours practical</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">16 Hours</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleViewLessonPlan("MARF035", "theory")}
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Theory Lesson Plan</span>
                      </Button>
                      <Button
                        onClick={() => handleViewLessonPlan("MARF035", "practical")}
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Practical Lesson Plan</span>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-sm text-gray-900 mb-1">
                          MARF037 – Follow vessel security procedures
                        </div>
                        <div className="text-xs text-gray-600">Online theory</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">4.5 Hours</div>
                    </div>
                    <Button
                      onClick={() => handleViewLessonPlan("MARF037", "single")}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Lesson Plan</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-sm text-gray-900 mb-1">
                          MARF041 – Observe personal safety and social responsibility
                        </div>
                        <div className="text-xs text-gray-600">6 hours Online, 2 hours classroom practical</div> {/* Updated delivery mode */}
                      </div>
                      <div className="text-sm font-semibold text-gray-700">8 Hours</div>
                    </div>
                    <Button
                      onClick={() => handleViewLessonPlan("MARF041", "single")}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Lesson Plan</span>
                    </Button>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium text-sm text-gray-900 mb-1">
                          MARF046 – Survive at sea in the event of vessel abandonment
                        </div>
                        <div className="text-xs text-gray-600">7.5 hours theory, 4.5 hours practical</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">12 Hours</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleViewLessonPlan("MARF046", "theory")}
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Theory Lesson Plan</span>
                      </Button>
                      <Button
                        onClick={() => handleViewLessonPlan("MARF046", "practical")}
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Practical Lesson Plan</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning & Teaching Methodology Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-4">Learning & Teaching Methodology</h4>

                {/* Methodology sub-tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-2">Face-to-Face Learning</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Interactive presentations and lectures</li>
                      <li>• Hands-on practical training</li>
                      <li>• Emergency scenario simulations</li>
                      <li>• Skills demonstration and practice</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-2">Online Learning</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Self-paced online modules</li>
                      <li>• Interactive multimedia content</li>
                      <li>• Online assessments and quizzes</li>
                      <li>• Digital resource materials</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-2">Assessment Methods</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Written examinations (theory)</li>
                      <li>• Practical skill demonstrations</li>
                      <li>• Online competency assessments</li>
                      <li>• Continuous assessment</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-2">Learning Support</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Individual coaching and feedback</li>
                      <li>• Literacy assistance</li>
                      <li>• Resource materials and handouts</li>
                      <li>• Technical support for online learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maritime Training Package Compliance Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <CheckSquare className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Maritime Training Package Compliance</h4>
                <p className="text-gray-700 leading-relaxed">
                  The curriculum is fully based on the Australian Maritime Training Package units of competency
                  (MARSS00033) and cross-referenced with IMO Model Courses to ensure international compliance and
                  recognition. All learning outcomes, assessment criteria, and performance evidence align with national
                  training standards and STCW Code requirements.
                </p>
              </div>
            </div>
          </div>

          {/* LMS for Online Training Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">LMS we use for online training</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For our online courses and student enrolments we use a LMS called Axcelerate which is a widely used
                  and compliant software to manage student assessments, online courses, course progression and to issue
                  certificates. Students will be given a student portal which will allow them to complete the online
                  training, the portal includes resources and online assessments they can easily access. Please click
                  the button below to view how the portal looks to a student enrolled in a course.
                </p>
                <Button
                  onClick={() => openImage("/images/axcelerate-student-portal.png")}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Student Portal</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="border border-blue-100 rounded-lg p-6 mt-4 bg-white">
            <p className="text-gray-700 leading-relaxed">
              Superyacht Crew Academy delivers this course in alignment with AMSA MT02 – STCW Training and Assessment, Quality Standards and Use of Simulators. While we do not utilise simulators, our training combines online SCORM-compliant learning and practical face-to-face assessment. All training and assessment practices comply with STCW Regulation I/6, and our online components follow the guidance outlined in MT02 for e-learning and blended delivery, ensuring the integrity and quality of training outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Lesson Plan Modal */}
      {selectedLessonPlan && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeLessonPlan} // Close when clicking the background
          tabIndex={-1} // Make div focusable for keyboard events
          onKeyDown={e => {
            if (e.key === "Escape") closeLessonPlan();
          }}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg"
            style={{ height: '80vh' }}
            onClick={e => e.stopPropagation()} // Prevent background click from closing when clicking inside modal
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                onClick={closeLessonPlan}
                variant="outline"
                size="sm"
                className="bg-white hover:bg-gray-100 shadow-lg"
              >
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
            </div>
            {selectedLessonPlan.includes(".png") ||
            selectedLessonPlan.includes(".jpg") ||
            selectedLessonPlan.includes(".jpeg") ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={selectedLessonPlan || "/placeholder.svg"}
                  alt="Student Portal"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ) : (
              <iframe
                src={selectedLessonPlan}
                className="w-full h-full border-0"
                title="Lesson Plan"
                allow="autoplay"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
