import React from 'react';

export default ({videoId, autoplay = 0, showinfo, rel = 1}) => {
	const src = "https://www.youtube.com/embed/" + 
        videoId + "?autoplay=" + 
        autoplay + "&rel=" + 
        rel + "&showinfo=" +
        showinfo;
    return (
        <div >
            <iframe type="text/html" width="100%" height="390px"
			  src={src}
			  frameborder="0"/>
        </div>
    );
}  


// var YouTube = React.createClass({
//   render: function() {
//     var videoSrc = "https://www.youtube.com/embed/" + 
//         this.props.video + "?autoplay=" + 
//         this.props.autoplay + "&rel=" + 
//         this.props.rel + "&modestbranding=" +
//         this.props.modest;
//     return (
//       <div className="container">
//         <iframe className="player" type="text/html" width="100%" height="100%"
//   src={videoSrc}
//   frameborder="0"/>
//       </div>
//     );
//   }
// });

// React.render(
//   <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />,
//   document.body
// );