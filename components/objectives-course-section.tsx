import { FileText, Target, Users, Award, CheckSquare, BookOpen } from "lucide-react"

export function ObjectivesCourseSection() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Objectives of the course</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              The Registered training organisation is to specify the intended objectives of the training.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Training Objectives</h3>

        {/* Horizontal Tiles */}
        <div className="space-y-6">
          {/* Primary Objective Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Primary Training Objective</h4>
                <p className="text-gray-700 leading-relaxed">
                  The objective of this course is to provide seafarers with the knowledge and practical skills required
                  to meet the mandatory minimum standards of competence in safety training as specified in{" "}
                  <strong>Section A-VI/1 and A-VI/6 of the STCW Code</strong>, as amended.
                </p>
              </div>
            </div>
          </div>

          {/* Training Capabilities Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Training Capabilities</h4>
                <p className="text-gray-700 leading-relaxed">
                  The training enables participants to respond effectively to emergencies, apply basic first aid,
                  survive at sea in the event of vessel abandonment, prevent and respond to onboard fires, follow vessel
                  security procedures, and understand personal safety and social responsibilities while working at sea.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Outcomes Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <CheckSquare className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h4>
                <p className="text-gray-700 mb-4">
                  On successful completion of the course, participants will be able to:
                </p>

                {/* Sub-tiles for learning outcomes */}
                <div className="space-y-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-1">Personal Survival Techniques</div>
                    <div className="text-xs text-gray-600">
                      Take appropriate measures for their own survival and the survival of others during and after ship
                      abandonment.
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-1">Fire Prevention and Fire Fighting</div>
                    <div className="text-xs text-gray-600">
                      Minimise the risk of fire and respond effectively to fire emergencies.
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-1">Elementary First Aid</div>
                    <div className="text-xs text-gray-600">
                      Provide immediate life-saving first aid in the event of an accident or illness on board.
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      Personal Safety and Social Responsibilities (PSSR)
                    </div>
                    <div className="text-xs text-gray-600">
                      Work safely, communicate effectively, and understand roles and responsibilities in a multicultural
                      and high-risk maritime environment.
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="font-medium text-sm text-gray-900 mb-1">Security Awareness Training</div>
                    <div className="text-xs text-gray-600">
                      Contribute to maritime security through awareness of threats and procedures.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Outcome Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Certification Outcome</h4>
                <p className="text-gray-700 leading-relaxed">
                  The course supports the issuance of an MARSS00033 Safety Training Certification Skill Set statement of
                  attainment (AMSA Certificate of Safety Training) and meets the requirements of the following
                  nationally recognised units of competency.
                </p>
              </div>
            </div>
          </div>

          {/* Units of Competency Tile */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3 mb-4">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-4">Units of Competency</h4>

                {/* Sub-tiles for units */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">HLTAID011</div>
                    <div className="text-xs text-gray-600 mt-1">Provide first aid</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">MARF035</div>
                    <div className="text-xs text-gray-600 mt-1">Contribute to fire prevention and firefighting</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">MARF037</div>
                    <div className="text-xs text-gray-600 mt-1">Follow vessel security procedures</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                    <div className="font-medium text-sm text-gray-900">MARF041</div>
                    <div className="text-xs text-gray-600 mt-1">Observe personal safety and social responsibility</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 md:col-span-2">
                    <div className="font-medium text-sm text-gray-900">MARF046</div>
                    <div className="text-xs text-gray-600 mt-1">Survive at sea in the event of vessel abandonment</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic">
                  These units align with the relevant IMO Model Courses and comply with STCW Convention requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
