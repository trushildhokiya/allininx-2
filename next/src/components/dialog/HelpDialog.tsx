import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Dialog from "../../ui/dialog";

export default function HelpDialog() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = "agentgpt-modal-opened-v0.2";
    const savedModalData = localStorage.getItem(key);

    setTimeout(() => {
      if (savedModalData == null) {
        setShow(true);
      }
    }, 1500);

    localStorage.setItem(key, JSON.stringify(true));
  }, []);

  const [t] = useTranslation();
  return (
    <Dialog
      inline
      open={show}
      setOpen={setShow}
      title="Welcome to Allinix"
      actions={
        <>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
            onClick={() => {
              setShow(false);
            }}
          >
            I Understand
          </button>
        </>
      }
    >
      <div>
        <p className=" text-slate-4 text-center">
          Please note that Allinix is currently in experimental stage. <br/>
          We're constantly improving our service to provide you with the best experience.
        </p>
        <br />
      </div>
    </Dialog>
  );
}
