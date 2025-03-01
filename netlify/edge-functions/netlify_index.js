  import { handleGrokRequest } from "../../src/handle_grok.js";

  export default async(req, context) => {
    const url = new URL(req.url);
    console.log('Request URL:', req.url);

    // 处理主页面
    const filePath = url.pathname;
    console.log('filePath:', filePath);
    if (filePath === '/' || filePath === '/index.html') {
        return context.rewrite('/static/index.html');
    }
    
    //处理grok请求
    return handleGrokRequest(req);
  }

  export const config = {
    path: "/*"
  };