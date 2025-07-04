// pages/success.js

import Head from 'next/head'
import Link from 'next/link'

export default function Success() {
  return (
    <>
      <Head>
        <title>Success - Message Sent</title>
        <meta name="description" content="Your message was sent successfully!" />
      </Head>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅ Message Sent!</h1>
        <p style={{ marginBottom: '2rem' }}>
          Thanks for getting in touch. We’ll respond as soon as possible.
        </p>
        <Link href="/">
          <button
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </>
  )
}
