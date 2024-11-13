import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope("email"); // Explicitly request email

      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      // Attempt to retrieve email from different possible locations
      let email =
        result.user.email ||
        result._tokenResponse?.email ||
        result.additionalUserInfo?.profile?.email;

      if (!email) {
        console.error("Google account has no email associated.");
        alert(
          "Unable to retrieve email from Google account. Please ensure email sharing is enabled in your Google account settings."
        );
        return;
      }

      const { displayName, photoURL } = result.user;

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: displayName, email, photo: photoURL }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to sign in with Google");
      }

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.error("Could not login with Google", error);
      alert("Google sign-in failed. Please try again.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
}
