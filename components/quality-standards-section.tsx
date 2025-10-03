"use client"

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function QualityStandardsSection({ selectedDocument }: { selectedDocument?: string | null }) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Quality Standards</h1>
      </div>

      {/* AMSA Question - STCW Regulation I/8 Compliance */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - STCW Regulation I/8 Compliance</h3>
            <p className="text-green-800 leading-relaxed">
              The Registered training organisation is to comply with STCW Regulation l/8 and Sections A-I/8 and B-I/8 of the STCW Code.
            </p>
          </div>
        </div>
      </div>

      {/* STCW Regulation I/8 Compliance Answer */}
      <div id="quality-management" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">STCW Regulation I/8 Compliance</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Our organisation has implemented a robust quality management system designed to monitor and improve the standard of maritime training and assessment in line with STCW requirements. This system is integrated within our ISO 9001-certified quality assurance framework, which was most recently audited and confirmed to be compliant. The system is supported by a documented structure, including:
          </p>
          <ul className="text-gray-700 leading-relaxed mt-4 space-y-2">
            <li>• <strong>Continual Improvement:</strong> We maintain a formal process for collecting feedback from students, trainers, and industry stakeholders. Outcomes are reviewed regularly to drive ongoing improvement in training delivery and assessment practices.</li>
            <li>• <strong>Policies and Procedures:</strong> Documented policies and procedures guide all operations and ensure alignment with STCW, AMSA, and national regulatory requirements. These are reviewed periodically for relevance and accuracy.</li>
            <li>• <strong>Forms and Checklists:</strong> Comprehensive checklists and forms are used to standardise processes, support consistency in delivery, and verify compliance during internal and external audits.</li>
            <li>• <strong>Risk Management:</strong> Our system identifies, assesses, and mitigates risks related to training delivery, assessment integrity, and student outcomes.</li>
            <li>• <strong>SOPs – Procedure Manual:</strong> Standard Operating Procedures ensure consistent training and assessment practices and serve as a reference for staff to maintain compliance with STCW standards.</li>
            <li>• <strong>Registers:</strong> We maintain up-to-date registers of trainer/assessor qualifications, student attendance, assessment outcomes, and issued certifications, all of which are audit-ready and available for AMSA verification.</li>
            <li>• <strong>Audits, Meetings & Reviews:</strong> Internal audits and regular quality review meetings evaluate the effectiveness of our system, address non-conformities, and ensure compliance with STCW Code Sections A-I/8 and B-I/8.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Please view our quality management document below.
          </p>
        </div>
        <div id="quality-management-system" className="mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Quality Management System (PDF)</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">QMS.01 CLUB SAIL QUALITY MANAGEMENT SYSTEM v2.4</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/QMS.01 CLUB SAIL QUALITY MANAGEMENT SYSTEM v2.4.pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "70vh", border: "none" }}
                  title="Quality Management System PDF"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* AMSA Question - Continuous Control and Monitoring */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Continuous Control and Monitoring</h3>
            <p className="text-green-800 leading-relaxed">
              The arrangements for delivering training and assessing competences must be continuously controlled and monitored by the Registered training organisation through a quality standards system to ensure achievement of the defined objectives. Each Maritime and Marine Engineering Section should be subject to an internal evaluation at least once a year and each certificate skills set or short course should be evaluated at least once in a 3 year cycle.
            </p>
          </div>
        </div>
      </div>

      {/* Continuous Control and Monitoring Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">CONTINUAL IMPROVEMENT REGISTER</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Our organisation ensures that training delivery and assessment of competence are continuously controlled and monitored through a structured quality standards system.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We implement a formal Quality Management System, evidenced through our folders including Continual Improvement, Policies and Procedures, SOPs, Forms and Checklists, and Audit Meetings & Reviews.
          </p>
          <ul className="text-gray-700 leading-relaxed mt-4 space-y-2">
            <li>• <strong>Annual Internal Evaluations:</strong> Each Maritime course is subject to an internal review at least once per year, covering training effectiveness, assessment outcomes, trainer qualifications, student feedback, and industry relevance.</li>
            <li>• <strong>3-Year Cycle Reviews:</strong> Each certificate, skill set, or short course is evaluated at least once every three years to ensure compliance with current standards and alignment with industry expectations.</li>
            <li>• <strong>Continuous Monitoring:</strong> We conduct regular audits, trainer/assessor observations, and validation of assessments. Records are kept in our Registers folder and actions documented in Audit Meetings & Reviews.</li>
            <li>• <strong>Improvement Loop:</strong> Feedback from students, trainers, and employers is analysed, and improvements are tracked and actioned through our Continual Improvement system.</li>
          </ul>
        </div>
      </div>

      {/* AMSA Question - Quality Standards Through Documented Procedures */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Quality Standards Through Documented Procedures</h3>
            <p className="text-green-800 leading-relaxed">
              Registered training organisations are required to maintain a quality standard through documented procedures at the section level that will be evaluated by AMSA at regular intervals.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Standards Through Documented Procedures Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Quality Standards Through Documented Procedures</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            We have documented procedures in place for each section of the course, including Personal Safety and Social Responsibilities (PSSR), Fire Prevention and Fire Fighting, Survival at Sea,MSA and First Aid. These procedures outline how training and assessment are planned, delivered, monitored, and continuously improved this information can be found in section 9 under assessment plans.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We conduct regular internal audits, assessment validation, and moderation sessions to ensure consistency and accuracy across all units. Trainer and assessor performance is reviewed annually, and student feedback is systematically collected every course and used to inform updates to our delivery and assessment tools. All records are maintained in accordance with ASQA.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            These documented procedures and quality practices will be made available to AMSA during audits or review periods and are continuously updated to ensure alignment with national standards and STCW Code requirements. We hold documents within our LMS and our internal system.
            <br /><br />
            Our Learner Handbook (submitted under Section 8) forms part of our documented policies and procedures provided to all students. It outlines rights, responsibilities, complaints processes, and behaviour expectations. This ensures transparency and compliance with our quality management obligations.
          </p>
        </div>
        <div className="mb-8">
          <div id="course-review-form" className="mb-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Student Course Review Form</span>
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">3.1 Course Review Form 031221</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/3.1 Course Review Form 031221.pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '70vh', border: 'none' }}
                  title="Course Review Form PDF"
                />
              </div>
            </DialogContent>
            </Dialog>
          </div>
          <div id="learner-handbook">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-4"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Learner Handbook</span>
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">Learner Handbook Version 3.2[82]</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/Learner Handbook Version 3.2[82].pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '70vh', border: 'none' }}
                  title="Learner Handbook PDF"
                />
              </div>
            </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* AMSA Question - Quality Standards System Integration */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Quality Standards System Integration</h3>
            <p className="text-green-800 leading-relaxed">
              The quality standards system and evaluation arrangements may be part of a Registered training organisation's overall quality assurance system.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Standards System Integration Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Quality Standards System Integration</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Our quality standards system for maritime training is integrated within the RTO's overall ISO 9001-certified quality assurance framework. This ensures consistent monitoring, evaluation, and continuous improvement of all training and assessment activities. Our most recent ISO 9001 audit was successfully completed, further validating the effectiveness of our systems.
          </p>
        </div>
      </div>
    </div>
  )
} 