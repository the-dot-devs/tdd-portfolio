export default function HeaderBar({ id, text }) {
  return (
    <div>
      <h2 id={id} className="text-center text-white py-6">
        {text}
      </h2>
      <div className="min-h-[15px] bg-[#ad315e]" />
    </div>
  );
}
