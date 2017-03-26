import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <div>
      <Link href='/'>
        <a>home</a>
      </Link>
    </div>
    <div>
      <Link href='/other'>
        <a>other</a>
      </Link>
    </div>
  </div>
)
