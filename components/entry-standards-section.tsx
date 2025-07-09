import { FileText, User, Heart, MessageSquare, ClipboardCheck, Shield, ImageIcon, CreditCard } from "lucide-react"

export function EntryStandardsSection() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Entry standards</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              The Registered training organisation is to specify the entry standards that the candidate must comply with
              before being accepted into the training program. The methodology of recognition of prior learning must be
              specified.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Entry Requirements & Standards</h3>

        {/* Full Answer Paragraph */}
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            This is the entry-level course for maritime crew, and anyone with a reasonable command of the English
            language who is over 16 years old and in good health is eligible to enrol. Please note that participants
            with colour vision deficiency (colour blindness) are eligible to complete the AMSA CoST. However, if they
            intend to pursue a maritime career in navigational roles (e.g. deck crew or officers), they may be subject
            to restrictions based on their colour vision as assessed during an ENG1, AMSA 303, or equivalent medical
            examination. Candidates must be in good physical condition and capable of moderate exertion during swimming,
            firefighting, and simulation exercises.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            As part of the enrolment process, students are required to complete a liability waiver, LLN (Language,
            Literacy & Numeracy) assessment, image release consent, and provide a copy of valid photo identification.
            Any students under the age of 18 must have a parent of guardian counter sign the enrolment forms.
          </p>
        </div>

        {/* Entry Standards Flow */}
        <h4 className="font-medium text-gray-900 mb-6">Entry Standards Checklist</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Age Requirement */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">Must be over 16 years of age</h5>
                <p className="text-xs text-gray-600">Minimum age requirement for course participation</p>
              </div>
            </div>
          </div>

          {/* Health Requirement */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Heart className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">In good health</h5>
                <p className="text-xs text-gray-600">
                  Capable of moderate physical exertion during practical exercises
                </p>
              </div>
            </div>
          </div>

          {/* English Language */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">Reasonable command of the English language</h5>
                <p className="text-xs text-gray-600">Ability to understand safety instructions and procedures</p>
              </div>
            </div>
          </div>

          {/* LLN Assessment */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <ClipboardCheck className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">Pass a Language, Literacy and Numeracy test</h5>
                <p className="text-xs text-gray-600">LLN assessment completed during enrolment process</p>
              </div>
            </div>
          </div>

          {/* Liability Waiver */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">Complete liability waiver</h5>
                <p className="text-xs text-gray-600">Acknowledgment of risks associated with practical training</p>
              </div>
            </div>
          </div>

          {/* Image Release */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start space-x-3">
              <ImageIcon className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">Sign image release form</h5>
                <p className="text-xs text-gray-600">Consent for use of images for training and promotional purposes</p>
              </div>
            </div>
          </div>

          {/* Valid ID */}
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors md:col-span-2 lg:col-span-1">
            <div className="flex items-start space-x-3">
              <CreditCard className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-900 mb-1">Provide valid forms of identification</h5>
                <p className="text-xs text-gray-600">Copy of valid photo identification required for enrolment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-4">Additional Requirements</h4>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h5 className="font-medium text-yellow-900 mb-2">Under 18 Years of Age</h5>
              <p className="text-sm text-yellow-800">
                Students under 18 must have a parent or guardian counter-sign all enrolment forms.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h5 className="font-medium text-blue-900 mb-2">Colour Vision Deficiency</h5>
              <p className="text-sm text-blue-800">
                Participants with colour blindness are eligible to complete the AMSA CoST. However, those pursuing
                navigational roles may face restrictions based on medical examination results (ENG1, AMSA 303, or
                equivalent).
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Recognition of Prior Learning (RPL)</h5>
              <p className="text-sm text-gray-700">
                We do not give RPL for STCW courses. Credit Transfer / Mutual Recognition Club Sail Pty Ltd t/a
                Superyacht Crew Academy will recognise Qualifications and/or Statements of Attainment issued by all
                other Registered Training Organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
