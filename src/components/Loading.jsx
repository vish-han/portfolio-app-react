import React from 'react'
import './Loading.css'
const Loading = () => {
  return (
    <>
    <svg viewBox="0 0 960 300">
	<symbol id="s-text">
		<text text-anchor="middle" x="50%" y="80%"> </text>
    <text text-anchor="middle" x="52%" y="80%">AUYK. </text>
    
	</symbol>

	<g class = "g-ants">
		<use class="text-copy"></use>
		<use class="text-copy"></use>
		<use class="text-copy"></use>
		<use  class="text-copy"></use>
		<use  class="text-copy"></use>
	</g>
</svg>
    </>
  )
}

export default Loading