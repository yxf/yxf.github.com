var hosts = [
  'www.ygdy8.net',
  'www.dytt8.net',
  'www.dy2018.com',
  'www.66ys.tv',
  'www.dygang.com',
  'www.poxiao.com',
  'www.beiwo.tv',
  'movie.mtime.com',
  'kan.sogou.com',
  'www.1905.com',
  'www.6vhao.com',
  'www.6vhao.net',
  'www.mp4ba.com',
  'www.loldytt.com',
  'www.dytt.com',
  'www.xiamp4.com',
  'www.4567.tv'
]

var baseUrl = "http://188.166.208.143/movies/score";
var baseApiUrl = "http://188.166.208.143/movies/score.json";

function isValidHost(url){
  var url = new URL(url)
  if( hosts.indexOf(url.hostname) >= 0 ) return true;
  return false;
}
function displaySearch(){
  var html = '<div id="search"> \
      <form action="https://movie.douban.com/subject_search" method="get" target="_blank" class="search__form"> \
        <input name="search_text" type="search" placeholder="电影名" autocomplete="off" /> \
        <input type="submit" value="豆瓣搜索" class="btn"> \
      </form> \
    </div>';
  document.body.innerHTML = html;
}

function displayScore(params){
  document.body.innerHTML = '<img src="spinner.gif" class="loading" id="loading">';
  var url =  baseUrl + "?"
  if(params) {
    url += params.join("&");
  }
  
  var iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style = "padding:0px; margin:0px; overflow:hidden;";
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.frameBorder = "0";
  iframe.scrolling = "no";
  iframe.onload = function(){
    var loadingImg = document.getElementById("loading");
    document.body.removeChild(loadingImg);
  };
  document.body.appendChild(iframe);
}
