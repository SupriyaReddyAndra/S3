import React from "react";

const computeStrength = (password = "") => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[@$!%*?&]/.test(password)) score++;
  return score;
};

export default function PasswordStrength({ password }) {
  const score = computeStrength(password);
  const percent = (score / 4) * 100;
  const label = score <= 1 ? "Weak" : score === 2 ? "Fair" : score === 3 ? "Good" : "Strong";
  const barColor = score <= 1 ? "bg-red-500" : score === 2 ? "bg-yellow-400" : score === 3 ? "bg-emerald-400" : "bg-green-500";

  return (
    <div className="mt-2">
      <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
        <div className={`${barColor} h-full`} style={{ width: `${percent}%` }} />
      </div>
      <div className="text-xs mt-1 text-gray-600">{label}</div>
    </div>
  );
}
