import React from 'react';

function Member({ profile }) {
  return (
    <div className="flex h-full w-full p-5">
      <div className="w-1/2 h-full">
        <img
          alt={profile.memberName}
          src={profile.memberImg}
          className="object-cover h-full w-full rounded-lg"
          style={profile.customStyle}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col  items-start p-8 ">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-700">
          {profile.memberName}
        </h3>
        <div className="text-xl leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
          {profile.memberPosition}
        </div>
        <div className="mt-4 text-lg text-gray-600">
          Any kind of content here! Primum in nostrane potestate est, quid meminerimus? Nulla erit controversia. Vestri haec verecundius, illi fortasse constantius.
        </div>
      </div>
    </div>
  );
}

export default Member;


