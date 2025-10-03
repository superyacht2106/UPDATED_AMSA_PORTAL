"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Award, BookOpen } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { GoogleSheetViewer } from "@/components/ui/google-sheet-viewer"

interface StudentAssessmentProceduresSectionProps {
  onBack: () => void
  selectedDocument?: string | null
}

export function StudentAssessmentProceduresSection({ onBack, selectedDocument }: StudentAssessmentProceduresSectionProps) {
  const [showTASModal, setShowTASModal] = useState(false);
  
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
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Student Assessment Procedures</h1>
      </div>

      {/* AMSA Question - STCW Regulation I/6 Compliance */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - STCW Regulation I/6 Compliance</h3>
            <p className="text-green-800 leading-relaxed">
              The RTO is to comply with STCW Regulation l/6 and Sections A-I/6 and B-I/6 of the STCW Code.
            </p>
          </div>
        </div>
      </div>

      {/* STCW Regulation I/6 Compliance Answer */}
      <div id="stcw-compliance" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">STCW Regulation I/6 Compliance</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Our RTO fully complies with the requirements of STCW Regulation I/6, Section A-I/6, and Section B-I/6 by ensuring that all training and assessment is conducted by qualified personnel who hold the TAE40122 Certificate IV in Training and Assessment (or equivalent) as well as relevant maritime qualifications and current industry experience ( as covered in section 8 question 1).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Training is delivered using a structured, outcomes-based approach aligned with the units of competency from training.gov and industry expectations. Assessments are developed and validated to meet the Principles of Assessment and Rules of Evidence, ensuring they are fair, valid, reliable, and authentic. A robust quality assurance system is in place to monitor training effectiveness, including internal audits, industry consultation, regular validation, and continuous improvement processes (covered in more detail in section 10). Trainers participate in ongoing professional development and maintain currency in both vocational and instructional areas.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Training materials and assessment tools are regularly reviewed to reflect current industry standards and regulatory requirements. Feedback and review forms are collected from students after every course to support continuous improvement and ensure the quality and consistency of training delivery, in line with both the mandatory and recommended provisions of the STCW Code. Our RTO fully complies with the requirements outlined in MT02.
          </p>
        </div>
      </div>

      {/* AMSA Question - Evidence of Competence */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Evidence of Competence</h3>
            <p className="text-green-800 leading-relaxed">
              All candidates studying for STCW certificates will be required to present sufficient evidence of competence and meet all the performance criteria within the range of the subject matter.
            </p>
          </div>
        </div>
      </div>

      {/* Evidence of Competence Answer */}
      <div id="evidence-competence" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Evidence of Competence</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            All candidates studying for STCW certificates are required to demonstrate sufficient evidence of competence and meet all relevant performance criteria through practical activities throughout the course. Performance criteria is observed via an observation checklist that trainer/assessor will mark as competent. Performance criteria and evidence is mapped to from training.gov. Observation checklists and mapping tools can be found below.
          </p>
        </div>
        <h6 className="font-medium text-gray-900 mb-4">Observation Checklists</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Observation Checklist Tiles */}
          {[
            { key: "marf037", code: "MARF037", name: "Follow vessel security procedures (security awareness training)", url: "/docs/New_MARF037_Observation_Checklist.pdf", anchorId: "marf037-checklist" },
            { key: "marf041", code: "MARF041", name: "Observe personal safety and social responsibility (PSSR)", url: "/docs/New_MARF041_Observation_Checklist.pdf", anchorId: "marf041-checklist" },
            { key: "marf046", code: "MARF046", name: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)", url: "/docs/New_MARF046_Observation_Checklist.pdf", anchorId: "marf046-checklist" },
            { key: "hltaid011", code: "HLTAID011", name: "Provide First Aid", url: "/docs/HLTAID011-SMI-AG-v2.0.pdf", anchorId: "hltaid011-checklist" },
            { key: "marf035", code: "MARF035", name: "Contribute to fire prevention and firefighting (basic firefighting)", url: "/docs/New_MARF035_Observation_Checklist.pdf", anchorId: "marf035-checklist" },
          ].map((item) => (
            <div
              key={item.key}
              id={item.anchorId}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
            >
              <div className="flex items-start space-x-3 mb-4 flex-1">
                <Award className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h6 className="font-medium text-gray-900 text-sm mb-1">{item.code} Observation Checklist</h6>
                  <p className="text-xs text-gray-600 mb-1">{item.name}</p>
                  <p className="text-xs text-gray-500">PDF Checklist</p>
                </div>
              </div>
              {item.url ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2 mt-auto"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>View Checklist</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
                    <DialogTitle className="p-4 border-b">Observation Checklist - {item.code}</DialogTitle>
                    <div className="w-full h-[80vh]">
                      <iframe
                        src={item.url}
                        width="100%"
                        height="100%"
                        style={{ minHeight: "70vh", border: "none" }}
                        title={`Observation Checklist PDF for ${item.code}`}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                  disabled
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Coming Soon</span>
                </Button>
              )}
            </div>
          ))}
        </div>
        <h6 id="mapping-tools" className="font-medium text-gray-900 mb-4">Mapping Tools</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mapping Tool Tiles */}
          {[
            { key: "marf037", code: "MARF035", name: "Contribute to fire prevention and firefighting (basic firefighting)", type: "google-sheet", sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5XmhqF_v5KnTd2NFD-CTP7h_EHmpBZkSzSUfJ0WmtdhNhDMrTyQxI186ZQDWiiw/pubhtml?widget=true&headers=false", anchorId: "marf035-mapping" },
            { key: "marf041", code: "MARF041", name: "Observe personal safety and social responsibility (PSSR)", type: "google-sheet", sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYlJMRqM-9oBHJ8caEkRhXwC_xKgjzaEhexqj0i5OMyOWlfw3qQZn8yrS5xujgXw/pubhtml?widget=true&headers=false", anchorId: "marf041-mapping" },
            { key: "marf046", code: "MARF046", name: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)", type: "google-sheet", sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOaF-hdw5kDPHuKhyeTbjL6HxJKUzRfI7w11r787ZrN8bG0LVJWk73jWHKJIJe5A/pubhtml?widget=true&headers=false", anchorId: "marf046-mapping" },
            { key: "hltaid011", code: "HLTAID011", name: "Provide First Aid", type: "pdf", pdfUrl: "/docs/HLTAID011-SMI-AMT-v2.0.pdf", anchorId: "hltaid011-mapping" },
            { key: "marf035", code: "MARF037", name: "Follow vessel security procedures (security awareness training)", type: "google-sheet", sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTeNqWBSH7V3bhJcyBkllJRmwvfATdF2YeuJlKAgDy5Ul40DqqtSNYVrcstVovkGQ/pubhtml?widget=true&headers=false", anchorId: "marf037-mapping" },
          ].map((item) => (
            <div
              key={item.key}
              id={item.anchorId}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
            >
              <div className="flex items-start space-x-3 mb-4 flex-1">
                <Award className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h6 className="font-medium text-gray-900 text-sm mb-1">{item.code} Mapping Tool</h6>
                  <p className="text-xs text-gray-600 mb-1">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.type === "google-sheet" ? "Google Sheet Mapping Tool" : "PDF Mapping Tool"}
                  </p>
                </div>
              </div>
              {item.type === "google-sheet" ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2 mt-auto"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>View Mapping Tool</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
                    <DialogTitle className="p-4 border-b">Mapping Tool - {item.code}</DialogTitle>
                    <div className="w-full h-[80vh]">
                      <iframe
                        src={item.sheetUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title={`Mapping Tool for ${item.code}`}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : item.type === "pdf" && item.pdfUrl ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2 mt-auto"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>View Mapping Tool</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
                    <DialogTitle className="p-4 border-b">Mapping Tool - {item.code}</DialogTitle>
                    <div className="w-full h-[80vh]">
                      <iframe
                        src={item.pdfUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title={`Mapping Tool PDF for ${item.code}`}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                  disabled
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Coming Soon</span>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AMSA Question - Assessment Instruments and Marking Scheme */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Assessment Instruments and Marking Scheme</h3>
            <p className="text-green-800 leading-relaxed">
              RTOs must devise appropriate instruments of assessment for consideration as part of the approval process and submit a copy of the assessment plan with the course application, together with the marking scheme.
            </p>
          </div>
        </div>
      </div>

      {/* Assessment Instruments and Marking Scheme Answer */}
      <div id="assessment-instruments" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Assessment Instruments and Marking Scheme</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            We have submitted comprehensive lesson plans, assessment mapping tools, and assessment guides for each unit of competency, the assessment guides include marking schemes. These documents demonstrate alignment with the required performance criteria and assessment requirements. We have submitted an assessment plan which covers all units of competency please find below assessment plan. Please refer to the relevant folders for full details as part of this application for other tools and resources.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We have also provided below the assessment marking guide for each unit of competency.
          </p>
        </div>
        <div id="assessment-plans" className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              key: "marf035",
              code: "MARF035",
              name: "Contribute to fire prevention and firefighting (basic firefighting)",
              pdf: "/docs/ Assessment Plan_MARF035.pdf",
              anchorId: "marf035-assessment-plan"
            },
            {
              key: "marf037",
              code: "MARF037",
              name: "Follow vessel security procedures (security awareness training)",
              pdf: "/docs/ASSESSMENT PLAN_MARF037.pdf",
              anchorId: "marf037-assessment-plan"
            },
            {
              key: "marf041",
              code: "MARF041",
              name: "Observe personal safety and social responsibility (PSSR)",
              pdf: "/docs/Assessment Plan_MARF041.pdf",
              anchorId: "marf041-assessment-plan"
            },
            {
              key: "marf046",
              code: "MARF046",
              name: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)",
              pdf: "/docs/Assessment Plan_MARF046.pdf",
              anchorId: "marf046-assessment-plan"
            },
          ].map((item) => (
            <div key={item.key} id={item.anchorId}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View {item.code} Assessment Plan</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
                <DialogTitle className="p-4 border-b">Assessment Plan - {item.code}</DialogTitle>
                <div className="w-full h-[80vh]">
                  <iframe
                    src={item.pdf}
                    width="100%"
                    height="100%"
                    style={{ minHeight: "70vh", border: "none" }}
                    title={`Assessment Plan PDF for ${item.code}`}
                  />
                </div>
              </DialogContent>
            </Dialog>
            </div>
          ))}
        </div>
        <h6 id="assessment-marking-guides" className="font-medium text-gray-900 mb-4">Assessment Marking Guides</h6>
        <div id="marking-guides" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              key: "marf037",
              code: "MARF037",
              name: "Follow vessel security procedures (security awareness training)",
              pdf: "/docs/STCW - MSA- MARF037 - MARKING GUIDE v2 KE.docx.pdf",
              anchorId: "marf037-marking-guide"
            },
            {
              key: "marf041",
              code: "MARF041",
              name: "Observe personal safety and social responsibility (PSSR)",
              pdf: "/docs/PSSR - MARKING GUIDE KE.docx-2.pdf",
              anchorId: "marf041-marking-guide"
            },
            {
              key: "marf046",
              code: "MARF046",
              name: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)",
              pdf: "/docs/PST - Assessment Marking Guide with KE.docx.pdf",
              anchorId: "marf046-marking-guide"
            },
            {
              key: "hltaid011",
              code: "HLTAID011",
              name: "Provide First Aid",
              pdf: "/docs/HLTAID011-SMI-AG-v2.0.pdf",
              anchorId: "hltaid011-marking-guide"
            },
            {
              key: "marf035",
              code: "MARF035",
              name: "Contribute to fire prevention and firefighting (basic firefighting)",
              pdf: "/docs/STCW MARF035 - Fire Fighting - MARKING GUIDE KE.docx.pdf",
              anchorId: "marf035-marking-guide"
            },
          ].map((item) => (
            <div key={item.key} id={item.anchorId}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                  disabled={!item.pdf}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{item.pdf ? `View ${item.code} Marking Guide` : "Coming Soon"}</span>
                </Button>
              </DialogTrigger>
              {item.pdf && (
                <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
                  <DialogTitle className="p-4 border-b">Marking Guide - {item.code}</DialogTitle>
                  <div className="w-full h-[80vh]">
                    <iframe
                      src={item.pdf}
                      width="100%"
                      height="100%"
                      style={{ minHeight: "70vh", border: "none" }}
                      title={`Marking Guide PDF for ${item.code}`}
                    />
                  </div>
                </DialogContent>
              )}
            </Dialog>
            </div>
          ))}
        </div>
        
        {/* Training and Assessment Strategy */}
        <h6 id="training-assessment-strategy" className="font-medium text-gray-900 mb-4 mt-8">Training and Assessment Strategy</h6>
        <div className="mb-6">
          <Button
            onClick={() => setShowTASModal(true)}
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>View TAS</span>
          </Button>
          <Dialog open={showTASModal} onOpenChange={setShowTASModal}>
            <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">Training and Assessment Strategy</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/MARSS00033_TAS_2025.pdf"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="Training and Assessment Strategy"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* AMSA Question - Supplementary Methods of Assessment */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Supplementary Methods of Assessment</h3>
            <p className="text-green-800 leading-relaxed">
              Supplementary methods of assessment must be specified.
            </p>
          </div>
        </div>
      </div>

      {/* Supplementary Methods of Assessment Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Supplementary Methods of Assessment</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            In addition to direct observation and written assessments, we use supplementary methods such as oral questioning to confirm underpinning knowledge during practical assessments, third-party workplace reports where applicable (fire fighting facility through fire trainers) , and video recordings for remote assessments(only under certain circumstances). These methods ensure the authenticity, validity, and sufficiency of the evidence gathered and align with the Rules of Evidence and Principles of Assessment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Students must fill out in their enrolment form if they have a learning disability or need help with reading or writing. The trainer will always be there to help students with learning disabilities or offer additional support with students who may not have the good English skills. A LLN test is required before enrolment to test students language, literacy, numeracy skills to ensure they are able to sit the assessments in the first place.
          </p>
        </div>
      </div>

      {/* AMSA Question - Final Assessment */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Final Assessment</h3>
            <p className="text-green-800 leading-relaxed">
              There is to be a final assessment. A candidate who fails the final assessment may re-sit it once. Failure to attain the required standard will require the candidate to repeat the components of the relevant competencies. The academic history of the candidate must record the results of all competent and not yet competent assessments. These are to be retained for subsequent verification by AMSA.
            </p>
          </div>
        </div>
      </div>

      {/* Final Assessment Answer */}
      <div id="final-assessment" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Final Assessment Procedures</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            All students enrolled in STCW courses must complete a formal final assessment to demonstrate competence in accordance with the unit requirements and STCW Code. Assessments are mapped to performance criteria and conducted using validated tools developed under our RTO's assessment system.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Students who do not meet the required standard on the first attempt are permitted one reassessment opportunity. If the student does not achieve competency on the second attempt, they are required to repeat the training components of the relevant unit prior to re-assessment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Assessment outcomes are recorded as either Competent or Not Yet Competent in our Learning Management System (LMS), and a full academic history is maintained for each candidate. This includes results for all assessments, reassessments, and repeated units. These records are securely stored and retained in accordance with our data retention policy and will be made available to AMSA for verification upon request.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This final assessment process supports alignment with MT02 Part 4, STCW Regulation I/6, and AMSA's quality assurance standards.
          </p>
        </div>
      </div>

      {/* AMSA Question - Monitoring Students During Final Exams */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Monitoring Students During Final Exams</h3>
            <p className="text-green-800 leading-relaxed">
              A comprehensive system of monitoring students taking final exams is to be in place.
            </p>
          </div>
        </div>
      </div>

      {/* Monitoring Students During Final Exams Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Student Monitoring During Final Assessments</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Final assessments are conducted under direct supervision, with an instructor present in the classroom to monitor students throughout the exam. This ensures the integrity of the assessment process and compliance.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Please see below for our Final Assessment Monitoring Procedure
          </p>
        </div>
        
        {/* Final Examination Monitoring Procedure Document */}
        <div id="final-examination-monitoring" className="mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Final Examination Monitoring Procedure (PDF)</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">Final Examination Monitoring Procedure</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/Final Examination Monitoring Procedure-2.pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "70vh", border: "none" }}
                  title="Final Examination Monitoring Procedure"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
} 