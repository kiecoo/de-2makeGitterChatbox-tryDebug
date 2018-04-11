//module.exports = gitterChat
module.exports = makeGitterURL
module.exports = exampleProfile

function makeGitterURL (username) {
  return `https://gitter.im/${username}/~embed`
}

var exampleProfile = {
  name: 'nina',
  username: 'ninabreznik',
  photo:'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'
}


	        //difference from the repo of makeGitterChatbox https://github.com/kiecoo/makeGitterChatbox/blob/master/index.html
//		var x = makeGitterChatbox(exampleProfile)
//		document.body.appendChild(x)
