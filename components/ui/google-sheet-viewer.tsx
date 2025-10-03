"use client"

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

interface GoogleSheetViewerProps {
  sheetId: string
  title: string
  buttonText?: string
  className?: string
}

export function GoogleSheetViewer({ 
  sheetId, 
  title, 
  buttonText = "View Sheet",
  className = ""
}: GoogleSheetViewerProps) {
  const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing`

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center justify-center space-x-2 ${className}`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{buttonText}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
        <DialogTitle className="p-4 border-b">{title}</DialogTitle>
        <div className="w-full h-[80vh]">
          <iframe
            src={sheetUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title={title}
            allow="clipboard-write"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 