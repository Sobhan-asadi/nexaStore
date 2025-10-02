export default function Loader({
  size = "xl",
  text = "Loading...",
  center = true,
  color = "blue",
}) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colorClasses = {
    blue: "border-blue-200 border-t-blue-600",
    green: "border-green-200 border-t-green-600",
    red: "border-red-200 border-t-red-600",
    gray: "border-gray-200 border-t-gray-600",
  };

  const containerClasses = center
    ? "flex h-screen w-full items-center justify-center"
    : "flex items-center justify-center";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-4">
        <div
          className={` ${sizeClasses[size]} animate-spin rounded-full border-4 ${colorClasses[color]} `}
        />

        {text && (
          <p className="animate-pulse text-sm font-medium text-gray-600">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
