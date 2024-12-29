export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>x</strong> seconds left.
      </p>
      <form action="" method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
}
