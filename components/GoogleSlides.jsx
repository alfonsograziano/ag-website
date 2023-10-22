"use client";
import * as React from "react";

export default function GoogleSlides({ id }) {
  return (
    <iframe src={`https://docs.google.com/presentation/d/e/${id}/embed?start=false&loop=false&delayms=3000`} width="100%" height="100%" allowFullScreen></iframe>
  );
}
