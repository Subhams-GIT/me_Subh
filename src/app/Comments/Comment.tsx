'use client'
import React from 'react'
import Giscus from '@giscus/react'
const Comment = () => {
  return (
	<div>
		<Giscus
      id="comments"
      repo="Subhams-GIT/me_Subh"
      repoId="R_kgDOOmAV0g"
      category="Ideas"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark"
      lang="en"
      loading="lazy"
    />
	</div>
  )
}

export default Comment