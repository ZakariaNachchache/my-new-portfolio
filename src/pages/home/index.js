import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import Button from "@mui/joy/Button";
import { Link, useNavigate } from "react-router-dom";
import french from "../../assets/NachchacheZakariaFrancais.pdf";
import english from "../../assets/NachchacheZakariaEnglish.pdf";
import Snackbar from "@mui/joy/Snackbar";
import { keyframes } from "@mui/system";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ResumeDialog";

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const Home = () => {
  const [open, setOpen] = useState(true);
  const animationDuration = 600;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleDownload = (resumeType) => {
    console.log("resume/index");
    const link = document.createElement("a");
    link.href = resumeType === "french" ? french : english;
    link.download =
      resumeType === "french"
        ? "NachchacheZakariaFrancais.pdf"
        : "NachchacheZakariaEnglish.pdf";
    link.click();

    navigate("/");
  };

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <br />
                  <div className="flex flex-row items-center justify-start gap-7 mt-2">
                    <div id="button_p" className=" ac_btn btn ">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button>Resume</button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Download Resume</AlertDialogTitle>
                            <AlertDialogDescription>
                              Please specify which resume version you are
                              willing to download.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setIsDialogOpen(false)}
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDownload("french")}
                            >
                              French
                            </AlertDialogAction>
                            <AlertDialogAction
                              onClick={() => handleDownload("english")}
                            >
                              English
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                    <Link to="/skills">
                      <div id="button_h" className="ac_btn btn">
                        My Skills
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        color="neutral"
        size="lg"
        variant="outlined"
        animationDuration={animationDuration}
        onClose={() => setOpen(false)}
        sx={[
          open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
          },
          !open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
          },
        ]}
        endDecorator={
          <Button
            onClick={() =>
              window.open(
                "https://github.com/ZakariaNachchache/my-new-portfolio",
                "_blank"
              )
            }
            size="sm"
            variant="soft"
            color="black"
          >
            Go To repo
          </Button>
        }
      >
        Fellow Developer? here's the source code for you
      </Snackbar>
    </HelmetProvider>
  );
};
