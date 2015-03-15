$("#hotList").on( "click", function( event ) {
	React.unmountComponentAtNode(document.getElementById('container'));
    React.render(
        <List url='https://api.reddit.com/hot'/>,
        document.getElementById('content')
    )
})

$( "#topList" ).on( "click", function( event ) {
	React.unmountComponentAtNode(document.getElementById('container'));
	React.render(
        <List url='https://api.reddit.com/top'/>,
        document.getElementById('content')
    )

})



