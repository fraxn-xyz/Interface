(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{6335:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trade",function(){return c(376)}])},376:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(1799),f=c(9396),g=c(4051),h=c.n(g),i=c(5893),j=c(8019);c(3678);var k=c(3609),l=c(7294),m=new Headers;m.append("content-type","application/json");var n=JSON.stringify({query:"{\n  tokens(where: { fractionCount_gt: 0}) {\n    id\n    tokenId\n    owner \n    fractionContract\n    originalContract \n    fractionCount\n    tokenURI\n  }\n}",variables:{}}),o=function(a){var b,c=a.nftData,g=(0,l.useState)((0,f.Z)((0,e.Z)({},void 0===c?{}:c),{imageLoading:!0})),j=g[0],m=g[1],n=(b=(0,d.Z)(h().mark(function a(){var b,c,d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(j.nftImage.replace("ipfs://","https://ipfs.io/ipfs/"));case 2:return b=a.sent,a.next=5,b.json();case 5:d=(c=a.sent).image.replace("ipfs://","https://ipfs.io/ipfs/"),m((0,f.Z)((0,e.Z)({},j),{nftImage:d,imageLoading:!1}));case 8:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)});return(0,l.useEffect)(function(){n()},[]),(0,i.jsxs)("div",{className:"rounded-lg shadow-lg bg-white w-fit mb-0",children:[(0,i.jsx)("div",{children:j.imageLoading?(0,i.jsx)("div",{className:"animate-pulse flex items-center justify-center h-72 w-80 md:h-80 md:w-80 lg:h-72 lg:w-72",children:(0,i.jsx)("svg",{className:"h-64 w-72 md:h-72 md:w-72 lg:h-64 lg:w-64 rounded-lg bg-gray-200",viewBox:"0 0 24 24"})}):(0,i.jsx)("img",{className:"rounded-t-lg h-72 w-80 md:h-80 md:w-80 lg:h-72 lg:w-72",src:j.nftImage,alt:""})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"px-4 py-2 lg:py-4",children:[(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Original Address: "}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsxs)("a",{className:"text-sm text-emerald-900 hover:text-emerald-700",href:"".concat(k.W5+j.originalAddress),rel:"noreferrer",target:"_blank",children:[j.originalAddress.substring(0,2)+"..."+j.originalAddress.substring(j.originalAddress.length-4,j.originalAddress.length)," "]})]}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Fraction Address: "}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsxs)("a",{className:"text-sm text-emerald-900 hover:text-emerald-700",href:"".concat(k.W5+j.fractionAddress),rel:"noreferrer",target:"_blank",children:[j.fractionAddress.substring(0,2)+"..."+j.fractionAddress.substring(j.fractionAddress.length-4,j.fractionAddress.length),"  "]})]}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Token Id:"}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)("p",{className:"text-sm text-emerald-900",children:j.tokenID})]}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("p",{className:"text-emerald-700 text-sm font-semibold mb-2",children:"Fraction Count:"}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)("p",{className:"text-sm text-emerald-900",children:j.fractionCount})]})]}),(0,i.jsx)("div",{className:"h-full w-full",children:(0,i.jsx)("button",{onClick:function(){return window.open(j.openSeaLink,"_blank","noopener,noreferrer")},type:"button",className:"rounded-b-lg font-sans w-full py-4 bg-stiletto-500 hover:bg-stiletto-600 text-white font-semibold md:text-sm text-lg lg:text-xl",children:"Trade On Opensea"})})]})]},j.originalAddress+"-"+j.tokenID)},p=function(){var a,b=(0,l.useState)([]),c=b[0],e=b[1],f=(a=(0,d.Z)(h().mark(function a(){var b,c,f;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:var g;return b=[],a.next=3,fetch("https://api.thegraph.com/subgraphs/name/cpp-phoenix/scatter",{method:"POST",headers:m,body:g=n,redirect:"follow"});case 3:if(200!==(c=a.sent).status){a.next=10;break}return a.next=7,c.json();case 7:return f=a.sent,a.next=10,f.data.tokens.map(function(){var a=(0,d.Z)(h().mark(function a(c){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"0"!==c.fractionCount&&b.push({nftImage:c.tokenURI,originalAddress:c.originalContract,fractionAddress:c.fractionContract,tokenID:c.tokenId,fractionCount:c.fractionCount,openSeaLink:k.i9+c.fractionContract+"/"+c.tokenId,id:c.id});case 1:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}());case 10:e(b);case 11:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});return(0,l.useEffect)(function(){f()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{pageLoad:"Trade"}),(0,i.jsx)("div",{className:"bg-gin-50",children:(0,i.jsx)("div",{className:"pt-4 lg:pt-10 min-h-screen z-0",children:(0,i.jsx)("div",{className:"pt-28 z-0 w-full py-10",children:(0,i.jsx)("div",{className:"flex flex-rows justify-center w-full",children:(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6 lg:gap-10 xl:gap-12",children:c.map(function(a){return(0,i.jsx)(o,{nftData:a},a.id)})})})})})})]})};b.default=p}},function(a){a.O(0,[907,325,774,888,179],function(){var b;return a(a.s=6335)}),_N_E=a.O()}])