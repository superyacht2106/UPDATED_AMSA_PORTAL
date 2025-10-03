import { Building, Globe, Mail, Phone, MapPin, User, Hash, FileText } from "lucide-react"

interface ContactSectionProps {
  onBack: () => void
}

export function ContactSection({ onBack }: ContactSectionProps) {
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
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Contact details</h1>
      </div>

      {/* AMSA Question Tile */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-green-900 mb-2">AMSA Question</h3>
            <p className="text-green-800 leading-relaxed">
              The full name and address of the Registered training organisation that is requesting approval to deliver
              the STCW certificate course or short course training and the campus location(s) where training is to be
              conducted or the administrative office for correspondence.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-6">Organisation Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* RTO Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Hash className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">RTO Code</p>
                <p className="text-gray-700">91462</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Building className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Legal Name</p>
                <p className="text-gray-700">Club Sail Pty Ltd</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Building className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Trading Name</p>
                <p className="text-gray-700">Superyacht Crew Academy</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Hash className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">ABN</p>
                <p className="text-gray-700">19 077 443 157</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Hash className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">ACN</p>
                <p className="text-gray-700">077 443 157</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">Address</p>
                <p className="text-gray-700">
                  Unit 5a/4 Skyline Place
                  <br />
                  Frenchs Forest, NSW, 2086
                  <br />
                  Australia
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Website</p>
                <a
                  href="https://www.superyacht-crew-academy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  www.superyacht-crew-academy.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Email</p>
                <a
                  href="mailto:train@superyachttraining.com.au"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  train@superyachttraining.com.au
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <a
                  href="tel:+61299799669"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  (02) 9979 9669
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Contacts */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-4">Key Contacts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <User className="w-4 h-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">Main Contact</p>
                <p className="text-gray-700">Greg Newby</p>
                <a
                  href="tel:+61405525521"
                  className="text-blue-700 underline hover:text-blue-900 text-sm"
                >
                  0405 525 521
                </a>
                <a
                  href="mailto:greg@superyachttraining.com.au"
                  className="text-blue-700 underline hover:text-blue-900 text-sm block"
                >
                  greg@superyachttraining.com.au
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <User className="w-4 h-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900">Communications/Marketing</p>
                <p className="text-gray-700">Sam Taylor</p>
                <a
                  href="tel:+61413659790"
                  className="text-blue-700 underline hover:text-blue-900 text-sm"
                >
                  0413 659 790
                </a>
                <a
                  href="mailto:sam@superyachttraining.com.au"
                  className="text-blue-700 underline hover:text-blue-900 text-sm block"
                >
                  sam@superyachttraining.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
