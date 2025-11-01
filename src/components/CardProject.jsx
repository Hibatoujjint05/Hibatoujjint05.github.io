import React from "react";
import { ExternalLink } from "lucide-react";

const CardProject = ({ Img, Title, Description, Link: ProjectLink }) => {
  return (
    <div className="group relative w-full">
      {/* Card background */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy/90 to-navy/80 backdrop-blur-lg border border-gold/10 shadow-lg transition-all duration-300 hover:shadow-gold/30">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-lightgold/10 to-gold/10 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Title + Description */}
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-gold to-lightgold bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed">
              {Description}
            </p>

            {/* GitHub Link */}
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gold hover:text-lightgold transition-colors duration-200"
                >
                  <span className="text-sm font-medium">View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">Link Not Available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
