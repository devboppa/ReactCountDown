import { useRef, useImperativeHandle } from "react";
export default function ResultModal({
  ref,
  remainingTime,
  targetTime,
  onReset,
}) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You Lost</h2> : <h2>You won. Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>{" "}
        seconds left.
      </p>
      <form action="" method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>
  );
}
