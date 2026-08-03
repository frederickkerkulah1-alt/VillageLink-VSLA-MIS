function ForgotPassword() {
  return (
    <div>

      <h1>Forgot Password</h1>

      <p>
        Enter your registered email address to receive password reset instructions.
      </p>

      <form>

        <input
          type="email"
          placeholder="Email Address"
        />

        <button type="submit">
          Send Reset Link
        </button>

      </form>

    </div>
  );
}

export default ForgotPassword;