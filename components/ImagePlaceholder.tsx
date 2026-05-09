interface ImagePlaceholderProps {
  className?: string;
  height?: string;
}

export default function ImagePlaceholder({
  className = "",
  height = "h-48",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center rounded-xl ${height} ${className}`}
    >
      <p className="text-gray-400 text-sm font-medium text-center px-4">
        Tenho que colocar as imagens aqui
      </p>
    </div>
  );
}
