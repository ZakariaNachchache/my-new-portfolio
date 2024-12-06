import "./style.css";

import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "../../components/ResumeDialog";
import { useNavigate } from "react-router-dom";
import french from "../../assets/NachchacheZakariaFrancais.pdf";
import english from "../../assets/NachchacheZakariaEnglish.pdf";

export default function Resume() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Open the custom alert dialog
    setIsDialogOpen(true);
  }, []);

  const handleCancel = () => {
    setIsDialogOpen(false);
    navigate("/");
  };

  const handleDownload = (resumeType) => {
    console.log("resume/index");
    const link = document.createElement("a");
    link.href = resumeType === "french" ? french : english;
    link.download =
      resumeType === "french"
        ? "NachchacheZakariaFrancais.pdf"
        : "NachchacheZakariaEnglish.pdf";
    link.click();
    setIsDialogOpen(false);
    navigate("/");
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Download Resume</AlertDialogTitle>
          <AlertDialogDescription>
            Please specify which resume version you are willing to download.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => handleCancel()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDownload("french")}>
            French
          </AlertDialogAction>
          <AlertDialogAction onClick={() => handleDownload("english")}>
            English
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
