import React from "react";

const Card = (props) => {
  return (
    <div className="px-4 py-5 sm:px-6 -ml-4 -mt-4 border-b border-gray-200 pb-8 flex justify-between items-center flex-wrap sm:flex-no-wrap">
      <div className="ml-4 mt-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={props.avatar_url}
              alt=""
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {props.name}
              <span className="text-sm leading-5 text-gray-500 pl-2">
                @{props.login}
              </span>
            </h3>
            <p className="text-sm leading-5 text-gray-500">
              {props.public_repos} repositories. User since{" "}
              {props.created_at.slice(0, 4)}
            </p>
            <p className="text-sm leading-5 text-gray-500">
              {props.location || ""}
            </p>
            <p className="mt-1 text-sm leading-5 text-gray-500">{props.bio}</p>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-4 flex-shrink-0 flex">
        <span className="ml-3 inline-flex rounded-md shadow-sm">
          <a href={props.html_url}>
            <button
              type="button"
              className="mr-2 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
            >
              <span>Profile</span>
            </button>
          </a>
          <a href={props.blog}>
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
            >
              <span>Website</span>
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
