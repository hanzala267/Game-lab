import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./about.module.css";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  border,
} from "@chakra-ui/react";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <div className={styles.Name}>
            <h1 style={{ fontFamily: "poppins" }}>Welcome to Game-Lab</h1>
          </div>
          <div
            className={styles.Typewriter}
            style={{
              fontFamily: "mulish",
              fontSize: "5vh",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  '<span style="background: linear-gradient(90deg, rgba(251,67,12,1) 5%, rgba(255,174,124,1) 52%, rgba(0,212,255,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: rgb(100, 100, 100); font-weight: bold;">FPS Games</span>',

                  '<span style="background: linear-gradient(90deg, rgba(251,67,12,1) 5%, rgba(255,174,124,1) 52%, rgba(0,212,255,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: rgb(100, 100, 100); font-weight: bold;">Fighting Games</span>',

                  '<span style="background: linear-gradient(90deg, rgba(251,67,12,1) 5%, rgba(255,174,124,1) 52%, rgba(0,212,255,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: rgb(100, 100, 100); font-weight: bold;">Racing Games</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "",
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <section className={styles.section}></section>
      </div>
    </div>
  );
}

export default About;
