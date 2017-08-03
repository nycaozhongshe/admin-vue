/**
 * @author zhaohuatai
 */
const zfesCore = {
	layerParamKey:"zfes_layer_param_key",
	callBackParamKey:"zfes_callback_param_key",
	storType:{sessionStorage:"sessionStorage",localStorage:"localStorage"},
	statusCode: {success:200, logicError:300, timeout:301,repeatError:303, authError:401,tokenError:402,serverError:500},
	keyCode: {ENTER: 13, ESC: 27, END: 35, HOME: 36,SHIFT: 16, TAB: 9,LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40,DELETE: 46, BACKSPACE:8},
	csrfTokenStoreName:"cs_token",
	csrfTikenHeaderName:"cs_token",
	ajaxError:function(xhr, ajaxOptions, thrownError){
		zfesCore.alertMsgz("网络错误，网络状态码: "+xhr.status+";错误信息: "+thrownError);
	},
	ajaxDone:function(data){
		if(!data.statusCode){
			zfesCore.alertMsgz("普通 ajax请求，必须自定义callback，此函数不予处理");
			return;
		}
		switch (data.statusCode) {
		case zfesCore.statusCode.success:zfesCore.alertMsgz(data);break;
		case zfesCore.statusCode.logicError:zfesCore.alertMsgz(data);break;
		case zfesCore.statusCode.authError:zfesCore.alertMsgz(data);break;
		case zfesCore.statusCode.repeatError:zfesCore.alertMsgz(data);break;
		case zfesCore.statusCode.tokenError:zfesCore.alertMsgz(data);break;
		case zfesCore.statusCode.serverError:zfesCore.alertMsgz(data);break;
		case zfesCore.statusCode.timeout:
			swal({
				  title: "警告提示",
				  text: "会话超时",
				  type: "warning",
				  showCancelButton: false,
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "确认",
				  closeOnConfirm: true
				},function(isConfirm){
					zfesCore.loadLogin();
				});
		break;
		default:zfesCore.alertMsgz(data);break;
	   }
	},
	alertMsgz:function(data){
		if(data){
			if(data.message){
				alertSwal.errorText(data.message);
			}else{
				alert(data);
			}
		}
	},
	loadLogin:function(){
		layer.open({
			  type: 2,
			  title:false,
			  top: '0px',
			  skin: 'layui-layer-rim', //加上边框
			  area: ['330px', '280px'], //宽高
			  content:['login_dialog.html', 'no']
		});
	}
	
};
var zfesInit={
		iniJqueryValidateConfig:function(){
			 $.validator.setDefaults(
						{   highlight:function(e){$(e).closest(".form-group").removeClass("has-success").addClass("has-error")},
							success:function(e){e.closest(".form-group").removeClass("has-error").addClass("has-success")},
							errorElement:"span",
							errorPlacement:function(e,r){e.appendTo(r.is(":radio")||r.is(":checkbox")?r.parent().parent().parent():r.parent())},
							errorClass:"help-block",
							validClass:"help-block"
						}
					);
		},
		initStore:function(){
			  if (!	.enabled) {
			       // alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.');
			        alert('本系统不支持您使用的浏览器，请检查Cookie设置是否允许，或者"Private Mode" 是否开启，或者升级您的浏览器。')
			        return
			    }
		},
		//需要处理：1：不是zfesajax的，2，第三方请求，返回jsonmsg的
		zfesAjaxCompleteInit:function(){
			$(document).ajaxComplete(function(event,xhr,options){
				if(xhr.responseJSON&&xhr.responseJSON.statusCode){
					var data=xhr.responseJSON;
					if(data){
						var handled=data.handled;
						if(!handled&&data.statusCode!=200){zfesCore.ajaxDone(xhr.responseJSON);}
					}
				}
			});
		},
		zfesAjaxSetupInit:function(){
			$.ajaxSetup({
				  xhrFields: {withCredentials: true},
			      crossDomain: true,	
				  beforeSend: function (xhr) {
					  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
					  if(sessionStorage){
						xhr.setRequestHeader(zfesCore.csrfTikenHeaderName, sessionStorage.getItem(zfesCore.csrfTokenStoreName));
						xhr.withCredentials=true;
					  }
			     }
			});
		}
}

$(function(){
	zfesInit.iniJqueryValidateConfig();
	zfesInit.zfesAjaxCompleteInit();
	zfesInit.zfesAjaxSetupInit();
});

