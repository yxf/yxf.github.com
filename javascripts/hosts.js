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
