import {autorequest} from './autorequest'

// const baseUrl = "http://123.207.32.32:8000/api/hy";
const baseUrl = "http://106.54.54.237:8000/api/hy";

export function getHomeMultidata() {
  return autorequest({
    url: `${baseUrl}/home/multidata`
  })
}

export function getHomeGoods(type,page) {
  return autorequest({
    url: `${baseUrl}/home/data`,
    params: {
      type,
      page
    }
  })
}