"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

export default function NotionPage({ recordMap }) {
  return <NotionRenderer recordMap={recordMap} />;
}
