"use client";

import { useState } from "react";
import { FileText, Eye, X, ExternalLink, BookOpen, Users, Images, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Section 11: Course Completion Documentation
export function CourseCompletionDocumentationSection({ selectedDocument }: { selectedDocument?: string | null }) {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Course Completion Documentation</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Course Completion Documentation</h3>
            <p className="text-green-800 leading-relaxed">
              A course completion document, in a template approved by AMSA, is to be issued by the Registered training organisation to the candidate upon the satisfactory completion of the training course.
            </p>
          </div>
        </div>
      </div>

      <div id="statement-of-attainment" className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            Our organisation will issue a Statement of Attainment to each candidate upon successful completion of the course. We have followed guidance from ASQA to create a template in our LMS ( axcelerate ) that we will use for our statement of attainment. Here is a link below to ASQA guidance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => window.open('https://www.asqa.gov.au/sites/default/files/2020-05/Fact%20sheet%20-%20Sample%20forms%20of%20AQF%20certification%20documentation.pdf', '_blank')}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View ASQA Guidance
            </Button>
            
            <Button 
              onClick={() => setShowCertificate(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Certificate
            </Button>
          </div>

          <p>
            This document template and includes all required information, such as candidate details, units of competency, course completion date, and the RTO's details. A sample Statement of Attainment is shown below. Students must complete a seafarer form 419 and lodge it at a participating post office. They must include their statement of attainment, proof of identity documents & 2 passport size photos of themselves taken within the last 6 months to then apply to AMSA to receive the certificate of safety training. We are more than happy to adjust the statement of attainment to suit AMSA.
          </p>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full h-full">
              <iframe
                src="/docs/statement of attainment-2.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Statement of Attainment Example"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Section 12: Time Constraints
export function TimeConstraintsSection() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Section 12: Time Constraints</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Time Constraints</h3>
            <p className="text-green-800 leading-relaxed">
              The student must complete the approved course within three years of the date they commence the course.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            Our organisation complies with AMSA's requirement that "the student must complete the approved course within three years of the date they commence the course."
          </p>
          <p>
            For our existing Marshall Islands–approved STCW 95+10 course, we currently require students to complete all components within 12 months of enrolment.
            Where a student is unable to meet this timeframe due to extenuating circumstances (e.g., illness, injury, or other valid personal reasons), the Office Manager and CEO may approve an extension on a case-by-case basis, for a period not exceeding 18 months from the original enrolment date.
          </p>
          <p>
            This approach ensures that all students complete their training well within AMSA's three-year maximum timeframe. Further details of this procedure are documented in our STCW 95+10 Course Completion Time Policy – CCP_01, which can be referred to below.
          </p>
          <p>
            We are willing to amend our internal course completion timeframe to align with any updated requirements set by AMSA to ensure full compliance with regulatory standards.
          </p>
        </div>
        
        {/* STCW 95+10 Course Completion Time Policy Document */}
        <div id="stcw-course-completion-policy" className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>View STCW 95+10 Course Completion Time Policy - CCP_01 (PDF)</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">STCW 95+10 Course Completion Time Policy - CCP_01</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/STCW 95+10 Course Completion Time Policy_CCP_01.pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "70vh", border: "none" }}
                  title="STCW 95+10 Course Completion Time Policy PDF"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 1: Access to Lecturers
export function ElearningSection1() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E1. Access to Lecturers</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Access to Lecturers</h3>
            <p className="text-green-800 leading-relaxed">
              Students who enrol on a distance education program must have access to teaching staff throughout the specified period.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            Students who enrol in our online or blended course components have full access to qualified teaching staff throughout the duration of their training. Support is provided via email, phone, Facebook group, and in person during practical/classroom sessions. Trainers are available during business hours (8am – 5pm), and respond to queries as promptly as possible. Our blended delivery model also ensures students have in-person opportunities to ask questions and consolidate their understanding during face-to-face training sessions.
          </p>
          <p>
            We have reviewed the requirements outlined in AMSA MT02, and confirm that we comply with the recommendation to provide professional tutorial support through telephone or email communications. Our current student support structure meets this requirement and ensures that learners undertaking distance or online components are fully supported throughout the course period.
          </p>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 2: Student Support
export function ElearningSection2() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E2. Student Support</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Student Support</h3>
            <p className="text-green-800 leading-relaxed">
              The submission is to include how the Registered training organisation will offer equivalent support to that of any other full time college based student.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            Our organisation will not offer full-time distance learning, we will deliver a blended learning model for three specific units: Maritime Security Awareness (MSA), Personal Safety and Social Responsibility (PSSR), and First Aid.
          </p>
          <p>
            Of these, MSA is delivered fully online, while PSSR and First Aid are delivered through a combination of online theory and face-to-face practical classroom training.
          </p>
          <p>
            Throughout the course period, students enrolled in these blended units have full access to qualified trainers via email, phone, and facebook groups. All online content is delivered through our Learning Management System (LMS) in axcelerate, which includes interactive modules, progress tracking. Students receive timely support and feedback, ensuring their experience is equivalent to that of face-to-face learners.
          </p>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-3">Additional Student Wellbeing Support</h4>
            <p className="text-blue-800 leading-relaxed">
              In addition, we provide access to Australian Counselling Service – a no-cost, confidential Zoom counselling service available to students currently enrolled with RTOs. The service is student-initiated, meaning we simply provide the information for students to book directly with a counsellor. The counsellors are students in the final stages of their degrees and work under professional supervision. This ensures that mental health and emotional wellbeing support is also available to students as part of their learning journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 3: Course Intake Limitations
export function ElearningSection3() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E3. Course Intake Limitations</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Course Intake Limitations</h3>
            <p className="text-green-800 leading-relaxed">
              The Registered training organisation is to determine if the number of students enrolled on the program is to be limited by number. If so, the number is to be specified.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            Our CoST course would be limited to 30 students per course. We have limitations on our sea survival practical facility and also the fire grounds we use at NSW mines rescue. We tend to split students into 2 groups to allow the course to flow easier when there is a large number of students. Groups are limited to 20 each at the fire grounds. Our sea survival facility at warringah aquatic centre would be limited to 20 students, when we get over that amount the group will be split into 2. There must be 1 trainer per 10 students at the pool for safety reasons.
          </p>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 4: Course Notes and Reference Documents
export function ElearningSection4() {
  const [showMSAModal, setShowMSAModal] = useState(false);
  const [showPSSRModal, setShowPSSRModal] = useState(false);
  const [showFirstAidModal, setShowFirstAidModal] = useState(false);
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E4. Course Notes and Reference Documents</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Course Notes and Reference Documents</h3>
            <p className="text-green-800 leading-relaxed">
              Course notes and reference documents must be of a suitable quality and substance to enable the student to complete the course by e-learning, distance learning and blended learning. Copies of the complete course are to be submitted with the application or access to be provided for online courses. A Registered training organisation should ensure that web links provided work effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            All course notes and reference materials for the online delivery of Follow vessel security procedures (security awareness training), Personal Safety and Social Responsibility (PSSR), and First Aid are developed to a high standard to support independent learning.
          </p>
          <p>
            These materials are designed to be clear, interactive, and aligned with the unit of competency and STCW Code requirements. They include structured learning modules, reading materials, multiple choice questions, multimedia content, and downloadable resources to ensure students can complete the theory components effectively.
          </p>
          <p>
            The course is delivered via our Learning Management System (LMS) in axcelerate, which provides reliable access to all learning materials. All embedded links and documents are tested regularly to ensure they remain functional. Clickable links have been provided to our SCORM files for the online courses security awareness training, PSSR & First Aid below for you to test and view as a student would. We are more than happy to provide access as a test student if need be.
          </p>
          <div className="mt-6 space-y-3">
            <Button 
              onClick={() => setShowMSAModal(true)}
              className="w-full flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>MARF037 – Follow vessel security procedures (security awareness training)</span>
            </Button>
            <Dialog open={showMSAModal} onOpenChange={setShowMSAModal}>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                <DialogTitle className="p-4 border-b">MARF037 – Follow vessel security procedures (security awareness training)</DialogTitle>
                <div style={{ width: '100%' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 0, height: 0 }}>
                    <iframe
                      title="MARF037_ UPDATED"
                      frameBorder="0"
                      width="1200"
                      height="675"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      src="https://view.genially.com/67985888ac4b87277dc64660"
                      allowFullScreen={true}
                      scrolling="yes"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              onClick={() => setShowPSSRModal(true)}
              className="w-full flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>MARF041 – Observe personal safety and social responsibility (PSSR)</span>
            </Button>
            <Dialog open={showPSSRModal} onOpenChange={setShowPSSRModal}>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                <DialogTitle className="p-4 border-b">MARF041 – Observe personal safety and social responsibility (PSSR)</DialogTitle>
                <div style={{ width: '100%' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 0, height: 0 }}>
                    <iframe
                      title="MARF041 - Observe personal safety and social responsibility (PSSR)"
                      frameBorder="0"
                      width="1200"
                      height="675"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      src="https://view.genially.com/67b7ec4f5d945c82e92eaed0"
                      allowFullScreen={true}
                      scrolling="yes"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              onClick={() => setShowFirstAidModal(true)}
              className="w-full flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>HLTAID011 – Provide first aid</span>
            </Button>
            <Dialog open={showFirstAidModal} onOpenChange={setShowFirstAidModal}>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                <DialogTitle className="p-4 border-b">HLTAID011 – Provide first aid</DialogTitle>
                <div style={{ width: '100%' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 0, height: 0 }}>
                    <iframe
                      title="First Aid - HLTAID011"
                      frameBorder="0"
                      width="1200"
                      height="675"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      src="https://view.genially.com/6833c54d2dc84da4151accf6"
                      allowFullScreen={true}
                      scrolling="yes"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 5: Comprehensive Reading List & Learner Guides
export function ElearningSection5() {
  const [openGuide, setOpenGuide] = useState<string | null>(null);

  const guides = [
    {
      code: 'HLTAID011',
      title: 'HLTAID011 Learner Guide',
      desc: 'Provide First Aid',
      link: 'https://drive.google.com/file/d/1EGho0HZ69YiCUhc8Pe4HRIJlwRMFzKDM/preview',
    },
    {
      code: 'MARF035',
      title: 'MARF035 Learner Guide',
      desc: 'Contribute to fire prevention and firefighting',
      link: 'https://drive.google.com/file/d/1CXD-fwKZiaQisSfWIF1tcB1UDd5PjUET/preview',
    },
    {
      code: 'MARF037',
      title: 'MARF037 Learner Guide',
      desc: 'Follow vessel security procedures',
      link: '/docs/MARF037_Learner_Guide.pdf',
    },
    {
      code: 'MARF041',
      title: 'MARF041 Learner Guide',
      desc: 'Observe personal safety and social responsibility',
      link: 'https://drive.google.com/file/d/1Y2JoIJGDj2fGXdi-BXFan2DUuNet_L_o/preview',
    },
    {
      code: 'MARF046',
      title: 'MARF046 Learner Guide',
      desc: 'Survive at sea in the event of vessel abandonment',
      link: 'https://drive.google.com/file/d/1kuseAxnodY2vG9YXH_HBAKy7edrT2RHS/preview',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E5. Text books</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Comprehensive Reading List</h3>
            <p className="text-green-800 leading-relaxed">
              If required a comprehensive reading list is to be made available to the students at the commencement of the e-learning, distance learning and blended learning program.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            A comprehensive Learner Guide is provided to each student at the commencement of the course for all units delivered via e-learning & in classroom learning. These Learner Guides serve as the primary reference documents and contain all required reading material, aligned with the unit of competency knowledge evidence. They include course content, key concepts, diagrams to support independent learning and assessment preparation. Hard copy Learner Guides are given to students in classroom for each unit of competency. PDF learner guides can be found below.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <div key={guide.code} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
                <div className="flex items-start space-x-3 mb-4 flex-1">
                  <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-gray-900 text-sm mb-1">{guide.title}</h6>
                    <p className="text-xs text-gray-600 mb-1">{guide.desc}</p>
                    <p className="text-xs text-gray-500">PDF Guide</p>
                  </div>
                </div>
                <Button
                  onClick={() => setOpenGuide(guide.code)}
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Guide</span>
                </Button>
                <Dialog open={openGuide === guide.code} onOpenChange={() => setOpenGuide(null)}>
                  <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
                    <DialogTitle className="p-4 border-b">{guide.title}</DialogTitle>
                    <div className="w-full h-[80vh]">
                      <iframe
                        src={guide.link}
                        width="100%"
                        height="100%"
                        style={{ minHeight: '70vh', border: 'none' }}
                        title={guide.title}
                        allow="autoplay"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 6: Facilities and Equipment
export function ElearningSection6() {
  const [openEquipment, setOpenEquipment] = useState<string | null>(null);

  const equipmentData = [
    {
      code: 'HLTAID011',
      title: 'HLTAID011 – Provide First Aid',
      items: [
        'Adult CPR manikin (ARC compliant)',
        'Child CPR manikin (ARC compliant)',
        'Infant CPR manikin (ARC compliant)',
        'AED training unit',
        'Workplace-standard First Aid kits',
        'Adrenaline auto-injector trainer (e.g., EpiPen style)',
        'Asthma placebo puffer & spacer',
        'Bandages: crepe, triangular, compression',
        'Splints (e.g., Sam splint)',
        'Blankets (thermal and general use)',
        'Cold pack (instant or reusable)',
        'PPE: gloves, face shield, hand sanitiser',
        'Simulated workplace injury/trauma/illness record form',
        'Eye wash bottle or saline solution',
        'Scissors and tweezers (from First Aid kit)',
        'Incident report writing materials (notepad + pen)',
        'Floor mats or appropriate CPR surfaces',
      ],
    },
    {
      code: 'MARF035',
      title: 'MARF035 – Contribute to Fire Prevention and Firefighting (Basic Firefighting)',
      items: [
        'Firefighting PPE (helmet, gloves, boots, flash hood, overalls, BA sets)',
        'Fire Hoses, Nozzles, Hydrants',
        'Expansion foam and nozzle',
        'Portable Fire Extinguishers (CO₂, Foam, Dry Powder, Water)',
        'Fire Blankets',
        'Fire Pumps / Simulated fire panels',
        'Smoke Machines (training grade)',
        'Container Compartment with doors for boundary cooling exercises',
        'Breathing Apparatus (SCBA)',
        'Fire Control Panel Simulator',
      ],
    },
    {
      code: 'MARF041',
      title: 'MARF041 – Observe Personal Safety and Social Responsibility (PSSR)',
      items: [
        'Safety Signage Examples (PPE required, muster points, etc.)',
        'PPE Examples (hard hats, safety vests, gloves, eye protection)',
        'Emergency Procedures Manuals / Posters',
        'Incident report forms',
        'Muster Station Placards',
        'Lifejackets (demo / training versions)',
        'Safety Harnesses',
        'Steel cap boots',
      ],
    },
    {
      code: 'MARF046',
      title: 'MARF046 – Survive at Sea in the Event of Vessel Abandonment and Personal Survival Techniques (PST)',
      items: [
        'SOLAS Approved Lifejackets',
        'Immersion Suits',
        'Life Raft (Training Specific, hydrostatic release optional)',
        'Inflatable Life Raft with throw line and painter',
        'EPIRB (Training / Dummy Unit)',
        'Flares',
        'See below for full life raft components',
      ],
      raftComponents: [
        'Rations (high-calorie survival food)',
        'Freshwater (sealed drinking water, ~1.5L per person for survival minimum)',
        'Sea-sickness tablets / bags',
        'Thermal Protective Aids (TPAs)',
        'Bailer',
        'Sponges',
        'Paddles (plastic or wood)',
        'Heaving line (attached to raft, min 30m)',
        'Repair kit (patches, sealant, pump adapter)',
        'Survival manual (SOLAS format)',
        'First Aid Kit (marine-grade)',
        'Signalling Mirror',
        'Whistle',
        'Waterproof Torch (plus spare batteries and bulbs)',
        'Radar Reflector (inflatable or collapsible)',
        'Fishing kit (basic line, hooks)',
        'Smoke Signals (Orange buoyant smoke)',
        'Handheld Flares (red)',
        'Rocket Parachute Flares',
        'Drinking water collection device (rain catcher / solar still optional)',
        'Anti-seasickness medication',
        'Spare sea anchor (drogue)',
        'Safety knife (secured inside raft)',
        'Survival instructions / guidance placards',
        'Waterproof bag or container for loose items',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E6. Facilities and Equipment</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Equipment Access</h3>
            <p className="text-green-800 leading-relaxed">
              If it is necessary for the candidate to be familiar with and/or use equipment, this must be made available to the student. The Registered training organisation is to specify how this is to be achieved.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Equipment Access</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed mb-4">
            Our organisation ensures that all students have access to the required equipment for the practical components of the course.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Although some theory components are delivered online, all practical training is conducted face-to-face. Students attend practical sessions at our dedicated firefighting grounds, survival training pool, and training rooms equipped with First Aid supplies and PSSR safety PPE.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our practical facilities at NSW Mines Rescue fire grounds have all equipment needed to provide proper training. We bring our own sea survival equipment to the pool facility that we use located at Warringah aquatic centre, the facility has 2x1m diving boards , 1x3m diving board and a 4m deep pool, 15m in length.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We ensure that all students can demonstrate competency in practical tasks using real-world equipment, in compliance with AMSA and STCW training standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Please see below for full equipment list and please refer back to section 8 for photos of our equipment and facilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {equipmentData.map(unit => (
              <div key={unit.code} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
                <div className="flex items-start space-x-3 mb-4 flex-1">
                  <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-gray-900 text-sm mb-1">{unit.title}</h6>
                  </div>
                </div>
                <Button
                  onClick={() => setOpenEquipment(unit.code)}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                >
                  <span>View Equipment List</span>
                </Button>
                <Dialog open={openEquipment === unit.code} onOpenChange={() => setOpenEquipment(null)}>
                  <DialogContent className="max-w-2xl w-full p-0 overflow-hidden">
                    <DialogTitle className="p-4 border-b">{unit.title} Equipment List</DialogTitle>
                    <div className="p-6 max-h-[70vh] overflow-y-auto">
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {unit.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      {unit.raftComponents && (
                        <>
                          <h6 className="font-semibold text-gray-900 mt-6 mb-2">Life Raft Components</h6>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {unit.raftComponents.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 7: Class Attendance
export function ElearningSection7() {
  const [showAxcelerateModal, setShowAxcelerateModal] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E7. Class Attendance</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Class Attendance</h3>
            <p className="text-green-800 leading-relaxed">
              The Registered training organisation should assess the competencies and identify which require college attendance. The Registered training organisation should give consideration to the student attending their training establishment for a given period to consolidate subject matter before attempting the final assessment. This is standard practice for e-learning, distance learning and blended learning programs.<br/><br/>
              Venues and invigilators for the final assessment must be arranged by the Registered training organisation. Educational institutions such as universities, colleges and schools should be used where possible and venues must be approved by AMSA prior to their use. All students will be required to provide photographic identification to the invigilator prior to undertaking the final assessment.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            The online training components of the Certificate of Safety Training (CoST) will include Maritime Security Awareness (MSA), Personal Safety and Social Responsibilities (PSSR), and the theoretical component of First Aid. These will be delivered via our online Learning Management System (aXcelerate Learner Portal). Students are required to complete these components prior to attending the classroom-based practical training.
          </p>
          <p>
            While the theory components of PSSR and First Aid are completed online, students will participate in 2 hours of classroom-based practical training for each of these units to consolidate learning and demonstrate skills under supervision.
          </p>
          <p>
            Knowledge assessments for Personal Survival Techniques (PST) and Fire Prevention and Fire Fighting will be conducted in person at our training facility, with trainers supervising the assessments.
          </p>
          <p>
            Knowledge assessments for MSA, PSSR, and First Aid will be completed online through our LMS, with assessment integrity maintained through submission controls and trainer review.
          </p>
          <p>
            All practical assessments for PSSR, First Aid, Fire Fighting, and PST will be delivered in person at our approved training venues:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>NSW Mines Rescue (firefighting practicals)</li>
            <li>Warringah Aquatic Centre (sea survival training)</li>
            <li>Our office/classroom for PSSR and First Aid demonstrations</li>
          </ul>
          <p>
            To verify identity, students are required to submit valid photographic identification (e.g., passport or driver's licence) upon enrolment, which is checked by our administration staff prior to access being granted to the online platform or classroom. Students identification is stored securely in our LMS, see attached for aXcelerate Security & Data Management
          </p>
          <div className="mt-4">
            <Button 
              onClick={() => setShowAxcelerateModal(true)}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View aXcelerate Security & Data Management
            </Button>
          </div>
          <Dialog open={showAxcelerateModal} onOpenChange={setShowAxcelerateModal}>
            <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">aXcelerate Security & Data Management</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/aXcelerate Security & Data Management v3.0 (1).pdf"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="aXcelerate Security & Data Management"
                />
              </div>
            </DialogContent>
          </Dialog>
          <p>
            Prior to any final assessments, trainers deliver classroom-based revision and discussions to review key content, clarify student questions, and ensure all learners are adequately prepared and confident in their understanding of each unit of competency.
          </p>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 8: Time Constraints
export function ElearningSection8() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E8. Time Constraints</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Time Constraints</h3>
            <p className="text-green-800 leading-relaxed">
              The student must complete the approved course within five years of the commencement date.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            Our organisation complies with AMSA's requirement that "the student must complete the approved course within five years of the date they commence the course."
          </p>
          <p>
            For our existing Marshall Islands–approved STCW 95+10 course, we currently require students to complete all components within 12 months of enrolment.
            Where a student is unable to meet this timeframe due to extenuating circumstances (e.g., illness, injury, or other valid personal reasons), the Office Manager and CEO may approve an extension on a case-by-case basis, for a period not exceeding 18 months from the original enrolment date.
          </p>
          <p>
            This approach ensures that all students complete their training well within AMSA's five year maximum timeframe. Further details of this procedure are documented in our STCW 95+10 Course Completion Time Policy – CCP_01, which can be referred to below.
          </p>
          <p>
            We are willing to amend our internal course completion timeframe to align with any updated requirements set by AMSA to ensure full compliance with regulatory standards.
          </p>
        </div>
        
        {/* STCW 95+10 Course Completion Time Policy Document */}
        <div id="stcw-course-completion-policy-e8" className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>View STCW 95+10 Course Completion Time Policy - CCP_01 (PDF)</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
              <DialogTitle className="p-4 border-b">STCW 95+10 Course Completion Time Policy - CCP_01</DialogTitle>
              <div className="w-full h-[80vh]">
                <iframe
                  src="/docs/STCW 95+10 Course Completion Time Policy_CCP_01.pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "70vh", border: "none" }}
                  title="STCW 95+10 Course Completion Time Policy PDF"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

// E-learning Section 9: Time Constraints
export function ElearningSection9() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">E9. Time Constraints</h1>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Time Constraints</h3>
            <p className="text-green-800 leading-relaxed">
              The student must complete the approved course within five years of the commencement date.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-4 text-gray-700">
          <p>
            We allow students to complete the course within 5 years of commencement date. If a student leaves for whatever reason during the course we can monitor the unit of competency in our LMS what they have completed and what they would need to complete in order to finalise the course.
          </p>
          <p>
            Students who have gone outside of the 5 year time frame must complete the whole course again.
          </p>
        </div>
      </div>
    </div>
  );
}

// Continued Competence Section
export function ContinuedCompetenceSection() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const handleDocumentClick = (documentPath: string) => {
    setSelectedDocument(documentPath);
  };

  const closeDocument = () => {
    setSelectedDocument(null);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Continued Competence</h1>
      </div>
      
      {/* Main Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="space-y-6">
          {/* Introduction */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Refresher Certificate of Safety Training (CoST) – Continued Competence in Sea Survival and Fire Fighting</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Club Sail Pty Ltd, trading as Superyacht Crew Academy and Sydney Maritime Institute, seeks AMSA approval to deliver Refresher Certificate of Safety Training (CoST) in accordance with AMSA's MT10 policy and STCW Regulation VI/1, Tables A-VI/1-1 and A-VI/1-2.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We currently deliver refresher STCW Basic Safety Training to students requiring continued competence, including refresher courses in Fire Prevention and Fire Fighting (FPFF) and Personal Survival Techniques (PST). These courses are already in operation under our existing international approval pathways.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This submission seeks to align our existing refresher training model with AMSA's specific requirements for Australian-issued CoST refresher training.
            </p>
          </div>

          {/* Delivery Format */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-3">Delivery Format:</h4>
            <ul className="list-disc pl-6 text-blue-800 space-y-1">
              <li>Practical shore-based components only, no theory delivery.</li>
              <li>Conducted over 1.5 days at practical training facilities</li>
              <li>Complies with AMSA's minimum nominal training hours:</li>
              <li className="ml-6">• 5 hours Fire Fighting (We would do 8 hours)</li>
              <li className="ml-6">• 3 hours Sea Survival (We would do 4.5 hours)</li>
            </ul>
          </div>

          {/* Entry Requirements */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-3">Entry Requirements:</h4>
            <p className="text-green-800 mb-4">
              This course is designed for seafarers who already hold a Certificate of Safety Training and are seeking to revalidate their certification through Continued Competence training, in accordance with STCW requirements. To be eligible, participants must have completed approved sea service within the past five years and be able to provide evidence of onboard training, including participation in fire and abandon ship drills. While colour vision deficiency (colour blindness) does not preclude enrolment in this course, those pursuing navigational roles (e.g. deck crew or officers) may be subject to additional restrictions based on colour vision as assessed during an ENG1, AMSA 303, or equivalent medical examination. Participants must also be in good physical condition and capable of moderate exertion during simulated firefighting and sea survival exercises.
            </p>
            <p className="text-green-800 mb-4">
              As part of the enrolment process, students are required to complete a liability waiver, image release consent, and provide a copy of valid photo identification.
            </p>
            
            <h5 className="font-medium text-green-900 mb-3">Entry Standards Checklist</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Must be over 16 years of age</div>
                <div className="text-xs text-green-600">Minimum age requirement for course participation</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">In good health</div>
                <div className="text-xs text-green-600">Capable of moderate physical exertion during practical exercises</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Reasonable command of the English language</div>
                <div className="text-xs text-green-600">Ability to understand safety instructions and procedures</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Complete liability waiver</div>
                <div className="text-xs text-green-600">Acknowledgment of risks associated with practical training</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Sign image release form</div>
                <div className="text-xs text-green-600">Consent for use of images for training and promotional purposes</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Provide valid forms of identification</div>
                <div className="text-xs text-green-600">Copy of valid photo identification required for enrolment</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">A letter from their current or recent employer</div>
                <div className="text-xs text-green-600">Participation in drills within the past 5 years</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Previous CoST certificate</div>
                <div className="text-xs text-green-600">Must hold a previous CoST certificate</div>
              </div>
              <div className="bg-white border border-green-200 rounded-md p-3">
                <div className="font-medium text-sm text-green-900 mb-1">Proof of valid sea service in the past 5 years</div>
                <div className="text-xs text-green-600">Must show proof of sea service</div>
              </div>
            </div>
          </div>

          {/* Units of Competency */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-medium text-purple-900 mb-3">Units of Competency Refreshed:</h4>
            <ul className="list-disc pl-6 text-purple-800 space-y-1">
              <li>MARF035 – Contribute to fire prevention and firefighting</li>
              <li>MARF046 – Survive at sea in the event of vessel abandonment and personal survival techniques (PST)</li>
            </ul>
          </div>

          {/* Practical Assessment Requirements */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-medium text-orange-900 mb-3">Practical Assessment Requirements:</h4>
            <p className="text-orange-800 mb-3">Students will be assessed onshore through practical demonstration of the following key competencies through observation checklists:</p>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-orange-900 mb-2">Fire Fighting:</h5>
                <ul className="list-disc pl-6 text-orange-800 space-y-1 text-sm">
                  <li>use various types of portable fire extinguishers</li>
                  <li>use of self-contained breathing apparatus (refresher)</li>
                  <li>extinguish small fires—for example electrical fires, oil fires, propane fires</li>
                  <li>extinguish extensive fires with water, using jet and spray nozzles</li>
                  <li>extinguish fires with foam, powder or any other suitable chemical agent</li>
                  <li>enter and pass through, with lifeline but without breathing apparatus, a compartment into which high-expansion foam has been injected</li>
                  <li>fight fire in smoke-filled enclosed spaces wearing self-contained breathing apparatus</li>
                  <li>extinguish fire with water fog or any other suitable fire-fighting agent in an accommodation room or simulated engine-room with fire and heavy smoke</li>
                  <li>extinguish oil fire with fog applicator and spray nozzles, dry chemical powder or foam applicators</li>
                  <li>effect a rescue in a smoke-filled space wearing breathing apparatus.</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-orange-900 mb-2">Sea Survival:</h5>
                <ul className="list-disc pl-6 text-orange-800 space-y-1 text-sm">
                  <li>don a lifejacket</li>
                  <li>don and use an immersion suit</li>
                  <li>safely jump from a height into the water</li>
                  <li>right an inverted liferaft while wearing a lifejacket</li>
                  <li>swim while wearing a lifejacket</li>
                  <li>keep afloat without a lifejacket</li>
                  <li>board a survival craft from the ship and water while wearing a lifejacket</li>
                  <li>take initial actions on boarding survival craft to enhance chance of survival</li>
                  <li>operate survival craft equipment</li>
                  <li>operate location devices, including radio equipment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Facilities and Equipment */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-medium text-indigo-900 mb-3">Facilities and Equipment:</h4>
            <p className="text-indigo-800 mb-3">All refresher practicals are conducted using the same facilities and equipment as full CoST courses:</p>
            <ul className="list-disc pl-6 text-indigo-800 space-y-1">
              <li><strong>Fire Grounds at NSW Mines Rescue:</strong> smoke chamber, live fire units, foam application, SCBA.</li>
              <li><strong>Warringah Aquatic Centre Sea Survival Facility:</strong> deep pool with jumping platforms, training rafts, lifejackets, immersion suits, and safety signage.</li>
            </ul>
          </div>

          {/* Equipment Lists */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 mb-3">Equipment Lists</h4>
            
            {/* MARF046 Equipment */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-3">MARF046 – Survive at Sea in the Event of Vessel Abandonment and Personal Survival Techniques (PST) Equipment List</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                <li>SOLAS Approved Lifejackets</li>
                <li>Immersion Suits</li>
                <li>Life Raft (Training Specific, hydrostatic release optional)</li>
                <li>Inflatable Life Raft with throw line and painter</li>
                <li>EPIRB (Training / Dummy Unit)</li>
                <li>Flares</li>
                <li>See below for full life raft components</li>
              </ul>
              
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h6 className="font-medium text-gray-900 mb-2">Life Raft Components</h6>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                  <li>Rations (high-calorie survival food)</li>
                  <li>Freshwater (sealed drinking water, ~1.5L per person for survival minimum)</li>
                  <li>Sea-sickness tablets / bags</li>
                  <li>Thermal Protective Aids (TPAs)</li>
                  <li>Bailer</li>
                  <li>Sponges</li>
                  <li>Paddles (plastic or wood)</li>
                  <li>Heaving line (attached to raft, min 30m)</li>
                  <li>Repair kit (patches, sealant, pump adapter)</li>
                  <li>Survival manual (SOLAS format)</li>
                  <li>First Aid Kit (marine-grade)</li>
                  <li>Signalling Mirror</li>
                  <li>Whistle</li>
                  <li>Waterproof Torch (plus spare batteries and bulbs)</li>
                  <li>Radar Reflector (inflatable or collapsible)</li>
                  <li>Fishing kit (basic line, hooks)</li>
                  <li>Smoke Signals (Orange buoyant smoke)</li>
                  <li>Handheld Flares (red)</li>
                  <li>Rocket Parachute Flares</li>
                  <li>Drinking water collection device (rain catcher / solar still optional)</li>
                  <li>Anti-seasickness medication</li>
                  <li>Spare sea anchor (drogue)</li>
                  <li>Safety knife (secured inside raft)</li>
                  <li>Survival instructions / guidance placards</li>
                  <li>Waterproof bag or container for loose items</li>
                </ul>
              </div>
            </div>

            {/* MARF035 Equipment */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-3">MARF035 – Contribute to Fire Prevention and Firefighting (Basic Firefighting) Equipment List</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                <li>Firefighting PPE (helmet, gloves, boots, flash hood, overalls, BA sets)</li>
                <li>Fire Hoses, Nozzles, Hydrants</li>
                <li>Expansion foam and nozzle</li>
                <li>Portable Fire Extinguishers (CO₂, Foam, Dry Powder, Water)</li>
                <li>Fire Blankets</li>
                <li>Fire Pumps / Simulated fire panels</li>
                <li>Smoke Machines (training grade)</li>
                <li>Container Compartment with doors for boundary cooling exercises</li>
                <li>Breathing Apparatus (SCBA)</li>
                <li>Fire Control Panel Simulator</li>
              </ul>
            </div>
          </div>

          {/* Trainer Requirements */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-900 mb-3">Trainer Requirements:</h4>
            <p className="text-yellow-800 mb-3">
              All training and assessment at our organisation are conducted by personnel who meet the requirements of STCW Regulation I/6 and Sections A-I/6 and B-I/6 of the STCW Code. All trainers and assessors hold, at a minimum, the TAE40110 Certificate IV in Training and Assessment or its successor, as required. We do not currently offer simulator training. All trainers and assessors meet the requirements outlined in AMSA's MT07 document — Lecturer Qualifications for STCW Courses, holding both TAE40110 (or successor) and relevant maritime qualifications aligned with the STCW Code. Please see section 8 for trainers certification, maritime & training experience. All refresher courses will be conducted by trainers meeting the requirements of:
            </p>
            <ul className="list-disc pl-6 text-yellow-800 space-y-1">
              <li>STCW Regulation I/6, Sections A-I/6 and B-I/6</li>
              <li>Holders of TAE40110/TAE40116 Certificate IV in Training and Assessment</li>
              <li>Relevant maritime qualifications and practical industry experience</li>
              <li>Hold AMSA CoST</li>
              <li>Working with children check</li>
              <li>Police check</li>
            </ul>
          </div>

          {/* Quality Assurance */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-medium text-teal-900 mb-3">Quality Assurance:</h4>
            <p className="text-teal-800 mb-3">Refresher training is covered under our internal Quality Management System and subject to:</p>
            <ul className="list-disc pl-6 text-teal-800 space-y-1">
              <li><strong>Continual Improvement:</strong> We maintain a formal process for collecting feedback from students, trainers, and industry stakeholders. Outcomes are reviewed regularly to drive ongoing improvement in training delivery and assessment practices.</li>
              <li><strong>Policies and Procedures:</strong> Documented policies and procedures guide all operations and ensure alignment with STCW, AMSA, and national regulatory requirements. These are reviewed periodically for relevance and accuracy.</li>
              <li><strong>Forms and Checklists:</strong> Comprehensive checklists and forms are used to standardise processes, support consistency in delivery, and verify compliance during internal and external audits.</li>
              <li><strong>Risk Management:</strong> Our system identifies, assesses, and mitigates risks related to training delivery, assessment integrity, and student outcomes.</li>
              <li><strong>SOPs – Procedure Manual:</strong> Standard Operating Procedures ensure consistent training and assessment practices and serve as a reference for staff to maintain compliance with STCW standards.</li>
              <li><strong>Registers:</strong> We maintain up-to-date registers of trainer/assessor qualifications, student attendance, assessment outcomes, and issued certifications, all of which are audit-ready and available for AMSA verification.</li>
              <li><strong>Audits, Meetings & Reviews:</strong> Internal audits and regular quality review meetings evaluate the effectiveness of our system, address non-conformities, and ensure compliance with STCW Code Sections A-I/8 and B-I/8.</li>
            </ul>
            <p className="text-teal-800 mt-3">Please view our quality management system document in section 10.</p>
          </div>

          {/* Supporting Documents */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-medium text-blue-900 mb-4 text-lg">Supporting Documents</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* MT10 Policy Reference */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-blue-900 text-sm mb-1">MT10 Policy Reference</h6>
                    <p className="text-xs text-blue-600">AMSA continued competence requirements</p>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open('https://www.amsa.gov.au/qualifications-training/training-organisations/continued-competence-additional-mandatory-sea', '_blank')}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View on AMSA Website</span>
                </Button>
              </div>

              {/* Employer Letter Templates */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-blue-900 text-sm mb-1">Employer Letter Templates</h6>
                    <p className="text-xs text-blue-600">Required employer confirmation letter</p>
                  </div>
                </div>
                <Button 
                  onClick={() => handleDocumentClick('/docs/Employer_Letter_Training_v1.pdf')}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Letter Template</span>
                </Button>
              </div>

              {/* Assessment Instruments */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-blue-900 text-sm mb-1">Assessment Instruments</h6>
                    <p className="text-xs text-blue-600">Assessment plans and marking schemes</p>
                  </div>
                </div>
                <div className="text-xs text-blue-600 bg-blue-50 border border-blue-200 rounded-md p-2">
                  See section 9 Assessment Instruments and Marking Scheme
                </div>
              </div>

              {/* Learner Handbook */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-blue-900 text-sm mb-1">Learner Handbook</h6>
                    <p className="text-xs text-blue-600">Student handbook and course information</p>
                  </div>
                </div>
                <Button 
                  onClick={() => handleDocumentClick('/docs/Learner Handbook Version 3.2[82].pdf')}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Handbook</span>
                </Button>
              </div>

              {/* Training Facility Photos */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <Images className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-blue-900 text-sm mb-1">Training Facility Photos</h6>
                    <p className="text-xs text-blue-600">Photos of practical training facilities</p>
                  </div>
                </div>
                <div className="text-xs text-blue-600 bg-blue-50 border border-blue-200 rounded-md p-2">
                  See section 8 Training Facility Photo Galleries
                </div>
              </div>

              {/* Equipment Checklist */}
              <div className="bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-blue-900 text-sm mb-1">Equipment Checklist</h6>
                    <p className="text-xs text-blue-600">Complete equipment lists for training</p>
                  </div>
                </div>
                <div className="text-xs text-blue-600 bg-blue-50 border border-blue-200 rounded-md p-2">
                  See section 6 under Units of Competency - Equipment Lists
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closeDocument}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full h-full">
              <iframe
                src={selectedDocument}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Document Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 