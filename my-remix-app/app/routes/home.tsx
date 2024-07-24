import React from "react";
import logo from "../images/logo.png";
import { Link } from "@remix-run/react";
import heroImage from "../images/darkbannr.png";
import mobileHeader from "../images/mobileheader.png";

export default function home() {
  return (
  <>
  <div className="bg-black">
  <img src={logo} alt="brand-logo" />
  </div>
  </>
  );
}
