import { useState } from "react";

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`p-6 text-center ${
        isOn ? "bg-green-300" : "bg-gray-300"
      }`}
    >
      <p>{isOn ? "ON" : "OFF"}</p>

      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Toggle
      </button>
    </div>
  );
};

export default LightSwitch;