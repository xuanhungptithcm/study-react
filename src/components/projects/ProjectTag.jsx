export default function ProjectTag({ tag }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center"
      style={{
        backgroundColor: tag,
      }}
    >
      <span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8333 19.8333L25.6666 14L19.8333 8.16667M8.16659 8.16667L2.33325 14L8.16659 19.8333M16.3333 3.5L11.6666 24.5"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
