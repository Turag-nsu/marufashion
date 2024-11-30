"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
    { id: 1, title: "Video 1 title here", path: "/videos/Video-1.mp4" },
    { id: 2, title: "Video 2 here", path: "/videos/Video-2.mp4" },
    // { id: 3, title: "Video 3", path: "/videos/Video-3.mp4" },
    // { id: 4, title: "Video 4", path: "/videos/Video-4.mp4" },
    // { id: 5, title: "Video 5", path: "/videos/Video-5.mp4" },
];

const VideoGallery = () => {
    const [currentVideo, setCurrentVideo] = useState(videos[0].path);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="video-gallery max-w-5xl mx-auto mt-10">
            {/* Stylish Video Player */}
            <div className="player-wrapper bg-black rounded-lg shadow-lg overflow-hidden">
                <video
                    controls
                    className="w-full rounded-md border-2 border-gray-800"
                    style={{ aspectRatio: "16/9" }}
                    key={currentVideo} // Key ensures the player resets when changing videos
                >
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            {/* Slider for Video Thumbnails */}
            <div className="video-thumbnails mt-6">
                <h2 className="text-xl font-bold mb-4">Select a Video:</h2>
                <Slider {...sliderSettings}>
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="thumbnail-item cursor-pointer px-2"
                            onClick={() => setCurrentVideo(video.path)}
                        >
                            <div className="relative">
                                <video
                                    src={video.path}
                                    className="rounded-md shadow-md hover:scale-105 transition-transform"
                                    muted
                                    preload="metadata"
                                    style={{ height: "120px", width: "100%", objectFit: "cover" }}
                                />
                                <p className="absolute bottom-2 left-2 text-sm text-white bg-black bg-opacity-70 px-2 py-1 rounded">
                                    {video.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default VideoGallery;