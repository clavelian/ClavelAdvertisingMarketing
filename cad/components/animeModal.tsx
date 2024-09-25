"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import c1 from "@/public/c1.png";
import c2 from "@/public/c2.png";
import c3 from "@/public/c3.png";
import c4 from "@/public/c4.png";
import Contactus from "./contactForm";

export function AnimatedModalDemo() {
  const images = [c1, c2, c3, c4];

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="px-6 py-2 font-light bg-teal-700 dark:bg-teal-700 dark:text-white text-white flex justify-center group/modal-btn">
          {/* group/modal-btn */}
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contact
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ❤️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <span className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Ready to take your content strategy to the next{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Level
              </span>{" "}
              ?
            </span>
            {/* <div className="flex justify-center items-center gap-4">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="Christmas"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div> */}
            <div className="py-2 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto"></div>
          </ModalContent>

          <Contactus />
        </ModalBody>
      </Modal>
    </div>
  );
}
