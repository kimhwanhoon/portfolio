"use client";
// top => An image
// middle => Title, subtitle
// bottom => badges (tags)
/* eslint-disable @next/next/no-img-element */
import { Badge, Card, CardSection } from "@mantine/core";
import { useState, useEffect } from "react";

export interface CardType1Props {
  image: {
    originalImage: { alt: string; src: string };
    playback: { alt: string; src: string };
  };
  title: string;
  subtitle: string;
  badgeNames?: string[];
}

export const CardType1: React.FC<CardType1Props> = ({
  image,
  title = "This is title.",
  subtitle = "This is subtitle.",
  badgeNames = ["first", "second"],
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPlaybackPlaying, setIsPlaybackPlaying] = useState<boolean>(false);

  useEffect(() => {
    let enterTimer: NodeJS.Timeout;
    let playbackTimer: NodeJS.Timeout;
    let leaveTimer: NodeJS.Timeout;
    let stopPlaybackTimer: NodeJS.Timeout;

    if (isHovering) {
      enterTimer = setTimeout(() => {
        setIsPlaybackPlaying(true);
      }, 200);
    } else {
      leaveTimer = setTimeout(() => {
        setIsPlaybackPlaying(false);
      }, 300);
    }

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(playbackTimer);
      clearTimeout(leaveTimer);
      clearTimeout(stopPlaybackTimer);
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl"
    >
      <CardSection>
        {!isPlaybackPlaying ? (
          <img
            className={`h-[200px] w-full object-cover transition-all duration-300 md:h-[300px] ${isHovering && "opacity-0"}`}
            alt={image?.originalImage?.alt}
            src={image?.originalImage?.src}
          />
        ) : (
          <img
            className={`h-[200px] w-full object-cover transition-all duration-300 md:h-[300px] ${!isHovering && "opacity-0"}`}
            alt={image?.playback?.alt}
            src={image?.playback?.src}
          />
        )}
      </CardSection>

      <div className="pt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{subtitle}</p>
        <div className="mt-4 flex items-center gap-2">
          {badgeNames.map((badgeName, index) => (
            <Badge key={`badge_${index}`} variant="outline">
              {badgeName}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
