import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import Helmet from 'react-helmet';

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <script>
                    {`
                        (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
                        ;r.type="text/javascript"
                        ;r.integrity="sha384-JuTNYkgKcv1YWHTHxD083VG16UGvE0QIORVstsbIKtGUBrB1ldQRU9eyEZEreszu"
                        ;r.crossOrigin="anonymous";r.async=true
                        ;r.src="https://cdn.amplitude.com/libs/amplitude-6.0.0-min.gz.js"
                        ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
                        console.log("[Amplitude] Error: could not load SDK")}}
                        ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
                        ;function s(e,t){e.prototype[t]=function(){
                        this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
                        var o=function(){this._q=[];return this}
                        ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
                        ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
                        ;return this}
                        ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
                        ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
                        ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
                        ;function v(e){function t(t){e[t]=function(){
                        e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
                        for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
                        e=(!e||e.length===0?"$default_instance":e).toLowerCase()
                        ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
                        ;e.amplitude=n})(window,document);
                        ${
                            process.env.NODE_ENV === 'production'
                                ? `amplitude.getInstance().init('220b104561e86dedd55448ffb3fd032d');`
                                : ''
                        }
                    `}
                </script>
            </Helmet>
            <CSSReset />
            <Global
                styles={css`
                    body {
                        background-color: #f4f2fa;
                    }
                `}
            />
            {element}
        </ThemeProvider>
    );
};
