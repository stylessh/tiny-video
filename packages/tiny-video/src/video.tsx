import React from "react";

export interface TinyVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  children?: React.ReactNode;
}

export function TinyVideo(props: TinyVideoProps) {
  const { ...videoProps } = props;
  
  return <video {...videoProps} />;
}

TinyVideo.displayName = "TinyVideo";
