export function toggler(){
  if (document.getElementById("app").className == "--dark") {
    document.getElementById("app").className = "light";
    document.getElementById('navbar').className = 'navbar'
  } else {
    document.getElementById("app").className = "--dark";
    document.getElementById('navbar').className = 'navbar --dark'
  }
}