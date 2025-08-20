import { useRef, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function validate() {
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim() || !email.includes("@"))
      nextErrors.email = "Valid email is required";
    if (message.trim().length < 10)
      nextErrors.message = "Message must be at least 10 characters.";
    return nextErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      //focus first invalid fields using useRef
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) email.Ref.current?.focus();
      else if (nextErrors.message) messageRef.current?.focus();
      return;
    }

    //for now we will just log the form later we will send it to an api or something
    console.log({ name, email, message });

    //clear form:
    setName("");
    setEmail("");
    setMessage("");
    alert("Thanks! I'll get back to you soon.");
  }

  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/*Name*/}
        <div>
          <lable className="block text-sm mb-1">Name</lable>
          <input
            type="text"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // <-- setValue/setState
            className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            ref={messageRef}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)} // <-- setValue/setState
            className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
            placeholder="How can I help?"
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
        >
          Send
        </button>
      </form>
    </section>
  );
}
