"use client"

import { useState } from "react"
import { FileText, Eye, X, Award, Users, BookOpen, ChevronLeft, ChevronRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRef } from "react";

const certifications = [
  {
    id: "cert-iv",
    title: "Certificate IV in Training and Assessment",
    description: "TAE40122 - Training and Assessment qualification",
    url: "/docs/Cert IV in T&A - TAE40122.pdf",
  },
  {
    id: "first-aid",
    title: "First Aid Certificate",
    description: "Current first aid certification",
    url: "/docs/First_Aid_SOA - SMI.pdf",
  },
  {
    id: "police-check",
    title: "NSW Police Check",
    description: "Current NSW Police background check",
    url: "/docs/NSWPF-2024-557832.pdf",
  },
  {
    id: "working-children",
    title: "Working with Children Check",
    description: "Current Working with Children Check",
    url: "/docs/Working With Children Check Verification Results Receipt.pdf",
  },
  {
    id: "coc-master",
    title: "Certificate of Competency Master <35m",
    description: "AMSA Certificate of Competency",
    url: "/images/CoC M35m - expires 13.02.2025.jpg",
  },
  {
    id: "amsa-cost",
    title: "AMSA Certificate of Safety Training",
    description: "STCW Basic Safety Training Certificate",
    url: "/images/STCW - AMSA COST.jpg",
  },
]

const courseMaterials = [
  {
    id: "msa",
    title: "MARF037 - Maritime Security Awareness",
    description: "Online SCORM course material",
    url: "https://view.genially.com/67985888ac4b87277dc64660",
    type: "Online Course",
  },
  {
    id: "pssr",
    title: "MARF041 - Personal Safety & Social Responsibility",
    description: "Online SCORM course material",
    url: "https://view.genially.com/67b7ec4f5d945c82e92eaed0",
    type: "Online Course",
  },
  {
    id: "first-aid",
    title: "HLTAID011 - Provide First Aid",
    description: "Interactive Online Course",
    url: "",
    type: "Online Course",
  },
  {
    id: "fire",
    title: "MARF035 - Fire Prevention & Firefighting",
    description: "Classroom presentation material",
    url: "https://www.canva.com/design/DAGh75zYbO0/bJ-TVSjoXuPr8C0cGIsl0A/view?utm_content=DAGh75zYbO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haf0fb6d54f",
    type: "Classroom Presentation",
  },
  {
    id: "pst",
    title: "MARF046 - Personal Survival Techniques",
    description: "Classroom presentation material",
    url: "https://www.canva.com/design/DAGkNeDuw1s/CfiBk83aI_yfvXN5srBG6g/view?utm_content=DAGkNeDuw1s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h977e5f67cd",
    type: "Classroom Presentation",
  },
]

const facilityGalleries = {
  "sea-survival": {
    title: "Sea Survival Training",
    description: "Live training photos from sea survival sessions at Warringah Aquatic Centre",
    images: [
      {
        src: "/images/sea-survival-1.jpg",
        alt: "Students practicing sea survival techniques with life raft",
        caption: "Students learning life raft deployment and boarding techniques",
      },
      {
        src: "/images/sea-survival-2.jpg",
        alt: "Group of students in life jackets forming circle in pool",
        caption: "Group survival techniques and teamwork exercises",
      },
      {
        src: "/images/sea-survival-3.jpg",
        alt: "Student jumping from platform in life jacket",
        caption: "Abandon ship procedures and water entry techniques",
      },
      {
        src: "/images/sea-survival-4.jpg",
        alt: "Group photo of students in survival suits",
        caption: "Students equipped with survival suits and life jackets",
      },
      // New images below
      {
        src: "/images/sea-survival-equipment-1.jpg",
        alt: "Sea survival equipment kit contents on table",
        caption: "Sea survival equipment kit used in training",
      },
      {
        src: "/images/sea-survival-equipment-2.jpg",
        alt: "Various sea survival signaling and safety devices on table",
        caption: "Signaling and safety devices for sea survival",
      },
      {
        src: "/images/sea-survival-equipment-3.jpg",
        alt: "Red Ikaros line thrower on table",
        caption: "Ikaros line thrower for sea survival training",
      },
      {
        src: "/images/sea-survival-flares.jpg",
        alt: "STCW flares and fire extinguisher in green bin",
        caption: "STCW flares and fire extinguisher used in training",
      },
      {
        src: "/images/IMG_1671.jpg",
        alt: "Students demonstrating flare usage during sea survival training",
        caption: "Students practicing flare demonstration during sea survival training",
      },
      {
        src: "/images/sea-survival-pool-1.jpg",
        alt: "Group of students in life jackets at poolside with life raft",
        caption: "Sea survival training at Warringah Aquatic Centre",
      },
      {
        src: "/images/sea-survival-pool-2.jpg",
        alt: "Students in immersion suits floating in pool in formation",
        caption: "Students practicing group survival floating techniques",
      },
      {
        src: "/images/sea-survival-pool-3.jpg",
        alt: "Instructor observing students in immersion suits floating in pool",
        caption: "Instructor supervising sea survival practical session",
      },
    ],
  },
  "fire-fighting": {
    title: "Fire Fighting Training",
    description: "Practical firefighting training at NSW Mines Rescue facility",
    images: [
      {
        src: "/images/expansionfoam.jpg",
        alt: "Expansion foam equipment for fire fighting training",
        caption: "Expansion foam equipment used in fire fighting training",
      },
      {
        src: "/images/firehose.jpeg",
        alt: "Fire hose used in training",
        caption: "Fire hose for practical fire fighting exercises",
      },
      {
        src: "/images/noselstorage.jpg",
        alt: "Nozzle storage for fire hoses",
        caption: "Nozzle storage area for fire fighting equipment",
      },
      {
        src: "/images/expansionfoamfitting.jpg",
        alt: "Expansion foam fitting demonstration",
        caption: "Demonstrating expansion foam fitting during training",
      },
      {
        src: "/images/classroomfire.jpg",
        alt: "Classroom fire safety training",
        caption: "Classroom session on fire safety and procedures",
      },
      {
        src: "/images/bootsjacket.jpg",
        alt: "Firefighting boots and jacket",
        caption: "Protective boots and jacket for fire fighting",
      },
      {
        src: "/images/outdoor.jpg",
        alt: "Outdoor fire fighting training area",
        caption: "Outdoor area for practical fire fighting training",
      },
      {
        src: "/images/outdoortraining.jpg",
        alt: "Students in outdoor fire fighting training",
        caption: "Students participating in outdoor fire fighting exercises",
      },
      {
        src: "/images/livefire.jpg",
        alt: "Live fire training exercise",
        caption: "Live fire exercise at training facility",
      },
      {
        src: "/images/container.jpg",
        alt: "Fire training container",
        caption: "Container used for live fire training scenarios",
      },
      {
        src: "/images/helmetjacket.jpeg",
        alt: "Firefighting helmet and jacket",
        caption: "Helmet and jacket for fire fighting trainees",
      },
      {
        src: "/images/livefire2.jpg",
        alt: "Second live fire training scenario",
        caption: "Live fire scenario with students in action",
      },
      {
        src: "/images/studentsfoam.jpg",
        alt: "Students using foam in fire fighting training",
        caption: "Students applying foam during fire fighting training",
      },
      {
        src: "/images/ba.jpg",
        alt: "Breathing apparatus for fire fighting",
        caption: "Breathing apparatus (BA) used in fire fighting training",
      },
      {
        src: "/images/extinguishers.jpg",
        alt: "Fire extinguishers lined up for training",
        caption: "Fire extinguishers used in practical training",
      },
    ],
  },
  "first-aid": {
    title: "First Aid",
    description: "First aid training equipment and classroom setup",
    images: [
      {
        src: "/images/Firstaidkit1.jpg",
        alt: "First aid kit with supplies",
        caption: "First aid kit used in training sessions",
      },
      {
        src: "/images/Firstaidbandages.jpg",
        alt: "First aid bandages and supplies",
        caption: "Bandages and supplies for first aid training",
      },
      {
        src: "/images/Firstaidkit2.jpg",
        alt: "Second first aid kit with contents displayed",
        caption: "Additional first aid kit for practical exercises",
      },
      {
        src: "/images/epipenskit.jpg",
        alt: "EpiPens and first aid kit",
        caption: "EpiPens and kit for allergy emergency training",
      },
      {
        src: "/images/manniquin.jpg",
        alt: "CPR manniquin for first aid training",
        caption: "CPR manniquin used in first aid practicals",
      },
    ],
  },
  "pssr-equipment": {
    title: "PSSR Equipment",
    description: "Personal Safety and Social Responsibility training equipment",
    images: [
      {
        src: "/images/PSSR.jpg",
        alt: "PSSR training equipment setup",
        caption: "Personal Safety and Social Responsibility (PSSR) training equipment",
      },
    ],
  },
  "office-facility": {
    title: "Office Facility",
    description: "Our training office and administrative facilities",
    images: [
      {
        src: "/images/bathroom.jpg",
        alt: "Office bathroom facilities",
        caption: "Bathroom facilities in the training office",
      },
      {
        src: "/images/classroom.jpg",
        alt: "Training classroom with desks and chairs",
        caption: "Main classroom setup for training sessions",
      },
      {
        src: "/images/classroom2.jpg",
        alt: "Alternate view of classroom with projector",
        caption: "Classroom with projector and seating",
      },
      {
        src: "/images/classroomwhietboard.jpg",
        alt: "Classroom whiteboard and teaching area",
        caption: "Whiteboard and teaching area in classroom",
      },
      {
        src: "/images/kitchen.jpg",
        alt: "Office kitchen area",
        caption: "Kitchen area for staff and students",
      },
      {
        src: "/images/kitchensink.jpg",
        alt: "Kitchen sink and counter",
        caption: "Kitchen sink and counter in office kitchen",
      },
      {
        src: "/images/teabreak.jpg",
        alt: "Tea break area with table and chairs",
        caption: "Tea break area for staff and students",
      },
      {
        src: "/images/office_waiting_area.jpg",
        alt: "Office waiting area with seating",
        caption: "Office waiting area for visitors and students",
      },
      {
        src: "/images/Office.jpg",
        alt: "Main office room with desks and computers",
        caption: "Main office room with desks and computers",
      },
    ],
  },
}

interface ConductTrainingSectionProps {
  onBack: () => void
  selectedDocument?: string | null
}

export function ConductTrainingSection({ onBack, selectedDocument }: ConductTrainingSectionProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showMSAModal, setShowMSAModal] = useState(false);
  const [showPSSRModal, setShowPSSRModal] = useState(false);
  const [showFireModal, setShowFireModal] = useState(false);
  const [showPSTModal, setShowPSTModal] = useState(false);
  const [showFirstAidModal, setShowFirstAidModal] = useState(false);
  const [showFlareForm, setShowFlareForm] = useState(false);
  const [showWorkplaceForm, setShowWorkplaceForm] = useState<string | null>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);

  const openCertificate = (url: string) => {
    setSelectedCertificate(url)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  const openCourseMaterial = (url: string) => {
    if (url) {
      window.open(url, "_blank")
    } else {
      alert("Course material coming soon.")
    }
  }

  const openGallery = (galleryId: string) => {
    const gallery = facilityGalleries[galleryId as keyof typeof facilityGalleries]
    if (gallery.images.length > 0) {
      setSelectedGallery(galleryId)
      setCurrentImageIndex(0)
    } else {
      alert("Gallery photos coming soon.")
    }
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedGallery) {
      const gallery = facilityGalleries[selectedGallery as keyof typeof facilityGalleries]
      setCurrentImageIndex((prev) => (prev + 1) % gallery.images.length)
    }
  }

  const prevImage = () => {
    if (selectedGallery) {
      const gallery = facilityGalleries[selectedGallery as keyof typeof facilityGalleries]
      setCurrentImageIndex((prev) => (prev - 1 + gallery.images.length) % gallery.images.length)
    }
  }

  const currentGallery = selectedGallery ? facilityGalleries[selectedGallery as keyof typeof facilityGalleries] : null
  const currentImage = currentGallery ? currentGallery.images[currentImageIndex] : null

  // Equipment data for tiles
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

  const [openEquipment, setOpenEquipment] = useState<string | null>(null);

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
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Conduct of the training</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              Qualifications of teaching staff - training and assessment must be undertaken by persons qualified in
              accordance with the provisions of STCW Regulation l/6 and sections A-I/6 and B-I/6 of the STCW Code. Staff
              should as a minimum have completed TAE400110 Certificate IV in Training and Assessment or its successor. A
              list of lecturers together with their certificates and experience is to be provided. If simulator-based
              training is part of the Training and Assessment strategy, persons doing this task should be qualified in
              accordance with the provisions of STCW Regulation l/12 and sections A-l/12 and Bl/12 of the STCW Code.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div id="staff-qualifications" className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Training Staff Qualifications</h3>

        {/* Answer Paragraph */}
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            All training and assessment at our organisation are conducted by personnel who meet the requirements of STCW Regulation I/6 and Sections A-I/6 and B-I/6 of the STCW Code. All trainers and assessors hold, at a minimum, the TAE40110 Certificate IV in Training and Assessment or its successor, as required. We do not currently offer simulator training. All trainers and assessors meet the requirements outlined in AMSA's MT07 document — Lecturer Qualifications for STCW Courses, holding both TAE40110 (or successor) and relevant maritime qualifications aligned with the STCW Code. Please see below for trainers certification, maritime & training experience.
          </p>
        </div>

        {/* Trainer Requirements */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h5 className="font-medium text-blue-900 mb-3">Trainer Requirements:</h5>
          <p className="text-blue-800 leading-relaxed mb-3">
            All courses will be conducted by trainers meeting the requirements of:
          </p>
          <ul className="list-disc pl-6 text-blue-800 space-y-1">
            <li>STCW Regulation I/6, Sections A-I/6 and B-I/6</li>
            <li>Holders of TAE40110/TAE40116 Certificate IV in Training and Assessment</li>
            <li>Relevant maritime qualifications and practical industry experience</li>
            <li>Hold AMSA CoST</li>
            <li>Working with children check</li>
            <li>Police check</li>
          </ul>
        </div>

        {/* Trainer Profile */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="/images/greg-newby-headshot.jpg"
              alt="Greg Newby"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Greg Newby</h4>
              <p className="text-sm text-gray-600">Head Instructor</p>
            </div>
          </div>

          {/* Certifications */}
          <h5 className="font-medium text-gray-900 mb-4">Certifications</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                id={cert.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
              >
                <div className="flex items-start space-x-3 mb-4 flex-1">
                  <Award className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-gray-900 text-sm mb-1">{cert.title}</h6>
                    <p className="text-xs text-gray-600">{cert.description}</p>
                  </div>
                </div>
                <Button
                  onClick={() => openCertificate(cert.url)}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Now</span>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Maritime & Training Experience */}
        <div className="border-t border-gray-200 pt-6">
          <h5 className="font-medium text-gray-900 mb-4">Maritime & Training Experience</h5>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Since January 2022 Greg has trained as a Subject Matter Expert (SME) on GPH, Coxswains and Master &lt;24m NC units. During this time, although not approved to sign off students or carry out assessments, he used his personal experience and qualifications to educate students on subjects that he has considerable experience and training in, especially that of safety education regarding Safety Management Systems, Safety Equipment and Emergency Preparedness.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Greg has over 20 years experience working on Foreign Going vessels which were STCW, ISM and ISPS Compliant. Greg has served as both Safety Officer and Security Officer on Multiple vessels.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Since obtaining TAE Cert IV qualification Greg has trained multiple GPH, Coxswains and Master&lt;24m Courses. He is listed as an AMPA assessor for Master &lt;24m NC.
            </p>
          </div>

          {/* Course Intake Limitations AMSA Question */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-green-900 mb-2">AMSA Question - Course Intake Limitations</h3>
                <p className="text-green-800 leading-relaxed">
                  Course intake limitations—the Registered training organisation is to determine if the number of
                  students enrolled on the program is to be limited by number. If appropriate, the number is to be
                  specified.
                </p>
              </div>
            </div>
          </div>

          {/* Course Intake Answer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h5 className="font-medium text-gray-900 mb-4">Course Intake Limitations</h5>
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Our CoST course would be limited to 30 students per course. We have limitations on our sea survival practical facility and also the fire grounds we use at NSW mines rescue.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                For our fire grounds facility there is a limit of 20 students per session, if we have over 20 students on our course we would split into 2 sessions. Most the time we try to split into smaller groups anyways to make a better experience for the trainer and the students. A SCA staff member will drive students to the fire ground and be observing students throughout the day for performance.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our sea survival facility at warringah aquatic centre would be limited to 20 students, when we get over that amount the group will be split into 2 separate sessions a morning and afternoon session. There must be 1 qualified trainer per 10 students at the pool for safety reasons.
              </p>
            </div>

            {/* Intake Limitations Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">Maximum Course Intake</h6>
                    <p className="text-2xl font-bold text-gray-900">30</p>
                    <p className="text-xs text-gray-600">Students per intake</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">Classroom Capacity</h6>
                    <p className="text-2xl font-bold text-gray-900">30</p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">Firefighting Sessions</h6>
                    <p className="text-2xl font-bold text-gray-900">20</p>
                    <p className="text-xs text-gray-600">Students per session</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">Sea Survival Sessions</h6>
                    <p className="text-2xl font-bold text-gray-900">20</p>
                    <p className="text-xs text-gray-600">Students per session</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors md:col-span-2 lg:col-span-1">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-gray-900 mb-1">Pool Ratio</h6>
                    <p className="text-2xl font-bold text-gray-900">1:10</p>
                    <p className="text-xs text-gray-600">Trainer to student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Facilities */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h6 className="font-medium text-gray-900 mb-3">Specialised Training Facilities</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                  <h6 className="font-medium text-sm text-gray-900">NSW Mines Rescue</h6>
                  <p className="text-xs text-gray-600 mt-1">Firefighting practical training</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                  <h6 className="font-medium text-sm text-gray-900">Warringah Aquatic Centre</h6>
                  <p className="text-xs text-gray-600 mt-1">Sea survival training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Notes and Reference Documents AMSA Question */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-green-900 mb-2">
                  AMSA Question - Course Notes and Reference Documents
                </h3>
                <p className="text-green-800 leading-relaxed">
                  Course notes and reference documents—the submission is to include course notes, course delivery
                  material and reference documents and must be of a suitable quality and substance to enable the student
                  to complete the course. If e-learning, distance or blended delivery is proposed, Registered training
                  organisations must provide access to these resources.
                </p>
              </div>
            </div>
          </div>

          {/* Course Materials Answer */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h5 className="font-medium text-gray-900 mb-4">Course Notes and Reference Documents</h5>
            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Please see below for each unit of competency there is a embedded viewable scorm file for our online learning or a embedded presentation which we use in classroom training. The scorm files have interactive presentations that will be a more visual representation of the learner guide which covers all the knowledge evidence. The classroom presentations also cover all the knowledge evidence covered in the learner guide and will be presented by a qualified trainer and assessor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The scorm files will be used in our LMS in Axcelerate and students will access the course material in their student portal. Our training and assessment strategies align with MT02 guidance on blended learning, ensuring the use of e-learning methods meets all STCW A-I/6 requirements.
              </p>
            </div>

            {/* Units of Competency Course Materials */}
            <h6 className="font-medium text-gray-900 mb-4">Units of Competency - Course Materials</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseMaterials.filter(material => material.id !== 'msa' && material.id !== 'pssr').map((material) => {
                if (material.id === 'first-aid') {
                  return (
                    <div
                      key={material.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
                    >
                      <div className="flex items-start space-x-3 mb-4 flex-1">
                        <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h6 className="font-medium text-gray-900 text-sm mb-1">{material.title}</h6>
                          <p className="text-xs text-gray-600 mb-2">{material.description}</p>
                          <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {material.type}
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => setShowFirstAidModal(true)}
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-center space-x-2 mt-auto"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Material</span>
                      </Button>
                      <Dialog open={showFirstAidModal} onOpenChange={setShowFirstAidModal}>
                        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                          <DialogTitle className="p-4 border-b">HLTAID011 - Provide First Aid</DialogTitle>
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
                  );
                }
                if (material.id === 'fire') {
                  return (
                    <div
                      key={material.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
                    >
                      <div className="flex items-start space-x-3 mb-4 flex-1">
                        <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h6 className="font-medium text-gray-900 text-sm mb-1">{material.title}</h6>
                          <p className="text-xs text-gray-600 mb-2">{material.description}</p>
                          <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {material.type}
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => setShowFireModal(true)}
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-center space-x-2 mt-auto"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Material</span>
                      </Button>
                      <Dialog open={showFireModal} onOpenChange={setShowFireModal}>
                        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                          <DialogTitle className="p-4 border-b">MARF035 - Fire Prevention & Firefighting Presentation</DialogTitle>
                          <div style={{ width: '100%' }}>
                            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: 8, willChange: 'transform' }}>
                              <iframe
                                loading="lazy"
                                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                                src="https://www.canva.com/design/DAGh75zYbO0/zfHqXRYlmd-cesLqCxgz-w/view?embed"
                                allowFullScreen
                                allow="fullscreen"
                                title="MARF035 - Fire Fighting Presentation"
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
                if (material.id === 'pst') {
                  return (
                    <div
                      key={material.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
                    >
                      <div className="flex items-start space-x-3 mb-4 flex-1">
                        <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h6 className="font-medium text-gray-900 text-sm mb-1">{material.title}</h6>
                          <p className="text-xs text-gray-600 mb-2">{material.description}</p>
                          <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {material.type}
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => setShowPSTModal(true)}
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-center space-x-2 mt-auto"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Material</span>
                      </Button>
                      <Dialog open={showPSTModal} onOpenChange={setShowPSTModal}>
                        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                          <DialogTitle className="p-4 border-b">MARF046 - Personal Survival Techniques Presentation</DialogTitle>
                          <div style={{ width: '100%' }}>
                            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: 8, willChange: 'transform' }}>
                              <iframe
                                loading="lazy"
                                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                                src="https://www.canva.com/design/DAGkNeDuw1s/hwNGGpDxOJfi-XrgX4KSkA/view?embed"
                                allowFullScreen
                                allow="fullscreen"
                                title="MARF046 - PST - PRESENTATION"
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
                return (
                  <div
                    key={material.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
                  >
                    <div className="flex items-start space-x-3 mb-4 flex-1">
                      <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h6 className="font-medium text-gray-900 text-sm mb-1">{material.title}</h6>
                        <p className="text-xs text-gray-600 mb-2">{material.description}</p>
                        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          {material.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => openCourseMaterial(material.url)}
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2 mt-auto"
                      disabled={!material.url}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Material</span>
                    </Button>
                  </div>
                );
              })}
              {/* MARF037 Security Awareness Training (Genially) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
                <div className="flex items-start space-x-3 mb-4 flex-1">
                  <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-gray-900 text-sm mb-1">MARF037 Security Awareness Training</h6>
                    <p className="text-xs text-gray-600 mb-2">Interactive Online Course</p>
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Online Course</span>
                  </div>
                </div>
                <Button
                  onClick={() => setShowMSAModal(true)}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Material</span>
                </Button>
                <Dialog open={showMSAModal} onOpenChange={setShowMSAModal}>
                  <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                    <DialogTitle className="p-4 border-b">MARF037 Security Awareness Training</DialogTitle>
                    <div style={{ width: '100%' }}>
                      <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 0, height: 0 }}>
                        <iframe
                          title="MARF037 Security Awareness Training"
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
              </div>
              {/* MARF041 – Observe personal safety and social responsibility (PSSR) (Genially) */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
                <div className="flex items-start space-x-3 mb-4 flex-1">
                  <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h6 className="font-medium text-gray-900 text-sm mb-1">MARF041 – Observe personal safety and social responsibility (PSSR)</h6>
                    <p className="text-xs text-gray-600 mb-2">Interactive Online Course</p>
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Online Course</span>
                  </div>
                </div>
                <Button
                  onClick={() => setShowPSSRModal(true)}
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 mt-auto"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Material</span>
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
              </div>
            </div>
            {/* Student Learner Handbook Paragraph and Button */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg mt-6">
              <h6 className="font-semibold text-blue-900 mb-2">Student Learner Handbook</h6>
              <p className="text-gray-700 leading-relaxed mb-4">
                This handbook provides comprehensive guidance to all students enrolled in our courses. It outlines policies and procedures relating to:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-2 text-gray-700">
                <li>Student rights and responsibilities</li>
                <li>Attendance and behavioural expectations</li>
                <li>Access to trainers and support services</li>
                <li>Complaints and appeals processes</li>
                <li>Workplace health and safety obligations</li>
                <li>Financial standards, refunds, and cancellations</li>
                <li>Recognition of prior learning (RPL)</li>
                <li>Academic integrity requirements</li>
                <li>Privacy and data management (in accordance with the Privacy Act 1988)</li>
                <li>External welfare and support contacts</li>
              </ul>
              <Button
                onClick={() => openCertificate("/docs/Learner Handbook Version 3.2[82].pdf")}
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Handbook</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Workplace Forms Section */}
      <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg mt-6">
        <h6 className="font-semibold text-orange-900 mb-2">MARF041 Workplace Forms and Checklists</h6>
        <p className="text-gray-700 leading-relaxed mb-4">
          For MARF041 there are workplace forms and checklists which can be found below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Button
            onClick={() => setShowWorkplaceForm('/docs/Enclosed Space Entry Permit.docx.pdf')}
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Enclosed Space Entry Permit</span>
          </Button>
          
          <Button
            onClick={() => setShowWorkplaceForm('/docs/Hazard Report Form.docx.pdf')}
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Hazard Report Form</span>
          </Button>
          
          <Button
            onClick={() => setShowWorkplaceForm('/docs/Hot Work.docx.pdf')}
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Hot Work</span>
          </Button>
          
          <Button
            onClick={() => setShowWorkplaceForm('/docs/Safety Minutes Form.docx.pdf')}
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Safety Minutes Form</span>
          </Button>
          
          <Button
            onClick={() => setShowWorkplaceForm('/docs/Incident Report Form.docx.pdf')}
            variant="outline"
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Incident Report Form</span>
          </Button>
        </div>
      </div>

      {/* Text Books AMSA Question */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 mt-8">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Text Books</h3>
            <p className="text-green-800 leading-relaxed">
              Text books—if required, a comprehensive reading list is to be made available to the students at the
              commencement of the training program. When considering e-learning online options, an RTO should ensure
              that web links provided work effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Text Books Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Learner Guides</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Each student is provided with a comprehensive Learner Guide at the commencement of the course for every unit delivered via e-learning or through blended in-class delivery. These guides serve as the primary reference materials, containing all required reading aligned with the unit of competency and knowledge evidence.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            They include clearly structured course content, key learning concepts, supporting diagrams, and self-study resources to assist with independent learning and assessment preparation. Hard copy Learner Guides are also issued during classroom sessions for each unit of competency. Our training and assessment strategies align with MT02 guidance on blended learning, ensuring the use of e-learning methods meets all STCW A-I/6 requirements.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Feel free to view our learner guides below.
          </p>
        </div>

        {/* Learner Guides */}
        <h6 className="font-medium text-gray-900 mb-4">Units of Competency - Learner Guides</h6>
        <div id="learner-guides" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
            <div className="flex items-start space-x-3 mb-4 flex-1">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h6 className="font-medium text-gray-900 text-sm mb-1">
                  MARF041 - Personal Safety & Social Responsibility
                </h6>
                <p className="text-xs text-gray-600 mb-2">PSSR Learner Guide</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  PDF Guide
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                openCertificate("/docs/AMSA STCW PSSR - MARF041 Personal Safety & Social Responsibility - LGV9.2 20190309.docx-2.pdf")
              }
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center space-x-2 mt-auto"
            >
              <Eye className="w-4 h-4" />
              <span>View Learner Guide</span>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
            <div className="flex items-start space-x-3 mb-4 flex-1">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h6 className="font-medium text-gray-900 text-sm mb-1">MARF046 - Personal Survival Techniques</h6>
                <p className="text-xs text-gray-600 mb-2">PST Learner Guide</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  PDF Guide
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                openCertificate("https://drive.google.com/file/d/1kuseAxnodY2vG9YXH_HBAKy7edrT2RHS/preview")
              }
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center space-x-2 mt-auto"
            >
              <Eye className="w-4 h-4" />
              <span>View Learner Guide</span>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
            <div className="flex items-start space-x-3 mb-4 flex-1">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h6 className="font-medium text-gray-900 text-sm mb-1">HLTAID011 - Provide First Aid</h6>
                <p className="text-xs text-gray-600 mb-2">First Aid Learner Guide</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  PDF Guide
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                openCertificate("https://drive.google.com/file/d/1EGho0HZ69YiCUhc8Pe4HRIJlwRMFzKDM/preview")
              }
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center space-x-2 mt-auto"
            >
              <Eye className="w-4 h-4" />
              <span>View Learner Guide</span>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full">
            <div className="flex items-start space-x-3 mb-4 flex-1">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h6 className="font-medium text-gray-900 text-sm mb-1">MARF037 - Maritime Security Awareness</h6>
                <p className="text-xs text-gray-600 mb-2">MSA Learner Guide</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  PDF Guide
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                openCertificate("/docs/MARF037_Learner_Guide.pdf")
              }
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center space-x-2 mt-auto"
            >
              <Eye className="w-4 h-4" />
              <span>View Learner Guide</span>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full md:col-span-2 lg:col-span-1">
            <div className="flex items-start space-x-3 mb-4 flex-1">
              <BookOpen className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h6 className="font-medium text-gray-900 text-sm mb-1">MARF035 - Fire Prevention & Firefighting</h6>
                <p className="text-xs text-gray-600 mb-2">Fire Learner Guide</p>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  PDF Guide
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                openCertificate("https://drive.google.com/file/d/1CXD-fwKZiaQisSfWIF1tcB1UDd5PjUET/preview")
              }
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center space-x-2 mt-auto"
            >
              <Eye className="w-4 h-4" />
              <span>View Learner Guide</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Facilities and Equipment AMSA Question */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 mt-8">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Facilities and Equipment</h3>
            <p className="text-green-800 leading-relaxed">
              Facilities and equipment - The submission documentation is to include information (including pictures) of
              all teaching aids, facilities and equipment that the students will utilise while undertaking the course.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities and Equipment Answer */}
      <div id="facilities-equipment" ref={facilitiesRef} className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Training Facilities and Equipment</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Students attend theory lessons in the classroom at our office ( address - Unit 5a/4 Skyline Place, Frenchs Forest, NSW, 2086, Australia. ). Our office has a welcome area, kitchen , 4 classrooms, tea room & student parking. The practical fire training is conducted via third party trainers at NSW Mines Rescue which is an AMSA approved fire training facility.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            The fire facility has a container designed to hold live fires and produce expansion foam. All fire gear is listed below . Our sea survival training is conducted at Warringah Aquatic centre in a 15m long pool with a 4m depth. We bring our own sea survival equipment which is listed below.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            We ensure that all students can demonstrate competency in practical tasks using real-world equipment, in compliance with AMSA and STCW training standards. Please see below for all our training facility photos and equipment we use in training, there are also live training photos of sea survival and fire fighting. Feel free to let us know if you need any additional photos.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-3">
            For our flare demonstrations which is part of the sea survival training we have 4 main locations we use: Bayview boat ramp, Newport Wharf, Narrabeen Lake, Warringah Aquatic Centre. We purchase brand new flares before each course for safety we do not use out of date flares. Before our flare demonstration a notification form is sent to AMSA with details of the flare demonstration. You can view a filled out form below.
          </p>
          
          <div className="mt-4">
            <Button 
              onClick={() => setShowFlareForm(true)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Form</span>
            </Button>
          </div>
        </div>

        {/* Facility Photo Galleries */}
        <h6 className="font-medium text-gray-900 mb-4">Training Facility Photo Galleries</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(facilityGalleries).map(([key, gallery]) => (
            <div
              key={key}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
            >
              <div className="flex items-start space-x-3 mb-4 flex-1">
                <Images className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h6 className="font-medium text-gray-900 text-sm mb-1">{gallery.title}</h6>
                  <p className="text-xs text-gray-600 mb-2">{gallery.description}</p>
                  <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                    {gallery.images.length} Photos
                  </span>
                </div>
              </div>
              <Button
                onClick={() => openGallery(key)}
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2 mt-auto"
                disabled={gallery.images.length === 0}
              >
                <Eye className="w-4 h-4" />
                <span>View Gallery</span>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Lists */}
      <div className="mt-8">
        <h6 className="font-medium text-gray-900 mb-4">Units of Competency - Equipment Lists</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
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

      {/* Simulators AMSA Question */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 mt-8">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Simulators</h3>
            <p className="text-green-800 leading-relaxed">
              Simulators—Simulators used for training must comply with the requirements specified in STCW Regulation l/6
              and Sections A-I/12 and B-I/12 of the STCW Code. In addition, lecturers using simulators must be trained
              to the requirements of IMO Model Course 6.10, Train the simulator trainer and assessor or equivalent as
              approved by us.
            </p>
          </div>
        </div>
      </div>

      {/* Simulators Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Simulator Training</h5>
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Not applicable. We currently do not use simulators in our STCW 95+10 training. However we have still reviewed the MT02 guidance document.
          </p>
        </div>
      </div>

      {/* Quality Management AMSA Question */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 mt-8">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question - Quality Management</h3>
            <p className="text-green-800 leading-relaxed">
              Evidence that current quality management is utilised within the organisation.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Management Answer */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Quality Management System</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Please find below our ISO 9001 certificate, issued following our successful audit in June 2025.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We have also included our Quality Management System documentation for your reference.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This certification confirms that our quality management practices are both effective and fully compliant with ISO 9001 standards.
          </p>
          <div className="mt-4">
            <Button
              onClick={() => openCertificate("/docs/QMS.01 CLUB SAIL QUALITY MANAGEMENT SYSTEM v2.4.pdf")}
              variant="outline"
              size="sm"
              className="flex items-center justify-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>View QMS</span>
            </Button>
          </div>
        </div>

        {/* ISO 9001 Certificate */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
          <div className="flex items-start space-x-3 mb-4">
            <Award className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h6 className="font-medium text-gray-900 text-sm mb-1">ISO 9001 Certificate of Registration</h6>
              <p className="text-xs text-gray-600">Quality Management System Certification</p>
            </div>
          </div>
          <Button
            onClick={() => openCertificate("/images/tqcsi-certificate.png")}
            variant="outline"
            size="sm"
            className="w-full flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Certificate</span>
          </Button>
        </div>
      </div>



      {/* Certificate/Document Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-[80vh] flex items-center justify-center">
              {selectedCertificate.match(/\.(png|jpg|jpeg)$/i) ? (
                <img
                  src={selectedCertificate}
                  alt="Certificate Preview"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              ) : selectedCertificate.match(/\.pdf$/i) ? (
                <iframe
                  src={selectedCertificate}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '70vh', border: 'none' }}
                  title="Certificate PDF"
                />
              ) : (
                <iframe
                  src={selectedCertificate}
                  width="100%"
                  height="100%"
                  style={{ minHeight: '70vh', border: 'none' }}
                  title="Certificate Document"
                  allow="autoplay"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Photo Gallery Modal */}
      {selectedGallery && currentGallery && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-6xl max-h-full">
            {/* Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
              <div className="text-white">
                <h3 className="text-lg font-semibold">{currentGallery.title}</h3>
                <p className="text-sm text-gray-300">
                  {currentImageIndex + 1} of {currentGallery.images.length}
                </p>
              </div>
              <Button
                onClick={closeGallery}
                variant="outline"
                size="sm"
                className="bg-white hover:bg-gray-100 shadow-lg"
              >
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
            </div>

            {/* Navigation Buttons */}
            {currentGallery.images.length > 1 && (
              <>
                <Button
                  onClick={prevImage}
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={nextImage}
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center pt-16 pb-16">
              <img
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Caption */}
            {currentImage.caption && (
              <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
                <p className="text-white bg-black bg-opacity-50 rounded-lg px-4 py-2 text-sm">{currentImage.caption}</p>
              </div>
            )}

            {/* Thumbnail Navigation */}
            {currentGallery.images.length > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex space-x-2 bg-black bg-opacity-50 rounded-lg p-2">
                  {currentGallery.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Flare Form Modal */}
      {showFlareForm && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setShowFlareForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full h-full">
              <iframe
                src="/docs/AMSA 50 Notice of Flare Demonstration 12 March 2025 Narrabeen.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="AMSA Flare Demonstration Notice"
              />
            </div>
          </div>
        </div>
      )}

      {/* Workplace Forms Modal */}
      {showWorkplaceForm && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setShowWorkplaceForm(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full h-full">
              <iframe
                src={showWorkplaceForm}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Workplace Form"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
