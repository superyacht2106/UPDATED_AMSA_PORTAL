"use client"

import { useState, useMemo } from "react"
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
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"

const navigationItems = [
  {
    id: "welcome",
    label: "Welcome",
    icon: Home,
  },
  {
    id: "contact-details",
    label: "1. Contact details",
    icon: User,
  },
  {
    id: "registered-training-organisation",
    label: "2. Registered training organisation",
    icon: Building,
  },
  {
    id: "full-title-course",
    label: "3. Full title of the course",
    icon: BookOpen,
  },
  {
    id: "aim-course",
    label: "4. Aim of the course",
    icon: Target,
  },
  {
    id: "objectives-course",
    label: "5. Objectives of the course",
    icon: CheckSquare,
  },
  {
    id: "course-curriculum",
    label: "6. Course curriculum",
    icon: FileText,
  },
  {
    id: "entry-standards",
    label: "7. Entry standards",
    icon: Key,
  },
  {
    id: "conduct-training",
    label: "8. Conduct of the training",
    icon: Users,
  },
  {
    id: "student-assessment-procedures",
    label: "9. Student assessment procedures",
    icon: ClipboardCheck,
  },
  {
    id: "quality-standards",
    label: "10. Quality standards",
    icon: Star,
  },
  {
    id: "course-completion-documentation",
    label: "11. Course completion documentation",
    icon: Award,
  },
  {
    id: "time-constraints",
    label: "12. Time constraints",
    icon: Clock,
  },
]

export function ApplicationSidebar({ onSectionChange }: { onSectionChange: (sectionId: string, documentName?: string, anchorId?: string) => void }) {
  const [activeItem, setActiveItem] = useState("welcome")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)


  const handleItemClick = (itemId: string) => {
    setSearchQuery("") // Clear search first
    setActiveItem(itemId)
    setSelectedDocument(null) // Clear document selection when clicking a section
    onSectionChange(itemId)
  }

  const handleDocumentClick = (sectionId: string, documentName: string, anchorId?: string) => {
    setSearchQuery("") // Clear search first
    setActiveItem(sectionId)
    setSelectedDocument(documentName) // Track which specific document was selected
    onSectionChange(sectionId, documentName, anchorId)
  }

  // Create a comprehensive list of all navigation items including e-learning sections
  const allNavigationItems = useMemo(() => {
    const eLearningItems = [
      { id: "e-learning-section-1", label: "E1. Access to Lecturers", icon: Users },
      { id: "e-learning-section-2", label: "E2. Student Support", icon: Users },
      { id: "e-learning-section-3", label: "E3. Course Intake Limitations", icon: Users },
      { id: "e-learning-section-4", label: "E4. Course Notes and Reference Documents", icon: Users },
      { id: "e-learning-section-5", label: "E5. Text Books", icon: Users },
      { id: "e-learning-section-6", label: "E6. Facilities and Equipment", icon: Users },
      { id: "e-learning-section-7", label: "E7. Class Attendance", icon: Users },
      { id: "e-learning-section-8", label: "E8. Time Constraints", icon: Users },
    ]
    
    const additionalItems = [
      { id: "continued-competence", label: "Continued Competence", icon: Users },
    ]
    
    return [...navigationItems, ...eLearningItems, ...additionalItems]
  }, [])

  // Create a comprehensive search index including documents, content, and keywords
  const searchIndex = useMemo(() => {
    return [
      // Section 2 - Registered Training Organisation
      { name: "ASQA Certificate of Registration", description: "Australian Skills Quality Authority registration certificate", sectionId: "registered-training-organisation", sectionName: "2. Registered training organisation", type: "certificate", keywords: ["ASQA", "registration", "certificate", "authority"], anchorId: "asqa-certificate" },
      { name: "Record of Registration for Business Name", description: "ASIC business name registration for Superyacht Crew Academy", sectionId: "registered-training-organisation", sectionName: "2. Registered training organisation", type: "certificate", keywords: ["ASIC", "business", "registration", "name"], anchorId: "business-registration" },
      { name: "TQCSI Certificate of Registration", description: "ISO 9001:2015 Quality Management System certification", sectionId: "registered-training-organisation", sectionName: "2. Registered training organisation", type: "certificate", keywords: ["TQCSI", "ISO", "quality", "management", "system"], anchorId: "tqcsi-certificate" },
      { name: "Marshall Islands Certificate", description: "Marshall Islands certificate of registration", sectionId: "registered-training-organisation", sectionName: "2. Registered training organisation", type: "certificate", keywords: ["Marshall", "Islands", "certificate"], anchorId: "marshall-islands-certificate" },
      
      // Section 8 - Conduct of Training
      { name: "Certificate IV in Training and Assessment", description: "TAE40122 - Training and Assessment qualification", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "certificate", keywords: ["TAE40122", "training", "assessment", "certificate", "IV"], anchorId: "cert-iv" },
      { name: "First Aid Certificate", description: "Current first aid certification", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "certificate", keywords: ["first", "aid", "certificate", "HLTAID011"], anchorId: "first-aid" },
      { name: "NSW Police Check", description: "Current NSW Police background check", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "certificate", keywords: ["NSW", "police", "check", "background"], anchorId: "police-check" },
      { name: "Working with Children Check", description: "Current Working with Children Check", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "certificate", keywords: ["working", "children", "check", "WWCC"], anchorId: "working-children" },
      { name: "Certificate of Competency Master <35m", description: "AMSA Certificate of Competency", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "certificate", keywords: ["competency", "master", "35m", "AMSA", "CoC"], anchorId: "coc-master" },
      { name: "AMSA Certificate of Safety Training", description: "STCW Basic Safety Training Certificate", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "certificate", keywords: ["AMSA", "safety", "training", "STCW", "CoST"], anchorId: "amsa-cost" },
      
      // Section 9 - Student Assessment Procedures
      { name: "MARF037 Observation Checklist", description: "Follow vessel security procedures (security awareness training)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF037", "security", "awareness", "observation", "checklist"], anchorId: "marf037-checklist" },
      { name: "MARF041 Observation Checklist", description: "Observe personal safety and social responsibility (PSSR)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF041", "PSSR", "safety", "social", "responsibility", "observation", "checklist"], anchorId: "marf041-checklist" },
      { name: "MARF046 Observation Checklist", description: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF046", "PST", "survival", "sea", "abandonment", "observation", "checklist"], anchorId: "marf046-checklist" },
      { name: "HLTAID011 Assessment Guide", description: "Provide First Aid", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["HLTAID011", "first", "aid", "assessment", "guide"], anchorId: "hltaid011-checklist" },
      { name: "MARF035 Observation Checklist", description: "Contribute to fire prevention and firefighting (basic firefighting)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF035", "fire", "fighting", "prevention", "observation", "checklist"], anchorId: "marf035-checklist" },
      { name: "MARF035 Assessment Plan", description: "Contribute to fire prevention and firefighting (basic firefighting)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF035", "fire", "fighting", "assessment", "plan"], anchorId: "marf035-assessment-plan" },
      { name: "MARF037 Assessment Plan", description: "Follow vessel security procedures (security awareness training)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF037", "security", "assessment", "plan"], anchorId: "marf037-assessment-plan" },
      { name: "MARF041 Assessment Plan", description: "Observe personal safety and social responsibility (PSSR)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF041", "PSSR", "assessment", "plan"], anchorId: "marf041-assessment-plan" },
      { name: "MARF046 Assessment Plan", description: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF046", "PST", "assessment", "plan"], anchorId: "marf046-assessment-plan" },
      { name: "MARF037 Marking Guide", description: "Follow vessel security procedures (security awareness training)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF037", "security", "marking", "guide"], anchorId: "marf037-marking-guide" },
      { name: "MARF041 Marking Guide", description: "Observe personal safety and social responsibility (PSSR)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF041", "PSSR", "marking", "guide"], anchorId: "marf041-marking-guide" },
      { name: "MARF046 Marking Guide", description: "Survive at sea in the event of vessel abandonment and personal survival techniques (PST)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF046", "PST", "marking", "guide"], anchorId: "marf046-marking-guide" },
      { name: "HLTAID011 Marking Guide", description: "Provide First Aid", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["HLTAID011", "first", "aid", "marking", "guide"], anchorId: "hltaid011-marking-guide" },
      { name: "MARF035 Marking Guide", description: "Contribute to fire prevention and firefighting (basic firefighting)", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "assessment", keywords: ["MARF035", "fire", "fighting", "marking", "guide"], anchorId: "marf035-marking-guide" },
      { name: "Training and Assessment Strategy", description: "MARSS00033 Training and Assessment Strategy 2025", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "strategy", keywords: ["MARSS00033", "training", "assessment", "strategy", "TAS"], anchorId: "training-assessment-strategy" },
      { name: "Final Examination Monitoring Procedure", description: "Student monitoring during final assessments", sectionId: "student-assessment-procedures", sectionName: "9. Student assessment procedures", type: "procedure", keywords: ["final", "examination", "monitoring", "procedure", "assessment"], anchorId: "final-examination-monitoring" },
      
      // Section 10 - Quality Standards
      { name: "Quality Management System", description: "QMS.01 CLUB SAIL QUALITY MANAGEMENT SYSTEM v2.4", sectionId: "quality-standards", sectionName: "10. Quality standards", type: "system", keywords: ["QMS", "quality", "management", "system", "club", "sail"], anchorId: "quality-management-system" },
      { name: "Course Review Form", description: "3.1 Course Review Form 031221", sectionId: "quality-standards", sectionName: "10. Quality standards", type: "form", keywords: ["course", "review", "form", "3.1"], anchorId: "course-review-form" },
      { name: "Learner Handbook", description: "Learner Handbook Version 3.2", sectionId: "quality-standards", sectionName: "10. Quality standards", type: "handbook", keywords: ["learner", "handbook", "student", "guide"], anchorId: "learner-handbook" },
      
      // Section 11 - Course Completion Documentation
      { name: "Statement of Attainment", description: "Sample Statement of Attainment Example", sectionId: "course-completion-documentation", sectionName: "11. Course completion documentation", type: "certificate", keywords: ["statement", "attainment", "certificate", "completion"], anchorId: "statement-of-attainment" },
      
      // Section 12 - Time Constraints
      { name: "STCW 95+10 Course Completion Time Policy", description: "STCW 95+10 Course Completion Time Policy - CCP_01", sectionId: "time-constraints", sectionName: "12. Time constraints", type: "policy", keywords: ["STCW", "course", "completion", "time", "policy", "CCP_01", "95+10"], anchorId: "stcw-course-completion-policy" },
      
      // E-learning Sections
      { name: "STCW 95+10 Course Completion Time Policy (E8)", description: "STCW 95+10 Course Completion Time Policy - CCP_01", sectionId: "e-learning-section-8", sectionName: "E8. Time Constraints", type: "policy", keywords: ["STCW", "course", "completion", "time", "policy", "CCP_01", "95+10", "elearning"], anchorId: "stcw-course-completion-policy-e8" },
      { name: "HLTAID011 Learner Guide", description: "Provide First Aid", sectionId: "e-learning-section-5", sectionName: "E5. Text Books", type: "guide", keywords: ["HLTAID011", "first", "aid", "learner", "guide"] },
      { name: "MARF035 Learner Guide", description: "Contribute to fire prevention and firefighting", sectionId: "e-learning-section-5", sectionName: "E5. Text Books", type: "guide", keywords: ["MARF035", "fire", "fighting", "learner", "guide"] },
      { name: "MARF037 Learner Guide", description: "Follow vessel security procedures", sectionId: "e-learning-section-5", sectionName: "E5. Text Books", type: "guide", keywords: ["MARF037", "security", "learner", "guide"] },
      { name: "MARF041 Learner Guide", description: "Observe personal safety and social responsibility", sectionId: "e-learning-section-5", sectionName: "E5. Text Books", type: "guide", keywords: ["MARF041", "PSSR", "learner", "guide"] },
      { name: "MARF046 Learner Guide", description: "Survive at sea in the event of vessel abandonment", sectionId: "e-learning-section-5", sectionName: "E5. Text Books", type: "guide", keywords: ["MARF046", "PST", "learner", "guide"] },
      
      // Additional Content Keywords
      { name: "Fire Fighting Training", description: "Practical firefighting training at NSW Mines Rescue facility", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "content", keywords: ["fire", "fighting", "training", "NSW", "mines", "rescue", "practical"], anchorId: "fire-fighting-training" },
      { name: "Sea Survival Training", description: "Live training photos from sea survival sessions at Warringah Aquatic Centre", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "content", keywords: ["sea", "survival", "training", "Warringah", "aquatic", "centre", "pool"], anchorId: "sea-survival-training" },
      { name: "First Aid Training", description: "First aid training equipment and classroom setup", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "content", keywords: ["first", "aid", "training", "equipment", "classroom"], anchorId: "first-aid-training" },
      { name: "PSSR Equipment", description: "Personal Safety and Social Responsibility training equipment", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "content", keywords: ["PSSR", "safety", "social", "responsibility", "equipment"], anchorId: "pssr-equipment" },
      { name: "Office Facility", description: "Our training office and administrative facilities", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "content", keywords: ["office", "facility", "administrative", "training"], anchorId: "office-facility" },
      
      // Course Materials
      { name: "MARF037 - Maritime Security Awareness", description: "Online SCORM course material", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "material", keywords: ["MARF037", "maritime", "security", "awareness", "MSA", "online", "SCORM"], anchorId: "marf037-course" },
      { name: "MARF041 - Personal Safety & Social Responsibility", description: "Online SCORM course material", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "material", keywords: ["MARF041", "PSSR", "personal", "safety", "social", "responsibility", "online", "SCORM"], anchorId: "marf041-course" },
      { name: "HLTAID011 - Provide First Aid", description: "Interactive Online Course", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "material", keywords: ["HLTAID011", "first", "aid", "interactive", "online", "course"], anchorId: "hltaid011-course" },
      { name: "MARF035 - Fire Prevention & Firefighting", description: "Classroom presentation material", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "material", keywords: ["MARF035", "fire", "prevention", "firefighting", "classroom", "presentation"], anchorId: "marf035-course" },
      { name: "MARF046 - Personal Survival Techniques", description: "Classroom presentation material", sectionId: "conduct-training", sectionName: "8. Conduct of the training", type: "material", keywords: ["MARF046", "PST", "personal", "survival", "techniques", "classroom", "presentation"], anchorId: "marf046-course" },
    ]
  }, [])

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return allNavigationItems
    
    const query = searchQuery.toLowerCase()
    return allNavigationItems.filter(item => 
      item.label.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query)
    )
  }, [allNavigationItems, searchQuery])

  // Filter search results based on query
  const filteredDocuments = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    return searchIndex.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query) ||
      item.sectionName.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
    )
  }, [searchIndex, searchQuery])

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="/images/SCA_Logo_CMYK-11.png"
            alt="Superyacht Crew Academy Logo"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 bg-white"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Application Portal</h1>
            <p className="text-sm text-gray-600">Superyacht Crew Academy</p>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search sections, documents, and content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>

      {/* Scrollable Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {searchQuery ? (
            // Show filtered results when searching
            <>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Search Results ({filteredItems.length + filteredDocuments.length})
              </div>
              
              {/* Section Results */}
              {filteredItems.length > 0 && (
                <>
                  <div className="px-3 py-1 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Sections ({filteredItems.length})
                  </div>
                  {filteredItems.map((item) => {
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
                </>
              )}
              
              {/* Document Results */}
              {filteredDocuments.length > 0 && (
                <>
                  {filteredItems.length > 0 && <div className="my-2 border-t border-gray-200"></div>}
                  <div className="px-3 py-1 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Documents ({filteredDocuments.length})
                  </div>
                  {filteredDocuments.map((doc, index) => {
                    const isSectionActive = activeItem === doc.sectionId
                    const isDocumentSelected = selectedDocument === doc.name && isSectionActive

                    return (
                      <button
                        key={`doc-${index}`}
                        onClick={() => handleDocumentClick(doc.sectionId, doc.name, doc.anchorId)}
                        className={`w-full flex items-start space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                          isDocumentSelected ? "bg-blue-50 text-blue-700 border border-blue-200" : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <FileText className={`w-5 h-5 mt-0.5 ${isDocumentSelected ? "text-blue-600" : "text-gray-500"}`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{doc.name}</div>
                          <div className="text-xs text-gray-500 truncate">{doc.description}</div>
                          <div className="text-xs text-gray-400 truncate">in {doc.sectionName}</div>
                        </div>
                      </button>
                    )
                  })}
                </>
              )}
              
              {/* No Results */}
              {filteredItems.length === 0 && filteredDocuments.length === 0 && (
                <div className="px-3 py-4 text-sm text-gray-500 text-center">
                  No sections or documents found matching "{searchQuery}"
                </div>
              )}
            </>
          ) : (
            // Show normal navigation when not searching
            <>
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
              
              {/* Line break and section title for additional items */}
              <div className="my-4 border-t border-gray-200"></div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Additional e-learning details</div>
              
              {/* E-learning Sections */}
              <button
                onClick={() => handleItemClick("e-learning-section-1")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-1" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-1" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E1. Access to Lecturers</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-2")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-2" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-2" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E2. Student Support</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-3")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-3" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-3" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E3. Course Intake Limitations</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-4")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-4" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-4" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E4. Course Notes and Reference Documents</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-5")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-5" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-5" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E5. Text Books</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-6")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-6" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-6" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E6. Facilities and Equipment</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-7")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-7" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-7" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E7. Class Attendance</span>
              </button>
              
              <button
                onClick={() => handleItemClick("e-learning-section-8")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "e-learning-section-8" ? "bg-green-50 text-green-700 border border-green-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "e-learning-section-8" ? "text-green-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">E8. Time Constraints</span>
              </button>
              
              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>
              
              <div className="px-3 py-2">
                <h3 className="text-sm font-bold text-gray-900 mb-3">APPLICATION FOR REVALIDATION</h3>
              </div>
              
              <button
                onClick={() => handleItemClick("continued-competence")}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  activeItem === "continued-competence" ? "bg-blue-50 text-blue-700 border border-blue-200" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Users className={`w-5 h-5 ${activeItem === "continued-competence" ? "text-blue-600" : "text-gray-500"}`} />
                <span className="text-sm font-medium truncate">Continued Competence</span>
              </button>
              
            </>
          )}
        </nav>
      </div>
    </div>
  )
}
