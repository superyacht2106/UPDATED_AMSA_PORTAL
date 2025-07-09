"use client"

import { useState } from "react"
import { FileText, Eye, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const documents = [
  {
    id: "asqa-certificate",
    title: "ASQA Certificate of Registration",
    description: "Australian Skills Quality Authority registration certificate",
    image: "/images/asqa-certificate.png",
  },
  {
    id: "business-registration",
    title: "Record of Registration for Business Name",
    description: "ASIC business name registration for Superyacht Crew Academy",
    image: "/images/asic-business-registration.jpeg",
  },
  {
    id: "marshall-islands-certificate",
    title: "TQCSI Certificate of Registration",
    description: "ISO 9001:2015 Quality Management System certification",
    image: "/images/tqcsi-certificate.png",
  },
]

export function RegisteredTrainingSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const openScopeLink = () => {
    window.open("https://training.gov.au/organisation/details/91462/scope_overview", "_blank")
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Registered training organisation</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              As being an approved Registered training organisation is a prerequisite, documentary evidence issued by
              the appropriate Australian authority (VET Regulator or TEQSA) should be included in the submission. All
              STCW courses to be approved must be listed on the Registered training organisation scope of registration.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-4">Supporting Documentation</h3>
        <p className="text-gray-700 mb-6">
          See images below for ASQA certificate of registration, Record of Registration for Business Name & Marshall
          Islands certificate.
        </p>

        {/* Document Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors flex flex-col h-full"
            >
              <div className="flex items-start space-x-3 mb-4 flex-1">
                <FileText className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{doc.title}</h4>
                  <p className="text-xs text-gray-600">{doc.description}</p>
                </div>
              </div>
              <Button
                onClick={() => openImage(doc.image)}
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center space-x-2 mt-auto"
              >
                <Eye className="w-4 h-4" />
                <span>View Document</span>
              </Button>
            </div>
          ))}
        </div>

        {/* Scope of Registration Section */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-gray-900 mb-4">Scope of Registration</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Please click below to view our full scope of registration on training.gov, we are approved by ASQA to
            provide MARSS00033 Safety Training Certification Skill Set.
          </p>
          <Button onClick={openScopeLink} className="flex items-center space-x-2">
            <ExternalLink className="w-4 h-4" />
            <span>View Full Scope on Training.gov</span>
          </Button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImage}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Document"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
