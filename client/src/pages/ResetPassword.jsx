function ResetPassword() {
  return (
    <div>

      <h1>Reset Password</h1>

      <form>

        <input
          type="password"
          placeholder="New Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit">
          Update Password
        </button>

      </form>

    </div>
  );
}

export default ResetPassword;