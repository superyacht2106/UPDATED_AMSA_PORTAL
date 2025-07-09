"use client"

import { useState } from "react"
import {
  Home,
  User,
  Building,
  BookOpen,
  Target,
  CheckSquare,
  FileText,
  Key,
  Users,
  ClipboardCheck,
  Star,
  Award,
  Clock,
} from "lucide-react"

const navigationItems = [
  {
    id: "welcome",
    label: "Welcome",
    icon: Home,
  },
  {
    id: "contact-details",
    label: "Contact details",
    icon: User,
  },
  {
    id: "registered-training-organisation",
    label: "Registered training organisation",
    icon: Building,
  },
  {
    id: "full-title-course",
    label: "Full title of the course",
    icon: BookOpen,
  },
  {
    id: "aim-course",
    label: "Aim of the course",
    icon: Target,
  },
  {
    id: "objectives-course",
    label: "Objectives of the course",
    icon: CheckSquare,
  },
  {
    id: "course-curriculum",
    label: "Course curriculum",
    icon: FileText,
  },
  {
    id: "entry-standards",
    label: "Entry standards",
    icon: Key,
  },
  {
    id: "conduct-training",
    label: "Conduct of the training",
    icon: Users,
  },
  {
    id: "student-assessment-procedures",
    label: "Student assessment procedures",
    icon: ClipboardCheck,
  },
  {
    id: "quality-standards",
    label: "Quality standards",
    icon: Star,
  },
  {
    id: "course-completion-documentation",
    label: "Course completion documentation",
    icon: Award,
  },
  {
    id: "time-constraints",
    label: "Time constraints",
    icon: Clock,
  },
]

export function ApplicationSidebar({ onSectionChange }: { onSectionChange: (sectionId: string) => void }) {
  const [activeItem, setActiveItem] = useState("welcome")

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
    onSectionChange(itemId)
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Portal</h1>
            <p className="text-sm text-gray-600">Application Form</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                isActive ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-green-600" : "text-gray-500"}`} />
              <span className="text-sm font-medium truncate">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
