// passwordInput component handles password input changes

function PasswordInput() {

  // detects when the user types something
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
    </div>
  );
}

export default PasswordInput;