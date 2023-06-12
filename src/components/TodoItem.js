export function TodoItem({ index, text, completed, onComplete }) {
  return (
    <div className="flex items-center justify-center gap-2 bg-slate-700 rounded-lg px-6 py-2 mb-2 ring-1 ring-slate-900 shadow-xl">
      <input
        type="checkbox"
        checked={completed}
        className="enabled:hover:border-gray-400 accent-green-600"
        onClick={()=>onComplete(index, completed)}
      />
      <p> {text} </p>
      <span>delete</span>
    </div>
  );
}
