import { FileText, Award, BookOpen, Anchor } from "lucide-react"

interface FullTitleCourseSectionProps {
  onBack: () => void
}

export function FullTitleCourseSection({ onBack }: FullTitleCourseSectionProps) {
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
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Full title of the course</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              The submission should align itself with the Marine training package, STCW Code and IMO Model courses.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Course Alignment</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          This course is fully aligned with the MARSS00033 Safety Training Certification Skill Set under the Australian
          Maritime Training Package and corresponds directly to the competencies and learning outcomes prescribed in the
          STCW Code (Table A-VI/1 & A-VI/6) and relevant IMO Model Courses listed below.
        </p>

        {/* Horizontal Tiles */}
        <div className="space-y-6">
          {/* MARSS00033 Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <Award className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">MARSS00033 Safety Training Certification Skill Set</h4>
                <p className="text-sm text-gray-600 mb-4">Certificate of safety training (STCW)</p>

                {/* Sub-tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">HLTAID011</div>
                    <div className="text-xs text-gray-600 mt-1">Provide first aid</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">MARF035</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Contribute to fire prevention and firefighting (basic firefighting)
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">MARF037</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Follow vessel security procedures (security awareness training)
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">MARF041</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Observe personal safety and social responsibility (PSSR)
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 md:col-span-2 lg:col-span-1">
                    <div className="font-medium text-sm text-gray-900">MARF046</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Survive at sea in the event of vessel abandonment and personal survival techniques (PST)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STCW95+10 Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">STCW95+10 Basic Safety Training Modules</h4>
                <p className="text-sm text-gray-600 mb-4">International maritime safety standards</p>

                {/* Sub-tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">STCW Personal Survival Techniques</div>
                    <div className="text-xs text-gray-600 mt-1">(Table A – VI/1-1)</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">STCW Basic Fire Prevention & Firefighting</div>
                    <div className="text-xs text-gray-600 mt-1">(Table A – VI/1-2)</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">STCW Elementary First Aid</div>
                    <div className="text-xs text-gray-600 mt-1">(Table A – VI/1-3)</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">
                      STCW Personal Safety and Social Responsibilities
                    </div>
                    <div className="text-xs text-gray-600 mt-1">(Table A – VI/1-4)</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 md:col-span-2">
                    <div className="font-medium text-sm text-gray-900">
                      STCW Proficiency in Maritime Security Awareness
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      (Reg V1/6 and Part A of Section A – VI/6 Paragraph 4)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMO Model Courses Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <Anchor className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">IMO Model Courses</h4>
                <p className="text-sm text-gray-600 mb-4">International Maritime Organization standards</p>

                {/* Sub-tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">STCW Personal Survival Techniques</div>
                    <div className="text-xs text-gray-600 mt-1">IMO Model Course 1.19</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">STCW Basic Fire Prevention & Firefighting</div>
                    <div className="text-xs text-gray-600 mt-1">IMO Model Course 1.20</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">STCW Elementary First Aid</div>
                    <div className="text-xs text-gray-600 mt-1">IMO Model Course 1.13</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">
                      STCW Personal Safety and Social Responsibilities
                    </div>
                    <div className="text-xs text-gray-600 mt-1">IMO Model Course 1.21</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 md:col-span-2">
                    <div className="font-medium text-sm text-gray-900">
                      STCW Proficiency in Maritime Security Awareness
                    </div>
                    <div className="text-xs text-gray-600 mt-1">IMO Model Course 3.27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
