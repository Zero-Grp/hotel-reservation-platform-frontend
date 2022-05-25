/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export const Banner = () => {
  return (
    <div className="bg-indigo-600 rounded-lg">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Canceling your reservation won&apos;t refund.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
