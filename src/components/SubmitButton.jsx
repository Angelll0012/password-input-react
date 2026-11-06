// submitButton component handles mouse movements

function SubmitButton() {

  // detects when the mouse enters the button
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // Detects when the mouse leaves the button
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;