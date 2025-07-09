"use client"

import { useState } from "react"
import { FileText, Eye, X, Award, Users, BookOpen, ChevronLeft, ChevronRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    id: "cert-iv",
    title: "Certificate IV in Training and Assessment",
    description: "TAE40110 - Training and Assessment qualification",
    url: "https://drive.google.com/file/d/1145KtUV1ZeMoS5oOXVGkwqScUTIcuk3z/preview",
  },
  {
    id: "first-aid",
    title: "First Aid Certificate",
    description: "Current first aid certification",
    url: "https://drive.google.com/file/d/1JKi9TTdRwNYxlv3oIfG0usHAXh9CJtkz/preview",
  },
  {
    id: "police-check",
    title: "NSW Police Check",
    description: "Current NSW Police background check",
    url: "https://drive.google.com/file/d/1KXv47egtaqLbida5TwSXyFvEC4u3C7-n/preview",
  },
  {
    id: "working-children",
    title: "Working with Children Check",
    description: "Current Working with Children Check",
    url: "https://drive.google.com/file/d/1aD4qkGsATC64sJ6lKs0C0LsAtw4A8SH2/preview",
  },
  {
    id: "coc-master",
    title: "Certificate of Competency Master <35m",
    description: "AMSA Certificate of Competency",
    url: "https://drive.google.com/file/d/1XJjuckC1pWNRcihEXyWNwbO1UZRvBo39/preview",
  },
  {
    id: "amsa-cost",
    title: "AMSA Certificate of Safety Training",
    description: "STCW Basic Safety Training Certificate",
    url: "https://drive.google.com/file/d/1e4fL1m3g_1hJ-9WcVtqJ5Ce5i1brPT9Z/preview",
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
    description: "Course material coming soon",
    url: "",
    type: "Classroom Presentation",
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
    ],
  },
  "fire-fighting": {
    title: "Fire Fighting Training",
    description: "Practical firefighting training at NSW Mines Rescue facility",
    images: [], // To be populated when images are provided
  },
  "first-aid": {
    title: "First Aid",
    description: "First aid training equipment and classroom setup",
    images: [], // To be populated when images are provided
  },
  "pssr-equipment": {
    title: "PSSR Equipment",
    description: "Personal Safety and Social Responsibility training equipment",
    images: [], // To be populated when images are provided
  },
  "office-facility": {
    title: "Office Facility",
    description: "Our training office and administrative facilities",
    images: [], // To be populated when images are provided
  },
}

export function ConductTrainingSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
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
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Training Staff Qualifications</h3>

        {/* Answer Paragraph */}
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            All training and assessment at our organisation are conducted by personnel who meet the requirements of STCW
            Regulation I/6 and Sections A-I/6 and B-I/6 of the STCW Code. All trainers and assessors hold, at a minimum,
            the TAE40110 Certificate IV in Training and Assessment or its successor, as required. We do not currently
            offer simulator training. Please see below for trainers certification, maritime & training experience.
          </p>
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
              Greg Newby brings extensive maritime experience as a qualified Master with Certificate of Competency for
              vessels under 35 meters. His comprehensive training background includes STCW certification and specialized
              expertise in maritime safety training. With his Certificate IV in Training and Assessment, Greg ensures
              all training delivery meets both national VET standards and international STCW requirements.
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
                Our AMSA Certificate of Safety Training (CoST) course would be capped at a maximum of 30 students per
                intake to ensure quality delivery and participant safety. Practical components are conducted at
                specialised facilities, including NSW Mines Rescue for firefighting and the Warringah Aquatic Centre for
                sea survival training. Due to operational and safety considerations, we split larger cohorts into
                smaller groups for these sessions. Firefighting exercises are limited to 20 students per session, while
                sea survival activities are restricted to 25 students, with further division into smaller groups as
                needed. For all aquatic sessions, we maintain a trainer-to-student ratio of 1:10 to meet safety
                requirements and provide adequate supervision. For sea survival additional trainers are always brought
                in to assist students with the sea survival activities.
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
                    <p className="text-2xl font-bold text-gray-900">25</p>
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
                Please see below each unit of competency has its own course material. There are 3 online courses that
                will redirect you to a SCORM file which you can view online as student would of how the online course
                looks. For the in classroom training you will be able to view the presentations that will be displayed
                to students in the classroom with the instructor.
              </p>
            </div>

            {/* Units of Competency Course Materials */}
            <h6 className="font-medium text-gray-900 mb-4">Units of Competency - Course Materials</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseMaterials.map((material) => (
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
              ))}
            </div>
          </div>
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
            Each unit of competency will have a specific learner guide which will be given to students in classroom and
            online. The students will be given hard copy learner guides in the classroom and for online course a PDF
            version will be available to view and download for the students within the student portal.
          </p>
        </div>

        {/* Learner Guides */}
        <h6 className="font-medium text-gray-900 mb-4">Units of Competency - Learner Guides</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                openCertificate("https://drive.google.com/file/d/1Y2JoIJGDj2fGXdi-BXFan2DUuNet_L_o/preview")
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
                openCertificate("https://drive.google.com/file/d/194PqjQOybRJwWNsHZIH4xSkluBPNuR5T/preview")
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
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h5 className="font-medium text-gray-900 mb-4">Training Facilities and Equipment</h5>
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Please find below photos for all our training facility photos and equipment we use in training, there are
            also live training photos of sea survival and fire fighting.
          </p>
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
            Not applicable. We currently do not use simulators in our STCW 95+10 training.
          </p>
        </div>
      </div>

      {/* Certificate/Document Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-6xl max-h-full bg-white rounded-lg overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <Button
                onClick={closeCertificate}
                variant="outline"
                size="sm"
                className="bg-white hover:bg-gray-100 shadow-lg"
              >
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
            </div>
            {selectedCertificate.includes(".png") ||
            selectedCertificate.includes(".jpg") ||
            selectedCertificate.includes(".jpeg") ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={selectedCertificate || "/placeholder.svg"}
                  alt="Document"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ) : (
              <iframe
                src={selectedCertificate}
                className="w-full h-full border-0"
                title="Certificate"
                allow="autoplay"
              />
            )}
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
    </div>
  )
}
