import axios from 'axios';
axios.defaults.withCredentials = true
export const ajax = (url,param, callback,fialCallback) => {
	return axios({
		 	method: 'post',
            url: url,
            headers: {"X-Requested-With:XMLHttpRequest"},
            withCredentials: true,
            data: param,
            timeout: 50000,
            transformRequest:(request)=>{
					request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					if(sessionStorage){request.setRequestHeader(zfesCore.csrfTikenHeaderName, sessionStorage.getItem(zfesCore.csrfTokenStoreName));}
				}//token ...	
			})
			.then((data) => {
				if(callback){
					callback(data);
				}else{
					alert("普通 ajax请求，必须自定义callback，此函数不予处理");
				}
			})
			.catch((jqXHR, textStatus, errorThrown) => {
					if(fialCallback){
					fialCallback(jqXHR, textStatus, errorThrown);
			}else{
//					zfesCore.ajaxError(jqXHR, textStatus, errorThrown);
			}
			});
};
export const ajaxHtml = (url,param, callback,fialCallback) => {
	return axios({
		 	method: 'get',
            url: url,
            headers: {"X-Requested-With:XMLHttpRequest"},
            withCredentials: true,
            params: param,
//          responseType:'html',          
            timeout: 50000,
            transformRequest:(request)=>{
					request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					if(sessionStorage){request.setRequestHeader(zfesCore.csrfTikenHeaderName, sessionStorage.getItem(zfesCore.csrfTokenStoreName));}
				}//token ...	
			})
			.then((data, textStatus, jqXHR) => {
				if(callback){
				callback(data, textStatus, jqXHR);
			}else{
				alert("普通 ajax请求，必须自定义callback，此函数不予处理");
				//zfesCore.ajaxDone(data);
			}
			})
			.catch((jqXHR, textStatus, errorThrown) => {
					if(fialCallback){
					fialCallback(jqXHR, textStatus, errorThrown);
			}else{
//					zfesCore.ajaxError(jqXHR, textStatus, errorThrown);
			}
			});
};
export const ajaxGet = (url,param, callback,fialCallback) => {
	return axios({
		 	method: 'get',
            url: url,
            headers: {"X-Requested-With:XMLHttpRequest"},
            withCredentials: true,
            responseType:'json',           
            params: param,
            timeout: 50000,
            transformRequest:(request)=>{
					request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					if(sessionStorage){request.setRequestHeader(zfesCore.csrfTikenHeaderName, sessionStorage.getItem(zfesCore.csrfTokenStoreName));}
				}//token ...	
			})
			.then((data, textStatus, jqXHR) => {
				if(callback){
				callback(data, textStatus, jqXHR);
			}else{
				alert("普通 ajax请求，必须自定义callback，此函数不予处理");
				//zfesCore.ajaxDone(data);
			}
			})
			.catch((jqXHR, textStatus, errorThrown) => {
					if(fialCallback){
					fialCallback(jqXHR, textStatus, errorThrown);
			}else{
//					zfesCore.ajaxError(jqXHR, textStatus, errorThrown);
			}
			});
};
export const ajaxTodo = (url,param, callback,fialCallback) => {
	return axios({
		 	method: 'post',
            url: url,
            headers: {"X-Requested-With:XMLHttpRequest"},
            withCredentials: true,
            data: param,
            timeout: 50000,
            responseType:'json',
            transformRequest:(request)=>{
					request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					if(sessionStorage){request.setRequestHeader(zfesCore.csrfTikenHeaderName, sessionStorage.getItem(zfesCore.csrfTokenStoreName));}
				}//token ...	
			})
			.then((data) => {
				if(data.statusCode==zfesCore.statusCode.success){
				callback(data);
			}else{
				if(fialCallback){
					fialCallback(data);
				}else{
					zfesCore.ajaxDone(data);
				}
			}
			}else{
				alert("普通 ajax请求，必须自定义callback，此函数不予处理");
				//zfesCore.ajaxDone(data);
			}
			})
			.catch((jqXHR, textStatus, errorThrown) => {
					if(fialCallback){
					fialCallback(jqXHR, textStatus, errorThrown);
			}else{
//					zfesCore.ajaxError(jqXHR, textStatus, errorThrown);
			}
			});
};


