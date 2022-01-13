export default function HeaderBar({ id, text }) {
  return (
    <div className="bg-slate-600 rounded-2xl">
      <h2 id={id} className="text-center text-white p-6">
        {text}
      </h2>
      <div className="min-h-[15px] bg-[#ad315e]" />
    </div>
  );
}
