"use client";

import { useState } from "react";

export default function Home() {
  //
  const [name, setName] = useState("Johny");
  const [email, setEmail] = useState("my-email@gmail.com");
  const [password, setPassword] = useState(
    "secret password"
  );

  // Form: Submit handler

  const submit = (event: React.FormEvent) => {
    // Prevent Default Action
    event.preventDefault();

    console.log(name, email, password);
  };

  return (
    <main>
      <h1>Simple form in Next JS 14</h1>

      <form onSubmit={submit}>
        <label>
          <span>Name</span>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}
