import { FileText, Target, Award, CheckCircle, BookOpen, Building } from "lucide-react"

export function AimCourseSection() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Aim of the course</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              The aim of the course is to be specified indicating the STCW certificate for which the program is
              designed, including compliance with STCW and reference to the relevant Maritime training package units of
              competency. In all circumstances the STCW Code model courses take precedence in the event of any
              interpretation of course outcomes and content.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Course Aim & Objectives</h3>

        {/* Horizontal Tiles */}
        <div className="space-y-6">
          {/* Main Aim Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Primary Course Aim</h4>
                <p className="text-gray-700 leading-relaxed">
                  The aim of the course is to issue <strong>AMSA Certificate of Safety Training (CoST)</strong> as
                  required by STCW. The STCW Certificate of Safety Training course is the mandatory minimum requirement
                  in order to serve on board Australian Registered Vessels and all vessels operating in international
                  waters.
                </p>
              </div>
            </div>
          </div>

          {/* Training Modules Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Training Modules</h4>
                <p className="text-gray-700 mb-4">
                  The STCW Certificate of Safety Training course consists of the following training modules:
                </p>

                {/* Sub-tiles for modules */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">Elementary First Aid</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">Fire Prevention and Fire Fighting</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">Personal Survival Techniques</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">Personal Safety and Social Responsibilities</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 md:col-span-2 lg:col-span-1">
                    <div className="font-medium text-sm text-gray-900">Security Awareness Training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Requirements Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Assessment Requirements</h4>
                <p className="text-gray-700 leading-relaxed">
                  100% completion of theory assessments, full participation and completion of all practical exercises is
                  required in order to successfully complete the course and qualify for the issue of the course
                  certificates.
                </p>
              </div>
            </div>
          </div>

          {/* Units of Competency Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <Award className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Units of Competency</h4>
                <p className="text-gray-700 mb-4">
                  Any student who successfully completes this course will also receive a Statement of Attainment for the
                  following nationally recognised units of competency:
                </p>

                {/* Sub-tiles for units */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">HLTAID011</div>
                    <div className="text-xs text-gray-600 mt-1">Provide First Aid</div>
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
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 md:col-span-2">
                    <div className="font-medium text-sm text-gray-900">MARF046</div>
                    <div className="text-xs text-gray-600 mt-1">Survive at sea in the event of vessel abandonment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RTO Information Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Building className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Certification Authority</h4>
                <p className="text-gray-700 leading-relaxed">
                  These units are issued by <strong>Club Sail PTY LTD (RTO ID 91462)</strong> and meet the STCW Code
                  requirements under the International Maritime Organization (IMO) Model Courses for Basic Safety
                  Training (STCW 95+10).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
